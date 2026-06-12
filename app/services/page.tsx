import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/global/Hero'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import type { FAQItem } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Consulting Services for Small Business',
  description:
    'Beth Aden AI offers AI Visibility Audits, AI Strategy, and AI Implementation for small businesses. Find out where you stand in AI search — and what to do about it.',
  alternates: {
    canonical: 'https://bethadenai.com/services',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   ───────────────────────────────────────────── */

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bethadenai.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://bethadenai.com/services',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-visibility-audit#service',
      name: 'AI Visibility Audit',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'A comprehensive assessment of how AI-powered platforms currently find, understand, and represent your business — with a gap analysis and prioritized recommendations.',
      serviceType: 'AI Visibility Audit',
      areaServed: 'US',
      url: 'https://bethadenai.com/services/ai-visibility-audit',
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-strategy#service',
      name: 'AI Strategy',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'A prioritized AI strategy roadmap built from your audit findings — specific to your business, your goals, and your available resources.',
      serviceType: 'AI Strategy Consulting',
      areaServed: 'US',
      url: 'https://bethadenai.com/services/ai-strategy',
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-implementation#service',
      name: 'AI Implementation',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'Guided implementation of your AI visibility improvements — structured data, content, entity presence, and cross-platform consistency.',
      serviceType: 'AI Implementation',
      areaServed: 'US',
      url: 'https://bethadenai.com/services/ai-implementation',
    },
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE DATA
   ───────────────────────────────────────────── */

const phases = [
  {
    label: 'Phase One',
    heading: 'See Clearly — AI Visibility Audit',
    body: [
      "Before you can improve your AI visibility, you need an honest picture of where you stand. Most business owners assume their digital presence is working harder than it is. The audit replaces assumptions with documented facts: here is how AI systems currently see your business, here is what they're missing, and here is what's preventing them from recommending you.",
      "You can't build a reliable strategy without this information. The audit is where every engagement at Beth Aden AI begins.",
    ],
  },
  {
    label: 'Phase Two',
    heading: 'Plan Deliberately — AI Strategy',
    body: [
      "Knowing what's wrong is half the work. Knowing what to do about it — in what order, with what resources, toward what outcome — is the other half. AI Strategy takes your audit findings and turns them into a prioritized roadmap built around your specific business.",
      "This isn't a generic AI strategy framework. It's a plan that reflects your actual gaps, your actual goals, and what a business your size can realistically execute.",
    ],
  },
  {
    label: 'Phase Three',
    heading: 'Build with Purpose — AI Implementation',
    body: [
      "A strategy document that doesn't get executed is just overhead. AI Implementation is where the plan becomes action — changes to your structured data, your content, your entity presence, and the other signals that determine whether AI systems recommend your business.",
      "Implementation at Beth Aden AI is guided, not handed off. You'll understand what's being changed and why, and you'll be equipped to maintain it.",
    ],
  },
]

const comparisonCards = [
  {
    badge: 'Start Here',
    title: 'AI Visibility Audit',
    bestFor:
      'Business owners who want to know exactly where they stand in AI search before deciding what to do next.',
    delivers:
      'A written assessment of your current AI visibility across major platforms, a gap analysis, and a prioritized list of recommendations.',
    timeline: 'One to two weeks.',
    startingPointFor:
      'Virtually every business engaging with Beth Aden AI for the first time.',
    href: '/services/ai-visibility-audit',
  },
  {
    badge: null,
    title: 'AI Strategy',
    bestFor:
      'Business owners who have audit findings — or a clear picture of their AI visibility gaps — and need a practical plan for what to do next.',
    delivers:
      'A prioritized AI strategy roadmap tailored to your business, your services, and your available resources.',
    timeline: 'Discussed at engagement start based on scope.',
    startingPointFor: 'Businesses ready to move from diagnosis to deliberate action.',
    href: '/services/ai-strategy',
  },
  {
    badge: null,
    title: 'AI Implementation',
    bestFor:
      'Business owners with a strategy in hand who are ready to make the specific changes that improve AI visibility.',
    delivers:
      'Guided implementation of your AI visibility improvements — structured data, content, entity presence, cross-platform consistency — with explanation throughout.',
    timeline: 'Discussed at engagement start based on scope.',
    startingPointFor: 'Businesses with a clear plan and the readiness to execute it.',
    href: '/services/ai-implementation',
  },
]

