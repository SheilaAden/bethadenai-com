import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  business: string
  email: string
  reason: string
  message?: string
}

type LeadSyncResult =
  | { status: 'success'; httpStatus: number; detail: string }
  | { status: 'missing-secret' }
  | { status: 'http-error'; httpStatus: number; detail: string }
  | { status: 'network-error'; detail: string }

const VISIBILITY_OS_LEAD_WEBHOOK_URL =
  'https://beth-ai-visibility-os.vercel.app/api/integrations/website-leads'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

async function syncLeadToVisibilityOS(payload: ContactPayload): Promise<LeadSyncResult> {
  const webhookSecret = process.env.website_lead_webhook_secret

  if (!webhookSecret) {
    return { status: 'missing-secret' }
  }

  try {
    const response = await fetch(VISIBILITY_OS_LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify({
        ...payload,
        sourceUrl: 'https://bethadenai.com/contact',
      }),
      cache: 'no-store',
    })

    const detail = await response.text()

    if (!response.ok) {
      return {
        status: 'http-error',
        httpStatus: response.status,
        detail: detail.slice(0, 500),
      }
    }

    return {
      status: 'success',
      httpStatus: response.status,
      detail: detail.slice(0, 500),
    }
  } catch (error) {
    return {
      status: 'network-error',
      detail: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()
    const name = body.name?.trim()
    const business = body.business?.trim()
    const email = body.email?.trim()
    const reason = body.reason?.trim()
    const message = body.message?.trim() || ''

    if (!name || !business || !email || !reason) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL
    const apiKey = process.env.RESEND_API_KEY

    if (!toEmail || !apiKey) {
      console.error('[contact] Required email configuration is missing.', {
        hasContactToEmail: Boolean(toEmail),
        hasResendApiKey: Boolean(apiKey),
      })
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 },
      )
    }

    const subject = `New inquiry: ${reason} — ${name} (${business})`
    const textBody = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      `Reason: ${reason}`,
      '',
      'Message:',
      message || '(no message provided)',
    ].join('\n')

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;color:#2E3A46;max-width:600px">
        <h2 style="color:#0B1F33">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message || '(no message provided)')}</p>
      </div>
    `

    const resend = new Resend(apiKey)
    const { error: sendError } = await resend.emails.send({
      from: 'Beth Aden AI Website <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    if (sendError) {
      console.error('[contact] Resend error:', sendError)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email directly.' },
        { status: 500 },
      )
    }

    const leadSync = await syncLeadToVisibilityOS({
      name,
      business,
      email,
      reason,
      message,
    })

    console.log('[contact] Submission completed.', {
      to: toEmail,
      subject,
      replyTo: email,
      leadSync,
    })

    return NextResponse.json({ success: true, leadSync })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    )
  }
}
