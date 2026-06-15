import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { products } from '@/lib/products'
import type { FAQItem } from '@/types'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Visibility Starter Kit™ — $27',
  description:
    'A practical 38-page self-assessment and action guide that helps small business owners understand their AI visibility gaps and exactly what to do about them.',
  alternates: { canonical: '/products/ai-visibility-starter-kit' },
  openGraph: {
    title: 'AI Visibility Starter Kit™ — $27',
    description:
      'Get Found. Get Understood. Get Recommended by AI. A practical $27 guide for small business owners who want to improve their AI visibility.',
    url: 'https://bethadenai.com/products/ai-visibility-starter-kit',
  },
}

// ── Product data ──────────────────────────────────────────────────────────────

const product = products['ai-visibility-starter-kit']

// ── What's included ───────────────────────────────────────────────────────────

const INCLUDED = [
  {
    number: '01',
    name: 'AI Visibility Reality Check™',
    desc: 'Search your business in ChatGPT, Gemini, and Perplexity today. Record exactly what AI systems say — and don\'t say — about your business right now.',
  },
  {
    number: '02',
    name: 'Quick-Start Guide',
    desc: 'Plain-language explanation of what AI visibility is, why traditional SEO isn\'t enough, and how AI systems actually evaluate businesses.',
  },
  {
    number: '03',
    name: '10 Quick AI Visibility Wins™',
    desc: 'Ten high-impact actions you can complete this week — no developer, no budget, no technical background required.',
  },
  {
    number: '04',
    name: 'AI Visibility Scorecard™',
    desc: '30 questions across 6 visibility categories. Score yourself from 0–150 and see exactly where you stand.',
  },
  {
    number: '05',
    name: 'Business Entity Optimization Worksheet™',
    desc: 'Define the core signals AI systems use to identify and understand your business — and make sure those signals are consistent everywhere.',
  },
  {
    number: '06',
    name: 'Authority Signal Checklist™',
    desc: '32 credibility and trust signals. Check what you have. The unchecked boxes become your priority action list.',
  },
  {
    number: '07',
    name: 'AI Search Readiness Worksheet™',
    desc: 'Think like an AI system evaluating your business. Identify your content gaps, competitive vulnerabilities, and missing trust signals.',
  },
  {
    number: '08',
    name: 'Competitor Visibility Snapshot™',
    desc: 'Compare your AI visibility profile against 3 competitors. See exactly what they have that you don\'t.',
  },
  {
    number: '09',
    name: '30-Day AI Visibility Action Plan™',
    desc: '24 prioritized actions across 4 weeks. Critical, High, and Medium priority so you always know what to do first.',
  },
  {
    number: '10',
    name: 'AI Visibility Glossary™',
    desc: '14 plain-language definitions for every term you\'ll encounter — AEO, GEO, entity, schema, authority signal, and more.',
  },
  {
    number: '11',
    name: 'AI Visibility Gap Summary™',
    desc: 'Consolidate your findings. Commit to your biggest gap, your first action, and your next step before you close the kit.',
  },
]

// ── Who it's for ──────────────────────────────────────────────────────────────

