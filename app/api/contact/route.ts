import { NextRequest, NextResponse } from 'next/server'

/* ─────────────────────────────────────────────
   Contact Form Route Handler
   POST /api/contact

   Required environment variables:
     CONTACT_TO_EMAIL   — the inbox that receives form submissions

   Optional (add when you choose an email service):
     RESEND_API_KEY     — if using Resend (https://resend.com)
     SENDGRID_API_KEY   — if using SendGrid (https://sendgrid.com)
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

    const subject = `New inquiry: ${reason} — ${name} (${business})`
    const textBody = [
      `Name:     ${name}`,
      `Business: ${business}`,
      `Email:    ${email}`,
      `Reason:   ${reason}`,
      '',
      'Message:',
      message?.trim() || '(no message provided)',
    ].join('\n')

    // ── Email sending ─────────────────────────────────────
    // Connect your email service here, then remove the console.log below.
    //
    // ── OPTION A: Resend (https://resend.com) ─────────────
    // 1. npm install resend
    // 2. Add RESEND_API_KEY to Vercel environment variables
    // 3. Replace the From address with your verified sender
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Beth Aden AI <noreply@bethadenai.com>',
    //   to: toEmail,
    //   replyTo: email,
    //   subject,
    //   text: textBody,
    // })
    //
    // ── OPTION B: SendGrid (https://sendgrid.com) ─────────
    // 1. npm install @sendgrid/mail
    // 2. Add SENDGRID_API_KEY to Vercel environment variables
    // 3. Replace the From address with your verified sender
    //
    // import sgMail from '@sendgrid/mail'
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    // await sgMail.send({
    //   from: 'noreply@bethadenai.com',
    //   to: toEmail,
    //   replyTo: email,
    //   subject,
    //   text: textBody,
    // })
    //
    // ─────────────────────────────────────────────────────

    // Temporary: log submission until email service is wired
    console.log('[contact] Submission received — email service not yet configured.')
    console.log('[contact]', { to: toEmail, subject, replyTo: email })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
