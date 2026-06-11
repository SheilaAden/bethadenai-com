import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

/* ─────────────────────────────────────────────
   Contact Form Route Handler
   POST /api/contact

   Required environment variables:
     CONTACT_TO_EMAIL   — the inbox that receives form submissions
     RESEND_API_KEY     — Resend API key (set in Vercel project settings)
   ───────────────────────────────────────────── */

interface ContactPayload {
  name: string
  business: string
  email: string
  reason: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()
    const { name, business, email, reason, message } = body

    // ── Validate required fields ──────────────────────────
    if (!name?.trim() || !business?.trim() || !email?.trim() || !reason?.trim()) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // ── Recipient from environment variable ───────────────
    const toEmail = process.env.CONTACT_TO_EMAIL
    if (!toEmail) {
      console.error('[contact] CONTACT_TO_EMAIL is not configured.')
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not configured.')
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // ── Build email content ───────────────────────────────
    const subject = `New inquiry: ${reason} — ${name} (${business})`

    const textBody = [
      `Name:          ${name}`,
      `Business:      ${business}`,
      `Email:         ${email}`,
      `Reason:        ${reason}`,
      ``,
      `Message:`,
      message?.trim() || '(no message provided)',
    ].join('\n')

    const htmlBody = `
<table style="font-family: Arial, sans-serif; font-size: 15px; color: #2E3A46; max-width: 600px; width: 100%; border-collapse: collapse;">
  <tr>
    <td style="padding: 24px 0 8px;">
      <h2 style="margin: 0; font-size: 18px; color: #0B1F33;">New Contact Form Submission</h2>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid #E8EDF2;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; width: 130px; vertical-align: top;">Name</td>
          <td style="padding: 6px 0; color: #2E3A46;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Business</td>
          <td style="padding: 6px 0; color: #2E3A46;">${business}</td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Email</td>
          <td style="padding: 6px 0; color: #2E3A46;"><a href="mailto:${email}" style="color: #00B8AE;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 16px 6px 0; font-weight: bold; color: #0B1F33; vertical-align: top;">Reason</td>
          <td style="padding: 6px 0; color: #2E3A46;">${reason}</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid #E8EDF2;">
      <p style="margin: 0 0 8px; font-weight: bold; color: #0B1F33;">Message</p>
      <p style="margin: 0; color: #2E3A46; white-space: pre-wrap;">${message?.trim() || '(no message provided)'}</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid #E8EDF2;">
      <p style="margin: 0; font-size: 13px; color: #9AA5AF;">
        Reply directly to this email to respond to ${name}.
      </p>
    </td>
  </tr>
</table>
`

    // ── Send via Resend ───────────────────────────────────
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
        { status: 500 }
      )
    }

    console.log('[contact] Email sent via Resend.', { to: toEmail, subject, replyTo: email })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