const WHO = [
  { label: 'Local businesses', desc: 'Getting passed over by AI tools that recommend competitors in your area.' },
  { label: 'Service businesses', desc: 'Accountants, consultants, agencies, designers, coaches, therapists, attorneys.' },
  { label: 'Entrepreneurs', desc: 'Building a business and want to get AI visibility right from the start.' },
  { label: 'Established businesses', desc: 'Already have a website but suspect they\'re invisible to AI search.' },
  { label: 'Marketing-aware owners', desc: 'Understand SEO but know AI visibility is a different problem.' },
  { label: 'Non-technical operators', desc: 'Want practical, actionable guidance without technical jargon.' },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS: FAQItem[] = [
  {
    question: 'Is this technical? Do I need a developer?',
    answer: 'No. This kit is written for business owners, not developers. Every worksheet, checklist, and action item is designed to be completed without any technical background. The most technical thing in the kit is checking whether your website has HTTPS — and it almost certainly does.',
  },
  {
    question: 'How long does it take to complete?',
    answer: 'Most business owners complete the full kit in 2–4 hours. The Reality Check and Quick-Start Guide take about 30 minutes. The worksheets and scorecard take 1–2 hours depending on how thoroughly you work through them. The 30-Day Action Plan is designed to be executed over a month, not in a single sitting.',
  },
  {
    question: 'Is this a course or video training?',
    answer: 'No. This is a PDF self-assessment and action guide — 38 pages of worksheets, checklists, scorecards, and structured exercises. No videos, no login, no course platform. You download it and work through it on your own schedule.',
  },
  {
    question: 'Do I need any SEO knowledge?',
    answer: 'No. The kit explains AI visibility from the ground up. If you\'ve done some SEO work, you\'ll recognize some of the concepts — but AI visibility is a different problem, and the kit treats it as one.',
  },
  {
    question: 'Will this guarantee I show up in AI results?',
    answer: 'No product can guarantee specific AI recommendations — AI systems make their own decisions. What this kit does is give you a clear picture of where your visibility gaps are and a practical plan to close them. Business owners who complete the kit and implement the action plan consistently see meaningful improvement in how AI tools understand and describe their businesses.',
  },
  {
    question: 'I already have good Google rankings. Is this relevant?',
    answer: 'Very likely yes. Google rankings and AI visibility are related but not the same. A business can rank well for keywords and still be nearly invisible to ChatGPT, Gemini, and Perplexity. The kit covers both traditional and AI-specific visibility signals.',
  },
  {
    question: 'Is this a physical product? Will it be shipped?',
    answer: 'This is a digital product delivered as a PDF download. Nothing is shipped. You\'ll receive an email with your download link immediately after purchase.',
  },
  {
    question: 'What happens right after I purchase?',
    answer: 'You\'ll be taken to a thank-you page with your download button immediately. You\'ll also receive a confirmation email from Beth with another download link and instructions on how to get started.',
  },
  {
    question: 'What if I have questions after I go through it?',
    answer: 'Reply to the purchase confirmation email. If you work through the kit and want a professional assessment of your specific situation, the next step is the AI Visibility OS™ Audit.',
  },
  {
    question: 'What is the difference between this kit and the AI Visibility OS™ Audit?',
    answer: 'The Starter Kit is a self-assessment you complete yourself. It gives you the framework, tools, and action plan. The AI Visibility OS™ Audit is a professional assessment where Beth reviews your actual business and digital presence, identifies exactly what AI systems can and cannot find, and delivers a prioritized action report specific to your situation.',
  },
]

// ── Schema ────────────────────────────────────────────────────────────────────

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'AI Visibility Starter Kit™',
  description:
    'A 38-page self-assessment and action guide for small business owners who want to understand their AI visibility gaps and improve how AI systems find, understand, and recommend their business.',
  brand: { '@type': 'Brand', name: 'Beth Aden AI' },
  offers: {
    '@type': 'Offer',
    price: '27.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Beth Aden AI' },
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StarterKitSalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Copy */}
            <div>
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                $27 Digital Product · Instant Download
              </p>
              <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-5">
                AI Visibility<br />
                <span className="text-teal">Starter Kit™</span>
              </h1>
              <p className="text-xl text-silver/80 leading-relaxed mb-6">
                Get Found. Get Understood. Get Recommended by AI.
              </p>
              <p className="text-base text-silver/70 leading-relaxed mb-8">
                A practical 38-page self-assessment and action guide for small business
                owners who want to understand their AI visibility gaps — and exactly
                what to do about them. No technical background required.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { stat: '38', label: 'pages' },
                  { stat: '11', label: 'tools & worksheets' },
                  { stat: '30', label: 'days of action steps' },
                  { stat: '$27', label: 'one-time' },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-heading font-semibold text-2xl text-teal leading-none">{stat}</p>
                    <p className="text-xs text-silver/60 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={product.stripePaymentLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
                >
                  Get Instant Access — $27
                </Link>
                <Link
                  href="#whats-included"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md font-heading font-semibold text-base transition-colors border border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                >
                  See What&#39;s Inside
                </Link>
              </div>

              <p className="text-xs text-silver/40 mt-4">
                Instant PDF download · Secure checkout via Stripe · No subscription
              </p>
            </div>

            {/* Product image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-teal/10 rounded-2xl blur-3xl scale-110" aria-hidden="true" />
                <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-graphite">
                  <Image
                    src="/images/ai-visibility-starter-kit.png"
                    alt="AI Visibility Starter Kit™ — 38-page digital guide"
                    width={480}
                    height={620}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── WHAT AI VISIBILITY MEANS ─────────────────────────────────────── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
              Why This Matters
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6 leading-tight">
              Your customers are asking AI who to hire.
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-6">
              Tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity are now
              answering the questions your customers used to type into Google. When someone
              asks &ldquo;who&rsquo;s a good HR consultant for small businesses in Denver&rdquo;
              or &ldquo;what&rsquo;s a reliable bookkeeper for construction companies,&rdquo;
              AI systems generate a direct answer — and they name specific businesses.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-10">
              If AI cannot clearly identify, understand, and trust your business, it will not
              recommend your business. It will recommend a competitor who made their business
              understandable to AI. This kit shows you where those gaps are and what to do about them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" stroke="#00B8AE" strokeWidth="1.5"/>
                      <path d="M6 10l3 3 5-5" stroke="#00B8AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Get Found',
                  desc: 'AI systems can clearly identify your business as a real, specific entity.',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#00B8AE" strokeWidth="1.5"/>
                      <path d="M6 8h8M6 12h5" stroke="#00B8AE" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'Get Understood',
                  desc: 'AI systems accurately describe what you do, who you serve, and why you\'re trustworthy.',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.3L10 14.5l-4.9 2.5.9-5.3L2 7.8l5.5-.8z" stroke="#00B8AE" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Get Recommended',
                  desc: 'AI systems name you when someone asks for a business like yours.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-silver">
                  <div className="mb-3">{icon}</div>
                  <h3 className="font-heading font-semibold text-navy text-base mb-2">{title}</h3>
                  <p className="text-sm text-graphite leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <Section background="white" id="whats-included">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
              What&#39;s Inside
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4 leading-tight">
              11 Tools. 38 Pages. One Clear Plan.
            </h2>
            <p className="text-base text-graphite max-w-2xl mx-auto leading-relaxed">
              Every section is designed to produce a specific output: a score, a filled-in
              worksheet, a priority list, or a concrete decision about your next step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {INCLUDED.map(({ number, name, desc }) => (
              <div
                key={number}
                className="flex gap-4 p-5 bg-cloud rounded-xl border border-silver hover:border-teal/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <span className="font-heading font-semibold text-xs text-teal">{number}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">{name}</h3>
                  <p className="text-xs text-graphite/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={product.stripePaymentLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
            >
              Get All 11 Tools — $27
            </Link>
            <p className="text-xs text-graphite/50 mt-3">Instant PDF download · Secure checkout via Stripe</p>
          </div>
        </Container>
      </Section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <Section background="silver">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                Who This Is For
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6 leading-tight">
                Built for business owners who want practical answers.
              </h2>
              <p className="text-base text-graphite leading-relaxed mb-8">
                This kit is not for marketers, developers, or SEO specialists. It is for the
                business owner who wants to understand where they stand in AI search and what
                to do about it — without needing a technical background to get started.
              </p>
              <div className="space-y-4">
                {WHO.map(({ label, desc }) => (
                  <div key={label} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center mt-0.5">
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                        <path d="M1 3.5L3.2 5.5L8 1" stroke="#00B8AE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-navy text-sm">{label} — </span>
                      <span className="text-sm text-graphite">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for */}
            <div>
              <div className="bg-navy rounded-2xl p-8">
                <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-gold mb-6">
                  This Is Not For You If:
                </p>
                <div className="space-y-4">
                  {[
                    'You want a passive income shortcut that requires no work.',
                    'You\'re looking for a guaranteed ranking or overnight results.',
                    'You want to outsource your visibility without understanding it.',
                    'You\'re already working with an AI visibility specialist on a complete strategy.',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="text-silver/30 flex-shrink-0 mt-0.5 text-sm">✕</span>
                      <p className="text-sm text-silver/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                    This Is For You If:
                  </p>
                  {[
                    'You want to understand your AI visibility before making bigger investments.',
                    'You\'re willing to spend 2–4 hours and 30 days implementing what you learn.',
                    'You want a practical self-assessment, not a theoretical overview.',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 mb-3">
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
                        <path d="M2 7l4.5 5L14 2" stroke="#00B8AE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-sm text-silver/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
                Common Questions
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-4">
              Ready to Start
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-6 leading-tight">
              Start Improving Your AI Visibility Today
            </h2>
            <p className="text-base text-silver/70 leading-relaxed mb-10">
              38 pages. 11 tools. One practical action plan.
              No technical background required. No subscription.
              Instant PDF download.
            </p>
            <Link
              href={product.stripePaymentLink}
              className="inline-flex items-center justify-center px-10 py-4 bg-teal text-white font-heading font-semibold text-lg rounded-md hover:bg-[#009991] transition-colors"
            >
              Get Instant Access — $27
            </Link>
            <p className="text-xs text-silver/40 mt-4">
              Secure checkout via Stripe · Instant PDF download · No subscription
            </p>

            <div className="mt-14 pt-10 border-t border-white/10">
              <p className="text-sm text-silver/60 leading-relaxed">
                Questions? Email{' '}
                <a href="mailto:hello@bethadenai.com" className="text-teal hover:underline">
                  hello@bethadenai.com
                </a>
                . If you complete the kit and want a professional assessment, the next
                step is the{' '}
                <Link href="/services/ai-visibility-audit" className="text-teal hover:underline">
                  AI Visibility OS™ Audit
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