const auditIncluded = [
  {
    title: 'Entity Presence and Clarity',
    body: 'An assessment of how clearly AI systems understand who your business is, what it does, and who it serves — across every place your business appears online.',
  },
  {
    title: 'Structured Data and Schema Markup',
    body: "A review of whether your website uses schema markup, whether it's implemented correctly, and whether it communicates the signals AI answer engines use to evaluate credibility.",
  },
  {
    title: 'Website Content Structure',
    body: 'An evaluation of how well your content answers the questions your customers are asking — in the structure and language that AI systems can find, process, and cite.',
  },
  {
    title: 'Cross-Source Consistency',
    body: 'A review of how consistently your business is described across directories, social profiles, review platforms, and other sources AI systems cross-reference when evaluating whether to recommend you.',
  },
  {
    title: 'Authoritative Mentions',
    body: "An evaluation of the quality and breadth of external references to your business — and whether they're the kind of sources AI systems trust.",
  },
  {
    title: 'Direct AI Platform Testing',
    body: "Hands-on testing across ChatGPT, Perplexity, Google AI Overviews, and others — documenting exactly how each platform currently represents your business.",
  },
]

const auditDeliverables = [
  {
    title: 'Written AI Visibility Report',
    body: 'A clear, structured document covering your full findings — organized by the six assessment areas, written in plain language, with every finding explained in terms of what it means for your business.',
  },
  {
    title: 'Current Visibility Snapshot',
    body: "Documented examples of how AI systems describe your business today — what they surface, what they miss, and where you don't appear at all.",
  },
  {
    title: 'Gap Analysis',
    body: 'A breakdown of the specific gaps between where your business is and where it needs to be — organized by impact.',
  },
  {
    title: 'Prioritized Recommendations',
    body: 'A ranked action list with enough context to understand what each recommendation involves, why it matters, and what to address first.',
  },
  {
    title: '60-Minute Walkthrough Session',
    body: 'A session with Beth to review your report together, answer questions, and make sure you leave with a clear understanding of your findings and next steps.',
  },
]

const strategyIncluded = [
  {
    title: 'Gap-to-Action Mapping',
    body: "Every gap identified in the audit is mapped to a specific action — what needs to change, what it will change, and what happens if it doesn't get addressed.",
  },
  {
    title: 'Prioritized Roadmap',
    body: "A sequenced action plan organized by impact. High-leverage changes that enable other improvements come first. Actions that require a foundation that doesn't yet exist come later, in the right order.",
  },
  {
    title: 'Resource and Effort Guidance',
    body: "Each action in the roadmap includes a realistic assessment of what it will take to execute — so you can plan your time and resources around what's actually involved, not what you hope will be involved.",
  },
  {
    title: 'Platform-Specific Recommendations',
    body: "Guidance on the specific actions that matter most for the AI platforms your customers are most likely to use — not a generic strategy built around a hypothetical AI landscape.",
  },
  {
    title: 'Strategy Walkthrough Session',
    body: "A session with Beth to review the roadmap together, align on priorities, and confirm the plan fits your business's actual capacity and goals.",
  },
]

