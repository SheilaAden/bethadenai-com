/**
 * Hero V2 Preview — /hero-v2
 *
 * Temporary comparison page. Shows the proposed Hero V2 changes.
 * The homepage (/) is completely unchanged.
 *
 * To compare:
 *   Current:  https://bethadenai.com/
 *   V2:       https://bethadenai.com/hero-v2
 *
 * DELETE this file after the comparison decision is made.
 *
 * Changes from current hero:
 *   1. Mobile headline reduced from text-4xl → text-3xl (≈17% smaller on mobile)
 *   2. Body copy replaced with two sharper supporting sentences
 *   3. Founder card: left teal accent bar + FOUNDER badge above name
 *   4. Right audit card: shadow reduced, max-w reduced slightly, padding increased
 */

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/global/Container'

export default function HeroV2Preview() {
  return (
    <>
      {/* ── Preview Banner ── */}
      <div className="bg-gold/10 border-b-2 border-gold/50 py-2.5 text-center sticky top-0 z-50">
        <p className="text-xs font-heading font-semibold text-navy tracking-wide">
          ⚡ HERO V2 PREVIEW — Compare with{' '}
          <Link href="/" className="underline text-teal hover:text-navy transition-colors">
            current homepage
          </Link>
          {' '}· Delete this page after decision
        </p>
      </div>

      {/* ── Hero V2 ── */}
      <section className="relative bg-cloud overflow-hidden py-20 md:py-28">

        {/* Subtle background grid — unchanged from current */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="hero-grid-v2" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0 L0 0 0 48" fill="none" stroke="rgba(11,31,51,0.05)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-v2)"/>
          </svg>
        </div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left column ── */}
            <div>

              {/*
               * CHANGE 1: Mobile headline reduced.
               * Current:  text-4xl md:text-5xl  (2.25rem mobile → 3rem desktop)
               * V2:       text-3xl md:text-5xl  (1.875rem mobile → 3rem desktop) ≈ 17% smaller on mobile
               * Desktop (md:) is identical.
               */}
              <h1 className="font-heading font-semibold text-3xl md:text-5xl text-navy leading-tight mb-5">
                Get Found. Get Understood. Get Recommended by AI.
              </h1>

              {/* Subheadline — unchanged */}
              <p className="text-xl md:text-2xl font-heading font-medium text-graphite leading-snug mb-5">
                When customers ask AI who to call, will your business come up?
              </p>

              {/*
               * CHANGE 2: Body copy replaced.
               * Current: "Beth Aden AI helps businesses become visible..."
               * V2: Two sharper sentences — platform-specific + urgency close.
               */}
              <p className="text-base md:text-lg text-graphite/70 leading-relaxed mb-1.5">
                When customers ask ChatGPT, Gemini, Perplexity, or Google AI who they should hire,
                your business needs to be part of the answer.
              </p>
              <p className="text-base text-graphite/55 leading-relaxed mb-6">
                Most businesses are invisible to AI. We help you find out why — and fix it.
              </p>

              {/*
               * CHANGE 3: Founder card enhanced.
               * Additions:
               *   - Left teal accent bar (absolute div on left edge)
               *   - FOUNDER badge above name
               * Unchanged: headshot, name, title, trust statement, card background
               */}
              <div className="relative flex items-center gap-3 mb-8 py-4 pr-4 rounded-xl bg-white/60 border border-navy/[0.08] shadow-sm overflow-hidden">
                {/* Left teal accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal rounded-l-xl" aria-hidden="true" />

                {/* Headshot — unchanged */}
                <div className="pl-4 flex-shrink-0">
                  <Image
                    src="/images/beth-aden-ai-headshot.png"
                    alt="Beth Aden, AI Visibility Strategist"
                    width={52}
                    height={52}
                    className="rounded-full object-cover object-top ring-2 ring-teal/20"
                  />
                </div>

                {/* Text block */}
                <div className="min-w-0">
                  {/* FOUNDER badge — new */}
                  <p className="text-[9px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-0.5">
                    Founder
                  </p>
                  {/* Name — unchanged */}
                  <p className="font-heading font-semibold text-sm text-navy leading-none mb-0.5">
                    Beth Aden
                  </p>
                  {/* Title — unchanged */}
                  <p className="text-[11px] text-teal font-heading font-semibold tracking-[0.04em] mb-1">
                    AI Visibility Strategist · AI Systems Architect
                  </p>
                  {/* Trust statement — unchanged */}
                  <p className="text-[11px] text-graphite/55 leading-snug">
                    Helping businesses become visible, understandable, and recommendable in the age of AI.
                  </p>
                </div>
              </div>

              {/* CTAs — unchanged */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/ai-visibility-audit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
                >
                  Get Your AI Visibility Audit
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold text-sm transition-colors border border-navy/30 text-navy hover:bg-navy/5"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-4">
                <Link
                  href="/resources/ai-visibility-readiness-checklist"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-navy/60 hover:text-teal transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Get the Free Checklist
                </Link>
              </div>

            </div>

            {/*
             * CHANGE 4: Right audit card — reduced visual dominance.
             * Current:  max-w-[340px], shadow-[0_8px_32px_rgba(0,184,174,0.12),0_4px_16px_rgba(11,31,51,0.15)], p-6
             * V2:       max-w-[300px], shadow-[0_4px_16px_rgba(0,184,174,0.07),0_2px_8px_rgba(11,31,51,0.08)], p-5
             * Effect: card steps back, left column (Beth + CTA) becomes primary focus.
             */}
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-[300px] rounded-2xl bg-navy border border-teal/20 p-5 shadow-[0_4px_16px_rgba(0,184,174,0.07),0_2px_8px_rgba(11,31,51,0.08)]">

                {/* Card header — unchanged */}
                <div className="pb-4 mb-5 border-b border-white/[0.08]">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                    What AI Finds
                  </p>
                  <p className="font-heading font-semibold text-sm text-white leading-snug">
                    Your Business Through AI&apos;s Eyes
                  </p>
                </div>

                {/* Metric rows — unchanged */}
                <div className="space-y-4 mb-5">
                  {(
                    [
                      { label: "Competitors show up — you don't", pct: 18 },
                      { label: 'Business info incomplete or wrong',  pct: 32 },
                      { label: 'Recommendation signals present',     pct: 22 },
                      { label: 'Likelihood of being suggested',      pct: 15 },
                    ] as { label: string; pct: number }[]
                  ).map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="text-[11px] text-silver/70">{label}</span>
                        <span className="text-[10px] font-heading font-semibold text-silver/40">
                          {pct}%
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full bg-white/[0.08]">
                        <div
                          className="h-full rounded-full bg-teal/60"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Priority Gaps row — unchanged */}
                <div className="flex items-center justify-between py-3 border-t border-white/[0.08] mb-4">
                  <span className="text-[11px] text-silver/70">Issues Found</span>
                  <span className="text-[10px] font-heading font-semibold text-gold bg-gold/[0.12] px-2 py-0.5 rounded">
                    5 identified
                  </span>
                </div>

                {/* Footer note — unchanged */}
                <p className="text-[11px] text-silver/40 leading-relaxed">
                  Most businesses don&apos;t know this gap exists.
                </p>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Change summary (visible on the page for quick reference) ── */}
      <section className="bg-navy py-10">
        <Container>
          <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
            Hero V2 — Change Summary
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                n: '1',
                label: 'Mobile Headline',
                before: 'text-4xl (2.25rem)',
                after: 'text-3xl (1.875rem) — 17% smaller on mobile. Desktop unchanged.',
              },
              {
                n: '2',
                label: 'Supporting Copy',
                before: 'Generic brand statement',
                after: 'Platform-specific urgency + "Most businesses are invisible to AI. We help you fix it."',
              },
              {
                n: '3',
                label: 'Founder Card',
                before: 'Plain card, no label hierarchy',
                after: 'Teal left accent bar + FOUNDER badge above name',
              },
              {
                n: '4',
                label: 'Audit Mockup Card',
                before: 'max-w-[340px], heavy shadow',
                after: 'max-w-[300px], lighter shadow — left column becomes primary focus',
              },
            ].map((item) => (
              <div key={item.n} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4">
                <p className="text-[9px] font-heading font-semibold uppercase tracking-[0.14em] text-teal/60 mb-1">
                  Change {item.n}
                </p>
                <p className="font-heading font-semibold text-xs text-white mb-2">{item.label}</p>
                <p className="text-[10px] text-silver/40 mb-1"><span className="text-silver/30">Before:</span> {item.before}</p>
                <p className="text-[10px] text-silver/70"><span className="text-teal/70">After:</span> {item.after}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-silver/30 mt-6">
            Delete <code className="text-teal/50">app/hero-v2/page.tsx</code> after the comparison decision is made.
          </p>
        </Container>
      </section>
    </>
  )
}
