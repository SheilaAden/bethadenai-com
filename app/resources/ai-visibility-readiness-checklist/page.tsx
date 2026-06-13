import type { Metadata } from 'next'
import { LeadMagnetForm } from '@/components/global/LeadMagnetForm'

// ── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Visibility Readiness Checklist™ | Beth Aden AI',
  description:
    'Find out if AI search engines can find and recommend your business. Download the free AI Visibility Readiness Checklist™ — 25 items, 7 categories, no technical background required.',
  alternates: {
    canonical: 'https://bethadenai.com/resources/ai-visibility-readiness-checklist',
  },
  openGraph: {
    title: 'AI Visibility Readiness Checklist™ | Beth Aden AI',
    description:
      'Find out if AI search engines can find and recommend your business. Download the free checklist.',
    url: 'https://bethadenai.com/resources/ai-visibility-readiness-checklist',
    type: 'website',
  },
}

// ── Schema ─────────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
      founder: { '@id': 'https://bethadenai.com/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      url: 'https://bethadenai.com/about',
      worksFor: { '@id': 'https://bethadenai.com/#organization' },
      knowsAbout: [
        'AI Visibility',
        'Generative Engine Optimization',
        'Answer Engine Optimization',
        'AI Search',
        'Business AI Strategy',
        'AI Visibility OS™',
        'Beth Aden AI Visibility Framework™',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://bethadenai.com/resources/ai-visibility-readiness-checklist#webpage',
      url: 'https://bethadenai.com/resources/ai-visibility-readiness-checklist',
      name: 'AI Visibility Readiness Checklist™',
      description:
        'A free checklist to assess whether your business is visible, understandable, and recommendable across AI search and answer engines.',
      isPartOf: { '@id': 'https://bethadenai.com/#website' },
      author: { '@id': 'https://bethadenai.com/#person' },
      about: {
        '@type': 'Thing',
        name: 'AI Visibility',
        description:
          'The degree to which a business can be found, understood, and recommended by AI-powered search engines and answer systems.',
      },
    },
    {
      '@type': 'DigitalDocument',
      name: 'AI Visibility Readiness Checklist™',
      description:
        'A 25-item checklist across 7 categories that helps small business owners assess their readiness for AI search, answer engines, and automated decision systems.',
      author: { '@id': 'https://bethadenai.com/#person' },
      publisher: { '@id': 'https://bethadenai.com/#organization' },
      inLanguage: 'en-US',
      keywords: [
        'AI visibility checklist',
        'GEO readiness',
        'AEO checklist',
        'AI search optimization',
        'small business AI',
      ],
    },
  ],
}

// ── Checklist preview data ─────────────────────────────────────────────────

const checklistSections = [
  {
    number: '01',
    title: 'Business Identity & Clarity',
    items: [
      'Your business name, location, and primary service are stated clearly on your homepage',
      'You have a defined service area or target audience',
      'Your business category is unambiguous',
    ],
  },
  {
    number: '02',
    title: 'AI Discoverability Signals',
    items: [
      'Your website includes structured data (Schema.org markup)',
      'Your Google Business Profile is complete and verified',
      'Your NAP (Name, Address, Phone) is consistent across the web',
    ],
  },
  {
    number: '03',
    title: 'Content Structure & Authority',
    items: [
      'You have clear, direct answers to questions your customers ask',
      'Your content uses plain language — not jargon or buzzwords',
      'You have at least one authoritative long-form resource on your site',
    ],
  },
  {
    number: '04',
    title: 'Answer Engine Readiness',
    items: [
      'Your site answers "What do you do?" in one clear sentence',
      'You address common objections and comparisons directly',
      'Your service pages include specific outcomes and processes',
    ],
  },
]

// ── Page ───────────────────────────────────────────────────────────────────

