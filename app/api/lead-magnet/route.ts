import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { leadMagnets } from '@/lib/lead-magnets'
import { getImmediateEmail } from '@/lib/email-sequences'

// ── Environment validation ─────────────────────────────────────────────────

function getEnv() {
  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  const missing = [
    !resendApiKey && 'RESEND_API_KEY',
    !toEmail && 'CONTACT_TO_EMAIL',
    !supabaseUrl && 'SUPABASE_URL',
    !supabaseKey && 'SUPABASE_SERVICE_ROLE_KEY',
  ].filter(Boolean)

  if (missing.length) {
    return { ok: false as const, missing }
  }

  return {
    ok: true as const,
    resendApiKey: resendApiKey!,
    toEmail: toEmail!,
    supabaseUrl: supabaseUrl!,
    supabaseKey: supabaseKey!,
  }
}

// ── POST /api/lead-magnet ──────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── Parse body ──────────────────────────────────────────────────────────
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
    const email     = typeof body.email === 'string'     ? body.email.trim().toLowerCase() : ''
    const slug      = typeof body.leadMagnetSlug === 'string' ? body.leadMagnetSlug.trim() : ''

    // ── Validate ────────────────────────────────────────────────────────────
    if (!firstName || firstName.length > 100) {
      return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }
    if (!slug || !leadMagnets[slug]) {
      return NextResponse.json({ error: 'Unknown lead magnet.' }, { status: 400 })
    }

    const magnet = leadMagnets[slug]

    // ── Environment ─────────────────────────────────────────────────────────
    const env = getEnv()
    if (!env.ok) {
      console.error('[lead-magnet] Missing env vars:', env.missing)
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // ── Supabase insert ─────────────────────────────────────────────────────
    const supabase = createClient(env.supabaseUrl, env.supabaseKey)

    const { error: dbError } = await supabase.from('lead_magnets').insert({
      first_name: firstName,
      email,
      source_page: magnet.sourcePage,
      lead_magnet_name: magnet.name,
    })

    if (dbError) {
      console.error('[lead-magnet] Supabase error:', dbError)
      // Don't block the download — log and continue
    }

    // ── Send notification email ─────────────────────────────────────────────
    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    const subject = `New Download: ${magnet.name}`

    const htmlBody = `
<table style="font-family: Arial, sans-serif; font-size: 15px; color: #2E3A46; max-width: 600px; width: 100%; border-collapse: collapse;">
  <tr>
    <td style="padding: 24px 0 8px;">
      <h2 style="margin: 0; font-size: 18px; color: #0B1F33;">New Lead Magnet Download</h2>
      <p style="margin: 6px 0 0; font-size: 14px; color: #9AA5AF;">${magnet.name}</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid #E8EDF2;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; width: 130px; vertical-align: top;">Name</td>
          <td style="padding: 6px 0; color: #2E3A46;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Email</td>
          <td style="padding: 6px 0; color: #2E3A46;"><a href="mailto:${email}" style="color: #00B8AE;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Date</td>
          <td style="padding: 6px 0; color: #2E3A46;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Resource</td>
          <td style="padding: 6px 0; color: #2E3A46;">${magnet.name}</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid #E8EDF2;">
      <p style="margin: 0; font-size: 13px; color: #9AA5AF;">
        This lead was captured from ${magnet.sourcePage} and saved to your Supabase lead_magnets table.
      </p>
    </td>
  </tr>
</table>
`

    const textBody = [
      `New Lead Magnet Download: ${magnet.name}`,
      ``,
      `Name:     ${firstName}`,
      `Email:    ${email}`,
      `Date:     ${formattedDate}`,
      `Resource: ${magnet.name}`,
      ``,
      `Saved to Supabase lead_magnets table.`,
    ].join('\n')

    const resend = new Resend(env.resendApiKey)

    const { error: sendError } = await resend.emails.send({
      from: 'Beth Aden AI Website <onboarding@resend.dev>',
      to: [env.toEmail],
      subject,
      text: textBody,
      html: htmlBody,
    })

    if (sendError) {
      console.error('[lead-magnet] Resend notification error:', sendError)
      // Don't block the download — notification email is secondary
    }

    // ── Send visitor thank-you email (Day 0 of email sequence) ─────────────
    const visitorEmail = getImmediateEmail(slug, firstName)

    if (visitorEmail) {
      const { error: visitorEmailError } = await resend.emails.send({
        from: 'Beth Aden AI <onboarding@resend.dev>',
        to: [email],
        subject: visitorEmail.subject,
        text: visitorEmail.text,
        html: visitorEmail.html,
      })

      if (visitorEmailError) {
        // Log but never block the download — visitor already has the file
        console.error('[lead-magnet] Visitor email error:', visitorEmailError)
      }
    }

    // ── Return download URL ─────────────────────────────────────────────────
    return NextResponse.json({
      success: true,
      downloadUrl: magnet.downloadPath,
    })
  } catch (error) {
    console.error('[lead-magnet] Unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
