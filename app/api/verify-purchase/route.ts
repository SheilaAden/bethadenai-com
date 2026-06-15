/**
 * POST /api/verify-purchase
 *
 * Called by the Thank You page immediately after Stripe redirects the buyer.
 * Verifies the Stripe Checkout Session, sends the purchase email, logs to
 * Supabase, and returns a signed download token.
 *
 * Request body: { sessionId: string }
 *
 * Response (success):
 *   { success: true, downloadToken: string, customerEmail: string, customerName: string }
 *
 * Response (error):
 *   { success: false, error: string }
 *
 * ENV VARS REQUIRED:
 *   STRIPE_SECRET_KEY        — Stripe secret key (sk_live_... or sk_test_...)
 *   DOWNLOAD_TOKEN_SECRET    — Secret for HMAC-SHA256 token signing (min 32 chars)
 *   RESEND_API_KEY           — For sending purchase email
 *   SUPABASE_URL             — Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY — Supabase service role key
 */

import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { getPurchaseEmail } from '@/lib/email-sequences'

// ── Environment ────────────────────────────────────────────────────────────

function getEnv() {
  const stripeKey       = process.env.STRIPE_SECRET_KEY
  const tokenSecret     = process.env.DOWNLOAD_TOKEN_SECRET
  const resendApiKey    = process.env.RESEND_API_KEY
  const supabaseUrl     = process.env.SUPABASE_URL
  const supabaseKey     = process.env.SUPABASE_SERVICE_ROLE_KEY

  const missing = [
    !stripeKey    && 'STRIPE_SECRET_KEY',
    !tokenSecret  && 'DOWNLOAD_TOKEN_SECRET',
    !resendApiKey && 'RESEND_API_KEY',
    !supabaseUrl  && 'SUPABASE_URL',
    !supabaseKey  && 'SUPABASE_SERVICE_ROLE_KEY',
  ].filter(Boolean)

  if (missing.length) {
    return { ok: false as const, missing }
  }

  return {
    ok: true as const,
    stripeKey: stripeKey!,
    tokenSecret: tokenSecret!,
    resendApiKey: resendApiKey!,
    supabaseUrl: supabaseUrl!,
    supabaseKey: supabaseKey!,
  }
}

// ── Stripe session fetch (no SDK — raw HTTP) ───────────────────────────────

interface StripeSession {
  id: string
  payment_status: 'paid' | 'unpaid' | 'no_payment_required'
  customer_details?: {
    email?: string
    name?: string
  }
  customer_email?: string
  amount_total: number
  metadata?: Record<string, string>
}

async function fetchStripeSession(
  sessionId: string,
  secretKey: string
): Promise<StripeSession | null> {
  const credentials = Buffer.from(`${secretKey}:`).toString('base64')

  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
    {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Stripe-Version': '2024-04-10',
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    console.error('[verify-purchase] Stripe fetch failed:', res.status, await res.text())
    return null
  }

  return res.json() as Promise<StripeSession>
}

// ── Token generation ────────────────────────────────────────────────────────

function generateDownloadToken(sessionId: string, secret: string): string {
  return createHmac('sha256', secret).update(sessionId).digest('hex')
}

// ── POST handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const sessionId = typeof body.sessionId === 'string' ? body.sessionId.trim() : ''

    if (!sessionId || !sessionId.startsWith('cs_')) {
      return NextResponse.json(
        { success: false, error: 'Invalid session ID.' },
        { status: 400 }
      )
    }

    const env = getEnv()
    if (!env.ok) {
      console.error('[verify-purchase] Missing env vars:', env.missing)
      return NextResponse.json(
        { success: false, error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    // ── 1. Verify Stripe session ──────────────────────────────────────────
    const session = await fetchStripeSession(sessionId, env.stripeKey)

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Could not verify your purchase. Please contact hello@bethadenai.com.' },
        { status: 400 }
      )
    }

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, error: 'Payment not confirmed. Please contact hello@bethadenai.com if you were charged.' },
        { status: 402 }
      )
    }

    const customerEmail = session.customer_details?.email ?? session.customer_email ?? ''
    const customerName  = session.customer_details?.name ?? ''
    const firstName     = customerName.split(' ')[0] || 'there'

    // ── 2. Generate signed download token ─────────────────────────────────
    const downloadToken = generateDownloadToken(sessionId, env.tokenSecret)

    // ── 3. Log purchase to Supabase (non-blocking) ────────────────────────
    try {
      const supabase = createClient(env.supabaseUrl, env.supabaseKey)
      const { error } = await supabase.from('purchases').upsert({
        stripe_session_id: sessionId,
        product_slug: 'ai-visibility-starter-kit',
        customer_email: customerEmail,
        customer_name: customerName,
        amount_total: session.amount_total,
      }, {
        onConflict: 'stripe_session_id',
        ignoreDuplicates: true,
      })
      if (error) {
        console.error('[verify-purchase] Supabase upsert error:', error)
      }
    } catch (dbErr) {
      console.error('[verify-purchase] Supabase error:', dbErr)
    }

    // ── 4. Send purchase email (non-blocking) ─────────────────────────────
    if (customerEmail) {
      try {
        const purchaseEmail = getPurchaseEmail(
          'ai-visibility-starter-kit',
          firstName,
          sessionId,
          downloadToken
        )

        if (purchaseEmail) {
          const resend = new Resend(env.resendApiKey)
          const { error: emailError } = await resend.emails.send({
            from: 'Beth Aden AI <hello@bethadenai.com>',
            to: [customerEmail],
            subject: purchaseEmail.subject,
            html: purchaseEmail.html,
            text: purchaseEmail.text,
          })
          if (emailError) {
            console.error('[verify-purchase] Email error:', emailError)
          }
        }
      } catch (emailErr) {
        console.error('[verify-purchase] Email error:', emailErr)
      }
    }

    // ── 5. Return download token ──────────────────────────────────────────
    return NextResponse.json({
      success: true,
      downloadToken,
      customerEmail,
      customerName,
    })
  } catch (err) {
    console.error('[verify-purchase] Unexpected error:', err)
    return NextResponse.json(
      { success: false, error: 'Unexpected error. Please contact hello@bethadenai.com.' },
      { status: 500 }
    )
  }
}