export default function AIVisibilityChecklistPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-navy pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl">

              {/* Eyebrow */}
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-5">
                Free Resource
              </p>

              <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                AI Visibility Readiness Checklist™
              </h1>

              <p className="mt-5 text-base md:text-lg text-silver/80 leading-relaxed max-w-xl">
                Find out if AI search engines can find, understand, and recommend your business —
                before your competitors do.
              </p>

              <p className="mt-3 text-sm text-silver/60">
                25 items across 7 categories. No technical background required.
              </p>

            </div>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <section className="bg-cloud py-16 md:py-20">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── Left: Context + preview ──────────────────────────────── */}
              <div className="space-y-10">

                {/* What this is */}
                <div>
                  <h2 className="font-heading font-semibold text-xl text-navy mb-4">
                    What this checklist covers
                  </h2>
                  <p className="text-sm text-graphite/80 leading-relaxed">
                    AI search tools — ChatGPT, Perplexity, Google Gemini, Claude — are now
                    answering questions your customers used to Google. If your business isn't
                    structured to be understood by these systems, you won't show up in those
                    answers.
                  </p>
                  <p className="mt-4 text-sm text-graphite/80 leading-relaxed">
                    This checklist gives you a clear picture of where you stand across the seven
                    areas that determine AI visibility. You'll know exactly what's working, what
                    needs attention, and what to fix first.
                  </p>
                </div>

                {/* Checklist preview */}
                <div className="space-y-6">
                  <h2 className="font-heading font-semibold text-xl text-navy">
                    What's inside
                  </h2>

                  {checklistSections.map((section) => (
                    <div key={section.number} className="rounded-lg border border-silver bg-white p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center text-xs font-heading font-semibold text-teal">
                          {section.number}
                        </span>
                        <h3 className="font-heading font-semibold text-sm text-navy">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-graphite/80">
                            <span
                              className="flex-shrink-0 mt-0.5 w-4 h-4 rounded border border-gold/40 bg-white"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                        <li className="text-xs text-graphite/40 italic pl-6">
                          + more items inside…
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Who this is for */}
                <div>
                  <h2 className="font-heading font-semibold text-xl text-navy mb-4">
                    Who this is for
                  </h2>
                  <p className="text-sm text-graphite/80 leading-relaxed">
                    Small business owners and service providers who want to understand how AI
                    search sees their business — and what to do about it. No prior knowledge of
                    AI, SEO, or technical optimization required.
                  </p>
                </div>

                {/* Authority */}
                <div className="border-l-4 border-gold pl-4">
                  <p className="text-sm text-graphite/80 leading-relaxed">
                    The AI Visibility Readiness Checklist™ is built on the{' '}
                    <strong className="text-navy font-semibold">Beth Aden AI Visibility Framework™</strong>{' '}
                    — a structured methodology developed by Beth Aden through direct implementation
                    experience with real business clients.
                  </p>
                </div>

              </div>

              {/* ── Right: Form card ─────────────────────────────────────── */}
              <div className="lg:sticky lg:top-8">
                <div className="rounded-xl border border-silver bg-white shadow-sm p-8">

                  <div className="mb-6">
                    <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                      Free Download
                    </p>
                    <h2 className="font-heading font-semibold text-xl text-navy leading-snug">
                      Get the AI Visibility Readiness Checklist™
                    </h2>
                    <p className="mt-2 text-sm text-graphite/70">
                      Enter your name and email to download the checklist instantly.
                    </p>
                  </div>

                  <LeadMagnetForm
                    leadMagnetSlug="ai-visibility-readiness-checklist"
                    leadMagnetName="AI Visibility Readiness Checklist™"
                    buttonLabel="Download Free Checklist"
                  />

                </div>

                {/* Trust signals below form */}
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-graphite/60">
                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Instant download — no waiting
                  </div>
                  <div className="flex items-center gap-2 text-xs text-graphite/60">
                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    No spam. No sales sequences. Just the checklist.
                  </div>
                  <div className="flex items-center gap-2 text-xs text-graphite/60">
                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Created by Beth Aden, AI Visibility Strategist
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── What to do with your score ────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-heading font-semibold text-2xl text-navy">
                What happens after you complete the checklist?
              </h2>
              <p className="text-sm text-graphite/70 leading-relaxed">
                The checklist includes a scoring guide that tells you exactly where you stand and
                which areas to prioritize. If you'd like a professional assessment with specific
                recommendations for your business, a{' '}
                <a href="/services/ai-visibility-audit" className="text-teal hover:underline font-medium">
                  full AI Visibility Audit
                </a>{' '}
                takes you from self-assessment to a complete action plan.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