const implementationIncluded = [
  {
    title: 'Implementation Scoping',
    body: "Before any work begins, Beth reviews your strategy and documents exactly what the implementation will cover — what's in scope, what the sequence will be, and what outcomes to expect at each stage.",
  },
  {
    title: 'Structured Data and Schema Implementation',
    body: "Building or correcting the technical markup that tells AI systems what your business is, what it does, and who it serves — using JSON-LD, the current standard for AI-readable structured data.",
  },
  {
    title: 'Content Improvements',
    body: "Revisions to existing content and, where needed, new content — structured to answer the questions AI systems pull from when forming recommendations, with every piece connected to your entity definition.",
  },
  {
    title: 'Entity and Cross-Platform Consistency',
    body: "Corrections to how your business is described across directories, profiles, and external sources — eliminating the inconsistencies that undermine AI confidence in your credibility.",
  },
  {
    title: 'Authoritative Presence Building',
    body: "Guidance on building the kind of external mentions and citations that AI systems recognize as trust signals — and what to prioritize based on your current gaps.",
  },
  {
    title: 'Implementation Review and Handoff',
    body: "At the conclusion of the engagement, a documented review of what was built, how it works, and how to maintain it — so the improvements don't degrade after the engagement ends.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Do I need to complete all three services?',
    answer:
      "No. The services are designed to work together as a progression, but not every business needs all three. Some clients complete the audit and handle the recommendations independently. Others move from audit to strategy and stop there, implementing on their own. The full path — audit, strategy, implementation — makes sense for businesses that want end-to-end guidance. But the starting point is the audit, and everything after that is based on what your specific situation calls for.",
  },
  {
    question: 'Can I start with AI Strategy instead of the Audit?',
    answer:
      "In most cases, no — and it's worth explaining why. An AI Strategy built without audit findings is a strategy built on assumptions about where your gaps are. That leads to recommendations that may be directionally right but are rarely precisely right for your specific business. The audit is what makes the strategy specific and actionable rather than general. If you've had a recent, thorough AI visibility assessment from another source, that's worth discussing. But if you're starting from scratch, the audit is the right first step.",
  },
  {
    question: 'How long does the full process take if I do all three services?',
    answer:
      "It depends on the scope of what the audit finds and how quickly your business is ready to move through each phase. The audit itself takes one to two weeks. Strategy and implementation timelines are scoped at the start of each engagement based on the specific work involved. Most businesses that move through all three phases do so over several months — not because the work is slow, but because implementation done correctly takes the time it takes. Rushing it produces poor results.",
  },
  {
    question: "What if I've already worked with an SEO agency or consultant?",
    answer:
      "That's common and rarely creates a conflict. SEO and AI visibility address different systems with different requirements. Most SEO engagements don't touch the signals that matter most to AI search — entity recognition, structured data for AI systems, cross-source consistency, authoritative mentions in AI-trusted sources. An SEO foundation can be a useful starting point, but it doesn't substitute for an AI visibility assessment. The audit will tell you specifically what your SEO work has and hasn't addressed in the context of AI search.",
  },
  {
    question: 'Is there ongoing support after implementation?',
    answer:
      "This is discussed at the end of each engagement based on what the business needs. Some clients are fully equipped to maintain and build on their AI visibility independently after implementation. Others prefer ongoing guidance as the AI search landscape evolves and new optimization opportunities emerge. If ongoing support makes sense for your situation, that conversation happens at the close of the implementation engagement — not before.",
  },
]

