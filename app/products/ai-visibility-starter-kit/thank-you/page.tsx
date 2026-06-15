'use client'

/**
 * Thank You page — /products/ai-visibility-starter-kit/thank-you
 *
 * Flow:
 *  1. Stripe redirects here with ?session_id=cs_xxx after successful payment.
 *  2. On mount, POST /api/verify-purchase with { sessionId }.
 *  3. API verifies payment, sends purchase email, logs to Supabase, returns
 *     { success, downloadToken, customerEmail, customerName }.
 *  4. Render download button pointing at
 *     /api/download/starter-kit?token=xxx&sid=cs_xxx
 *
 * Idempotent: refreshing the page re-calls /api/verify-purchase, which uses
 * upsert with ignoreDuplicates, so no duplicate emails or DB rows.
 */

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/global/Container'

// ── Types ─────────────────────────────────────────────────────────────────────

type State =
  | { status: 'loading' }
  | { status: 'success'; downloadToken: string; sessionId: string; customerName: string }
  | { status: 'error'; message: string }

// ── Component ─────────────────────────────────────────────────────────────────

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const sessionId = searchParams.get('session_id')

    if (!sessionId || !sessionId.startsWith('cs_')) {
      setState({
        status: 'error',
        message:
          'No purchase session found. If you just completed a purchase, please check your email for the download link or contact hello@bethadenai.com.',
      })
      return
    }

    async function verifyPurchase() {
      try {
        const res = await fetch('/api/verify-purchase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })

        const data = await res.json()

        if (!res.ok || !data.success) {
          setState({
            status: 'error',
            message:
              data.error ??
              'We could not verify your purchase. Please check your email for the download link, or contact hello@bethadenai.com.',
          })
          return
        }

        setState({
          status: 'success',
          downloadToken: data.downloadToken,
          sessionId: sessionId!,
          customerName: data.customerName ?? '',
        })
      } catch {
        setState({
          status: 'error',
          message:
            'A network error occurred. Please check your email for the download link, or contact hello@bethadenai.com.',
        })
      }
    }

    verifyPurchase()
  }, [searchParams])

  // ── Loading ───────────────────────────────────────────────────────────────

  if (state.status === 'loading') {
    return (
      <section className="bg-navy min-h-screen flex items-center py-20">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-6">
              <svg
                className="animate-spin text-teal"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" stroke="#00B8AE" strokeWidth="2" strokeDasharray="32" strokeDashoffset="12" />
              </svg>
            </div>
            <h1 className="font-heading font-semibold text-2xl text-white mb-3">
              Verifying your purchase…
            </h1>
            <p className="text-sm text-silver/60">
              This takes just a moment. Please don&rsquo;t close this tab.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  // ── Error ─────────────────────────────────────────────────────────────────

  if (state.status === 'error') {
    return (
      <section className="bg-navy min-h-screen flex items-center py-20">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-red-900/30 border border-red-700/40 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 6v4M10 14h.01" stroke="#F87171" strokeWidth="1.6" strokeLinecap="round"/>
                <circle cx="10" cy="10" r="9" stroke="#F87171" strokeWidth="1.4"/>
              </svg>
            </div>
            <h1 className="font-heading font-semibold text-2xl text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-sm text-silver/70 leading-relaxed mb-8">
              {state.message}
            </p>
            <a
              href="mailto:hello@bethadenai.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
            >
              Email hello@bethadenai.com
            </a>
          </div>
        </Container>
      </section>
    )
  }

  // ── Success ───────────────────────────────────────────────────────────────

  const { downloadToken, sessionId: sid, customerName } = state
  const firstName = customerName.split(' ')[0] || null
  const downloadHref = `/api/download/starter-kit?token=${downloadToken}&sid=${encodeURIComponent(sid)}`

  return (
    <>
      {/* ── THANK YOU HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">

            {/* Checkmark */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
                <path d="M2 11L10 19L26 3" stroke="#00B8AE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
              Purchase Complete
            </p>
            <h1 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5 leading-tight">
              {firstName ? `Thank you, ${firstName}.` : 'Thank you.'}<br />
              <span className="text-teal">Your kit is ready.</span>
            </h1>
            <p className="text-base text-silver/70 leading-relaxed mb-10">
              Your AI Visibility Starter Kit™ is ready to download. A copy
              of this download link has also been sent to your email.
            </p>

            {/* Download button */}
            <a
              href={downloadHref}
              className="inline-flex items-center gap-3 px-10 py-5 bg-teal text-white font-heading font-semibold text-lg rounded-md hover:bg-[#009991] transition-colors"
              download
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 3v10M6 9l4 4 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15h14" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Download AI Visibility Starter Kit™
            </a>

            <p className="text-xs text-silver/40 mt-4">
              PDF · 38 pages · Instant download
            </p>
          </div>
        </Container>
      </section>

      {/* ── GETTING STARTED ────────────────────────────────────────────── */}
      <section className="bg-cloud py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-3">
                How to Get Started
              </h2>
              <p className="text-sm text-graphite/70">
                Three steps to get the most from your kit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Complete the Reality Check™',
                  desc: 'Open Section 1 and search your business in ChatGPT, Gemini, and Perplexity. Record exactly what AI says about you today — this is your baseline.',
                },
                {
                  step: '02',
                  title: 'Score yourself',
                  desc: 'Work through the AI Visibility Scorecard™ in Section 4. Your score tells you exactly where your gaps are before you spend time on anything else.',
                },
                {
                  step: '03',
                  title: 'Build your 30-day plan',
                  desc: 'Use the action plan in Section 9 to prioritize. Focus on Critical items first — you don\'t need to do everything at once.',
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white rounded-xl p-6 border border-silver">
                  <div className="w-8 h-8 rounded-md bg-navy flex items-center justify-center mb-4">
                    <span className="font-heading font-semibold text-xs text-teal">{step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-2">{title}</h3>
                  <p className="text-xs text-graphite/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Re-download link */}
            <div className="mt-8 text-center">
              <p className="text-xs text-graphite/50">
                Need your download again?{' '}
                <a href={downloadHref} className="text-teal hover:underline" download>
                  Click here to re-download.
                </a>
                {' '}A link was also sent to your email.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PRODUCT IMAGE + FROM BETH ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Product image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-teal/5 rounded-2xl blur-2xl scale-110" aria-hidden="true" />
                <div className="relative rounded-2xl border border-silver overflow-hidden shadow-lg">
                  <Image
                    src="/images/ai-visibility-starter-kit.png"
                    alt="AI Visibility Starter Kit™"
                    width={360}
                    height={460}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* From Beth */}
            <div>
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                A note from Beth
              </p>
              <h2 className="font-heading font-semibold text-2xl text-navy mb-5 leading-snug">
                You made a smart decision.
              </h2>
              <div className="space-y-4 text-sm text-graphite leading-relaxed">
                <p>
                  Most business owners don&rsquo;t know what AI systems say about them
                  right now. They&rsquo;re being evaluated every day by tools that
                  decide whether to recommend them — without ever visiting their website.
                </p>
                <p>
                  The fact that you&rsquo;re doing this work puts you ahead of the
                  businesses that are going to figure this out too late.
                </p>
                <p>
                  Work through the Reality Check first. What you find will tell
                  you exactly where to focus.
                </p>
                <p className="text-navy font-heading font-semibold">— Beth Aden</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── AUDIT UPSELL ──────────────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/20 border border-teal/30 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="9" stroke="#00B8AE" strokeWidth="1.4"/>
                    <path d="M7 11l3 3 5-5" stroke="#00B8AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Copy */}
                <div className="flex-1">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-gold mb-3">
                    Next Step
                  </p>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-white mb-4 leading-snug">
                    Want a professional AI visibility assessment?
                  </h2>
                  <p className="text-sm text-silver/70 leading-relaxed mb-6">
                    The AI Visibility OS™ Audit goes beyond self-assessment. Beth reviews
                    your actual business and digital presence, tests what AI systems say
                    about you across multiple platforms, identifies specific gaps in your
                    visibility profile, and delivers a prioritized action report — specific
                    to your business, not a template.
                  </p>
                  <Link
                    href="/services/ai-visibility-audit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
                  >
                    Learn About the AI Visibility Audit
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FOOTER NOTE ───────────────────────────────────────────────── */}
      <section className="bg-navy py-8 border-t border-white/5">
        <Container>
          <p className="text-center text-xs text-silver/30">
            Questions?{' '}
            <a href="mailto:hello@bethadenai.com" className="text-teal/60 hover:text-teal transition-colors">
              hello@bethadenai.com
            </a>
            {' · '}
            <Link href="/" className="text-silver/40 hover:text-silver/70 transition-colors">
              bethadenai.com
            </Link>
          </p>
        </Container>
      </section>
    </>
  )
}