/* ─────────────────────────────────────────────
   REUSABLE SUB-COMPONENTS (inline)
   ───────────────────────────────────────────── */

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base text-graphite leading-relaxed">
          <span className="flex-shrink-0 text-teal font-semibold mt-0.5" aria-hidden="true">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function IncludedGrid({
  items,
  cardBg = 'bg-silver',
}: {
  items: { title: string; body: string }[]
  cardBg?: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {items.map((item, i) => (
        <div key={i} className={`rounded-lg p-5 ${cardBg}`}>
          <h4 className="font-heading font-semibold text-sm text-navy mb-2">{item.title}</h4>
          <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

function ServiceSubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-3 mt-10">
      {children}
    </p>
  )
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="AI Consulting Services for Small Business"
        subheadline="Three services. One clear progression. From understanding where your business stands in AI search to building the visibility that earns recommendations."
        body="Not sure where to start? Most businesses start with the AI Visibility Audit — and the answer to 'where do I begin?' becomes clear from there."
        primaryCTA={{ text: 'Get Your AI Visibility Audit', href: '/services/ai-visibility-audit' }}
        secondaryCTA={{ text: '→ See all services ↓', href: '#services-overview' }}
        background="silver"
        size="medium"
        rightContent={
          <div className="w-full max-w-[340px] rounded-2xl bg-navy border border-teal/20 p-6 shadow-[0_8px_32px_rgba(0,184,174,0.10),0_4px_16px_rgba(11,31,51,0.15)]">
            <div className="pb-4 mb-5 border-b border-white/[0.08]">
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                The Path Forward
              </p>
              <p className="font-heading font-semibold text-sm text-white leading-snug">
                Invisible → Recommended
              </p>
            </div>
            <div className="space-y-4 mb-5">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-heading font-semibold text-teal/60 mt-0.5 w-5 flex-shrink-0">01</span>
                <div>
                  <p className="text-[11px] font-heading font-semibold text-white">AI can&apos;t find you</p>
                  <p className="text-[10px] text-silver/50">Audit → see exactly why</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-heading font-semibold text-teal/60 mt-0.5 w-5 flex-shrink-0">02</span>
                <div>
                  <p className="text-[11px] font-heading font-semibold text-white">You have gaps, no plan</p>
                  <p className="text-[10px] text-silver/50">Strategy → a roadmap you can execute</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-heading font-semibold text-teal/60 mt-0.5 w-5 flex-shrink-0">03</span>
                <div>
                  <p className="text-[11px] font-heading font-semibold text-white">You have a plan, nothing&apos;s changed</p>
                  <p className="text-[10px] text-silver/50">Implementation → AI recommends you</p>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.08]">
              <p className="text-[11px] text-silver/40 leading-relaxed">
                Most businesses start at step one.
              </p>
            </div>
          </div>
        }
      />

      {/* Breadcrumb */}
      <div className="bg-cloud border-b border-silver py-3">
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        </Container>
      </div>

      {/* ── SECTION 2: The Progression ── */}
      <Section background="white">
        <Container>
          <SectionLabel>How the Services Work Together</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            A Complete Path from Invisible to Recommended
          </h2>
          <p className="text-base md:text-lg text-graphite leading-relaxed max-w-2xl">
            AI visibility isn&#39;t a single problem with a single fix. It&#39;s a progression — and each
            service at Beth Aden AI addresses a distinct phase of that progression. Understanding how they
            connect is the clearest way to understand where you belong.
          </p>

          {/* Phase cards with teal connectors */}
          <div className="relative max-w-2xl mx-auto mt-12">
            {phases.map((phase, index) => (
              <div key={index}>
                <div className="rounded-lg border border-navy/[0.15] bg-navy p-6 md:p-8">
                  <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                    {phase.label}
                  </p>
                  <h3 className="font-heading font-semibold text-xl md:text-2xl text-white mb-4">
                    {phase.heading}
                  </h3>
                  {phase.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-base text-silver leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {index < phases.length - 1 && (
                  <div
                    className="flex justify-center py-5"
                    aria-hidden="true"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-8 bg-teal" />
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-teal"
                      >
                        <path d="M6 8L0 0H12L6 8Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-graphite/70 text-center max-w-2xl mx-auto mt-8 leading-relaxed">
            Not every business needs all three phases immediately. Some complete the audit and handle
            recommendations independently. Others move through the full sequence. The path is built around
            what your business actually needs — starting with an honest assessment of where you stand.
          </p>
        </Container>
      </Section>

      {/* ── SECTION 3: Service Comparison ── */}
      <Section background="silver" id="services-overview">
        <Container>
          <SectionLabel>At a Glance</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-10">
            Which Service Is Right for You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisonCards.map((card) => (
              <div
                key={card.title}
                className="bg-cloud rounded-lg p-6 flex flex-col border border-silver shadow-sm"
              >
                {/* Badge */}
                {card.badge ? (
                  <span className="inline-flex self-start items-center rounded-full bg-teal/10 text-teal text-xs font-heading font-semibold px-3 py-1 mb-4">
                    {card.badge}
                  </span>
                ) : (
                  <div className="mb-8" />
                )}

                <h3 className="font-heading font-semibold text-lg text-navy mb-5">
                  {card.title}
                </h3>

                <dl className="space-y-4 flex-1">
                  <div>
                    <dt className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/60 mb-1">
                      Best for
                    </dt>
                    <dd className="text-sm text-graphite leading-relaxed">{card.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/60 mb-1">
                      What it delivers
                    </dt>
                    <dd className="text-sm text-graphite leading-relaxed">{card.delivers}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/60 mb-1">
                      Timeline
                    </dt>
                    <dd className="text-sm text-graphite leading-relaxed">{card.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/60 mb-1">
                      Starting point for
                    </dt>
                    <dd className="text-sm text-graphite leading-relaxed">{card.startingPointFor}</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-silver">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
                  >
                    Full details: {card.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: AI Visibility Audit Detail ── */}
      <Section background="white" id="ai-visibility-audit">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>AI Visibility Audit</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
              AI Visibility Audit
            </h2>
            <p className="text-lg md:text-xl text-graphite leading-relaxed border-l-4 border-gold pl-6 py-1">
              The most important thing you can do for your AI visibility right now is find out where you
              actually stand.
            </p>

            <ServiceSubLabel>The Problem It Solves</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed mb-4">
              Most small businesses have never looked at their business through the lens of AI search.
              They&#39;ve optimized for Google. They&#39;ve built a website. They&#39;ve accumulated reviews. But when
              AI-powered tools like ChatGPT, Perplexity, and Google AI Overviews are asked about businesses
              in their category, most of those businesses either don&#39;t appear or appear inaccurately.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-4">
              The problem isn&#39;t that these businesses are doing something wrong. It&#39;s that they haven&#39;t
              done anything specific for AI visibility yet — and they don&#39;t know what &#34;anything specific&#34;
              even means in this context.
            </p>
            <p className="text-base text-graphite leading-relaxed">
              The AI Visibility Audit answers that. It documents exactly how AI systems currently see your
              business, identifies the gaps that are costing you recommendations, and tells you what to
              prioritize.
            </p>

            <ServiceSubLabel>Who This Is For</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              You&#39;re in the right place for an AI Visibility Audit if:
            </p>
            <CheckList
              items={[
                'You rely on customers finding and choosing your business — and you want to know whether AI-powered search is working for you or against you.',
                "You've invested in your website, your online profiles, or your SEO, and you're not sure whether any of that translates to visibility in AI search.",
                "You've heard about ChatGPT, Perplexity, or Google AI Overviews being used to find service providers, and you want an honest answer about whether your business shows up.",
                "You're a practical person. You'd rather have accurate information and a clear path forward than a general overview of AI trends.",
              ]}
            />

            <ServiceSubLabel>What&#39;s Included</ServiceSubLabel>
          </div>
          <IncludedGrid items={auditIncluded} cardBg="bg-silver" />

          <div className="max-w-3xl mt-2">
            <ServiceSubLabel>What You Receive</ServiceSubLabel>
            <IncludedGrid items={auditDeliverables} cardBg="bg-silver" />

            <ServiceSubLabel>Expected Outcomes</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              After your AI Visibility Audit, you&#39;ll know:
            </p>
            <CheckList
              items={[
                "Whether AI-powered platforms can find your business, and what they say about it when they do.",
                "Which specific gaps in your digital presence are preventing AI systems from recommending you confidently.",
                "What to address first — ranked by impact, not by complexity.",
                "Whether your existing marketing investments are translating to AI visibility, or whether there are structural issues that need to be addressed before anything else.",
              ]}
            />
            <p className="text-base text-graphite leading-relaxed mt-4">
              You&#39;ll have a documented foundation for every AI-related decision that follows — strategy,
              content, implementation, or otherwise.
            </p>

            <div className="mt-10">
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center gap-2 bg-teal text-white font-heading font-semibold text-sm px-6 py-3 rounded hover:bg-[#009991] transition-colors duration-200"
              >
                Get Your AI Visibility Audit
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: AI Strategy Detail ── */}
      <Section background="silver" id="ai-strategy">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>AI Strategy</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
              AI Strategy
            </h2>
            <p className="text-lg md:text-xl text-graphite leading-relaxed border-l-4 border-gold pl-6 py-1">
              Knowing what&#39;s wrong isn&#39;t the same as knowing what to do about it. AI Strategy bridges
              that gap.
            </p>

            <ServiceSubLabel>The Problem It Solves</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed mb-4">
              An audit tells you where your AI visibility gaps are. Strategy tells you how to close them —
              in what order, through what actions, with the resources a business your size actually has.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-4">
              Without a strategy, businesses with audit findings in hand face a familiar problem: a list of
              things to fix and no clear sense of where to start, what matters most, or how the pieces fit
              together. Some things look urgent but aren&#39;t. Some things look minor but are foundational.
              Getting the sequence wrong means spending time and money on improvements that don&#39;t move the
              needle because the underlying issues haven&#39;t been addressed.
            </p>
            <p className="text-base text-graphite leading-relaxed">
              AI Strategy at Beth Aden AI takes your audit findings — or your existing understanding of
              your gaps — and builds a roadmap that&#39;s specific, prioritized, and executable by a real
              business with real constraints.
            </p>

            <ServiceSubLabel>Who This Is For</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              You&#39;re in the right place for AI Strategy if:
            </p>
            <CheckList
              items={[
                "You've completed an AI Visibility Audit and have documented findings that need a coherent action plan.",
                "You have a clear picture of your AI visibility gaps — from the audit or from your own research — and you need a structured approach to addressing them.",
                "You've been making individual improvements to your digital presence without a guiding framework, and the results are inconsistent.",
                "You're ready to make deliberate, sequenced investments in your AI visibility and want a strategy that matches your actual capacity and timeline.",
              ]}
            />

            <ServiceSubLabel>What&#39;s Included</ServiceSubLabel>
          </div>
          <IncludedGrid items={strategyIncluded} cardBg="bg-cloud" />

          <div className="max-w-3xl mt-2">
            <ServiceSubLabel>Expected Outcomes</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              After your AI Strategy engagement, you&#39;ll have:
            </p>
            <CheckList
              items={[
                "A clear, documented roadmap for improving your AI visibility — organized by priority, with each action tied to a specific outcome.",
                "An understanding of why each recommendation matters and what sequence makes the most sense for your business.",
                "A realistic sense of what the work will involve, how long it will take, and what you can expect to see as improvements are made.",
                "A foundation that makes implementation faster, more focused, and more effective — whether that implementation happens with Beth Aden AI or independently.",
              ]}
            />

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal text-white font-heading font-semibold text-sm px-6 py-3 rounded hover:bg-[#009991] transition-colors duration-200"
              >
                Book a Discovery Call
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: AI Implementation Detail ── */}
      <Section background="white" id="ai-implementation">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>AI Implementation</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
              AI Implementation
            </h2>
            <p className="text-lg md:text-xl text-graphite leading-relaxed border-l-4 border-gold pl-6 py-1">
              Strategy is only useful if it gets executed. AI Implementation is where plans become
              changes — and changes become results.
            </p>

            <ServiceSubLabel>The Problem It Solves</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed mb-4">
              The gap between knowing what to do and actually doing it is where most AI visibility
              improvement efforts stall.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-4">
              Some business owners have a strategy but lack the confidence to implement technical changes
              without guidance. Others start implementation and make changes in the wrong order, investing
              effort in improvements that don&#39;t produce results because foundational issues were skipped.
              Others simply run out of time — implementation moves to the back of the priority list and
              stays there.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-4">
              AI Implementation at Beth Aden AI resolves all three problems. It&#39;s guided execution —
              Beth works through the implementation with you, in the right order, with enough explanation
              that you understand what&#39;s being built and why. Nothing is a black box. Nothing is handed
              back to you as a finished deliverable with no context for how to maintain it.
            </p>
            <p className="text-base text-graphite leading-relaxed">
              The goal isn&#39;t just to make the changes. It&#39;s to leave your business in a position to
              sustain and build on those changes after the engagement ends.
            </p>

            <ServiceSubLabel>Who This Is For</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              You&#39;re in the right place for AI Implementation if:
            </p>
            <CheckList
              items={[
                "You have a completed AI Strategy — either from a Beth Aden AI engagement or developed elsewhere — and you're ready to execute it.",
                "You understand what needs to change but want guided support to make sure the changes are made correctly, in the right order, and with the right technical approach.",
                "You've attempted to improve your AI visibility independently and found that the technical components — schema markup, structured data, entity definition — need expert guidance to get right.",
                "You want to come out of the engagement with both the improvements in place and the understanding of how to maintain them going forward.",
              ]}
            />

            <ServiceSubLabel>What&#39;s Included</ServiceSubLabel>
          </div>
          <IncludedGrid items={implementationIncluded} cardBg="bg-silver" />

          <div className="max-w-3xl mt-2">
            <ServiceSubLabel>Expected Outcomes</ServiceSubLabel>
            <p className="text-base text-graphite leading-relaxed">
              After your AI Implementation engagement, you&#39;ll have:
            </p>
            <CheckList
              items={[
                "A corrected, complete structured data foundation that AI systems can read and use to understand your business.",
                "Content that answers the questions your customers are asking — and that's structured in the way AI answer engines look for when forming recommendations.",
                "A more consistent digital presence across the platforms AI systems cross-reference when deciding whether to recommend you.",
                "A clear understanding of what was changed, why it was changed, and how to sustain it — so the work compounds over time rather than requiring constant maintenance.",
              ]}
            />

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal text-white font-heading font-semibold text-sm px-6 py-3 rounded hover:bg-[#009991] transition-colors duration-200"
              >
                Book a Discovery Call
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: Is Beth Aden AI the Right Fit? ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-6">
              Is Beth Aden AI the Right Fit?
            </h2>
            <p className="text-base text-silver leading-relaxed mb-4">
              The three services at Beth Aden AI serve different phases of the same journey — but they
              share a common client profile.
            </p>
            <p className="text-base text-silver leading-relaxed mb-4">
              This work is built for small business owners, service businesses, and independent operators
              who rely on customers finding and choosing them. It&#39;s practical in its delivery,
              plain-language in its communication, and built around the reality that most businesses
              don&#39;t have a dedicated technical team or unlimited capacity for complex projects.
            </p>
            <p className="text-base text-silver leading-relaxed mb-8">
              You don&#39;t need to understand AI to benefit from this work. You don&#39;t need a large budget,
              a sophisticated website, or prior experience with digital strategy. What you need is a real
              business, a real digital presence, and a genuine interest in understanding how AI search is
              affecting your ability to be found and recommended.
            </p>

            <div className="border border-white/20 rounded-lg p-6 bg-white/5">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-gold mb-3">
                What This Work Is Not
              </p>
              <p className="text-base text-silver leading-relaxed">
                Beth Aden AI is not a full-service marketing agency. It&#39;s not an SEO firm, a social media
                manager, or a general digital strategy practice. The focus is specific: AI visibility,
                AI strategy, and AI implementation. If your primary need is in a different area,
                I&#39;ll tell you that directly rather than reframe your problem to fit the services here.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: FAQ ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Questions About the Services
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9: Final CTA ── */}
      <section className="bg-silver py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight">
              The Right Place to Start Is the Same for Almost Every Business
            </h2>
            <p className="mt-5 text-base md:text-lg text-graphite leading-relaxed">
              If you&#39;re unsure whether your business is showing up in AI search — and most business
              owners are — the AI Visibility Audit gives you a clear, documented answer. Not a general
              overview of AI trends. Not a checklist of best practices. A specific picture of how AI
              systems currently see your business and exactly what to do about it.
            </p>
            <p className="mt-4 text-base md:text-lg text-graphite leading-relaxed">
              That information changes how you approach every digital decision that follows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                Get Your AI Visibility Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold text-sm text-graphite hover:text-navy underline underline-offset-4 transition-colors"
              >
                Not sure which service fits? → Book a discovery call
              </Link>
            </div>
            <p className="mt-4 text-sm text-graphite/70">
              Beth reviews every inquiry personally and responds within 1–2 business days.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
