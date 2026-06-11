import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/global/Hero'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { PullStatement } from '@/components/global/PullStatement'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import type { FAQItem } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Strategy Consulting for Small Business',
  description:
    "Build a clear, prioritized roadmap for your AI visibility. Beth Aden AI's AI Strategy service turns audit findings into a specific plan your business can act on.",
  alternates: {
    canonical: 'https://bethadenai.com/services/ai-strategy',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   Service + BreadcrumbList (FAQPage via FAQAccordion)
   ───────────────────────────────────────────── */

const strategySchema = {
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'AI Strategy',
          item: 'https://bethadenai.com/services/ai-strategy',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-strategy#service',
      name: 'AI Strategy',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'A focused planning engagement that takes your AI visibility audit findings and produces a sequenced, prioritized roadmap specific to your business goals and resources.',
      serviceType: 'AI Strategy Consulting',
      areaServed: 'US',
      url: 'https://bethadenai.com/services/ai-strategy',
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

const includedItems = [
  {
    title: 'Audit Findings Review',
    body: "Before building anything, Beth reviews your AI Visibility Audit in full — not as a summary, but as a working document. Every gap, every finding, every recommendation is evaluated in the context of your specific business goals, your competitive environment, and the resources you have available to act.\n\nIf you're coming to AI Strategy without a recent Beth Aden AI audit, the engagement begins with a structured situation assessment — a focused review of your current AI visibility position that provides enough clarity to build a credible plan.",
  },
  {
    title: 'Gap Prioritization',
    body: "Not every gap has equal impact. Some are foundational — if they're not addressed, other improvements won't hold. Some are high-leverage — closing them produces outsized results relative to the effort required. Some are important but can wait until the foundation is in place.\n\nGap prioritization is the core analytical work of the strategy engagement. Every gap identified in the audit is evaluated against two questions: what is the impact of closing this gap, and what does closing it depend on? The answers determine the sequence.",
  },
  {
    title: 'Action Mapping',
    body: "For each prioritized gap, the strategy defines a specific action: what needs to change, what form the change takes, what it will affect, and what success looks like. Actions are written specifically enough to be executable — not as general directions, but as concrete steps that can be handed off to implementation without ambiguity.",
  },
  {
    title: 'Sequenced Roadmap',
    body: "The full set of prioritized actions is organized into a sequenced roadmap — a phased plan that shows what to do in what order and why. The roadmap distinguishes between actions that must happen first (foundational), actions that depend on those foundations (structural), and actions that build on the structure to extend reach and authority (growth).\n\nThe roadmap is designed to be used, not filed.",
  },
  {
    title: 'Resource and Effort Assessment',
    body: "Every action in the roadmap comes with a realistic assessment of what it requires: time, technical complexity, content, external support. The goal isn't to overwhelm — it's to give you an accurate picture of what the plan demands so you can schedule, resource, and pace the work in a way that actually gets done.",
  },
  {
    title: 'Platform-Specific Guidance',
    body: "AI platforms differ in how they evaluate and represent businesses. The strategy includes specific guidance on the platforms most relevant to your business and your customers — ensuring the roadmap reflects where your visibility gaps have the most impact, not just what's most visible in the general AI search conversation.",
  },
  {
    title: 'Strategy Walkthrough Session',
    body: "When the roadmap is complete, Beth walks through it with you in a dedicated session. The session covers the full plan, the reasoning behind the sequence, answers to your questions, and any adjustments based on your business's specific constraints or priorities. You leave the session with a plan you understand and have had the opportunity to pressure-test.",
  },
]

const deliverables = [
  {
    title: 'AI Strategy Document',
    body: 'A structured, written roadmap covering the full strategy engagement outputs: gap prioritization findings, action map, sequenced roadmap, and resource assessments. Organized for use as a working document, not a reference manual. Written in plain language throughout.',
  },
  {
    title: 'Gap Priority Matrix',
    body: "A documented evaluation of every gap identified in your audit, ranked by impact and dependency — the analytical foundation the roadmap is built on. This document makes the sequencing decisions transparent and defensible: you'll understand exactly why certain actions come before others.",
  },
  {
    title: 'Sequenced Action Roadmap',
    body: "The plan itself: phased, prioritized, and specific. Each action has a clear description, an expected impact, a dependency map, and a resource assessment. The roadmap is written to be handed directly to implementation — whether that implementation is with Beth Aden AI or handled independently.",
  },
  {
    title: 'Platform-Specific Notes',
    body: 'Annotations within the roadmap identifying where platform-specific considerations affect the approach — which actions are most critical for which AI systems, and where platform differences require different execution.',
  },
  {
    title: 'Strategy Walkthrough Recording (where applicable)',
    body: 'A recorded version of the strategy walkthrough session, available for reference as you move through implementation. Not a substitute for the live session — a supplement to it.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Engagement Scoping',
    body: "The engagement begins with a scoping conversation: a review of your audit findings, a discussion of your business goals and constraints, and alignment on what the strategy needs to accomplish. This is where the engagement parameters are defined — what's in scope, what the roadmap will cover, and what timeline and format make the most sense for your situation.",
  },
  {
    number: '02',
    title: 'Gap Analysis and Prioritization',
    body: "Beth reviews your audit findings in full and works through the gap prioritization process — evaluating each identified gap for impact and dependency. This is the analytical foundation of the engagement. The output of this phase is the Gap Priority Matrix that will drive the roadmap.",
  },
  {
    number: '03',
    title: 'Action Mapping and Roadmap Development',
    body: "With priorities established, Beth maps specific actions to each gap and sequences them into the phased roadmap. This is where the plan takes shape — moving from 'here's what's wrong' to 'here's exactly what to do about it, in this order, for these reasons.'",
  },
  {
    number: '04',
    title: 'Resource and Platform Assessment',
    body: 'Each action in the roadmap is evaluated for resource requirements and platform-specific considerations. Realistic effort estimates are added. Platform-specific notes are documented where they affect the approach or the sequence.',
  },
  {
    number: '05',
    title: 'Walkthrough and Handoff',
    body: "Beth reviews the complete strategy with you in a dedicated session. The session covers the full roadmap, the reasoning behind every sequence decision, and any adjustments based on your feedback. At the close of the session, the final strategy document is delivered along with guidance on how to use it as a working document through implementation.",
  },
]

const qualifiers = [
  {
    title: "You've completed an AI Visibility Audit and need a plan",
    body: "The audit told you where you stand. AI Strategy tells you what to do about it. If you have documented findings and no clear path forward, this is the natural next step.",
  },
  {
    title: "You've been making AI visibility improvements without a framework",
    body: "If you've been making changes — to your website, your structured data, your directory listings — based on general advice or individual recommendations, and the results have been inconsistent, a strategy gives you the framework that makes those efforts compound rather than cancel each other out.",
  },
  {
    title: 'You want implementation to be efficient, not experimental',
    body: "The fastest way to implement AI visibility improvements is to go into implementation with a clear, sequenced plan. Businesses that start implementation without a strategy frequently redo work, discover dependencies they missed, and spend time on improvements that don't produce results because foundational issues weren't addressed first. A strategy eliminates that inefficiency.",
  },
  {
    title: 'You want to understand the plan, not just receive it',
    body: "AI Strategy at Beth Aden AI is built around your understanding of what you're doing and why. If the goal is to come out of the engagement able to evaluate, explain, and build on your AI visibility strategy — not just hand it off and hope for the best — this is the right fit.",
  },
]

const outcomes = [
  {
    title: 'Clarity on what to do first',
    body: "Before the engagement, you have findings and uncertainty. After it, you have a ranked list of specific actions, an explanation of why they're in that order, and enough context to evaluate the tradeoffs if your constraints require adjustments. The ambiguity that comes after an audit is replaced with direction.",
  },
  {
    title: 'A roadmap calibrated to your business',
    body: "The strategy isn't built for a generic small business in your category. It's built for your business — your specific gaps, your resources, your goals, and the AI platforms your customers are most likely to use. The difference between a general framework and a specific plan shows up in implementation: specific plans get executed. General frameworks get filed.",
  },
  {
    title: 'A foundation that makes implementation effective',
    body: "Businesses that enter implementation with a clear strategy complete it faster, with fewer course corrections, and with results that are easier to measure and build on. The strategy is what makes implementation efficient — connecting every action to a purpose and every purpose to an expected outcome.",
  },
  {
    title: 'Confidence in the investment',
    body: "One of the most common challenges business owners face when improving their AI visibility is the uncertainty about whether the work is worth doing. A documented strategy with clear impact assessments and realistic resource expectations makes that evaluation possible. You'll know what the plan requires, what it's intended to produce, and what progress looks like — before any implementation begins.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Do I need a Beth Aden AI audit before starting an AI Strategy engagement?',
    answer:
      "In most cases, yes. An AI Strategy engagement built on documented audit findings is more specific, more actionable, and more likely to produce results than one built on general assumptions about where your gaps are. The audit is what makes the strategy specific to your business rather than generic to your category. If you've had a recent, thorough AI visibility assessment from another source, that's worth discussing during your discovery call — but if you're starting without documented findings, the audit is the right first step.",
  },
  {
    question: 'How is AI Strategy different from a general marketing or digital strategy?',
    answer:
      "AI Strategy at Beth Aden AI is focused entirely on AI visibility — the signals, platforms, and systems that determine whether AI-powered tools recommend your business. It doesn't address social media strategy, paid advertising, brand positioning, or general SEO. If your primary need is in one of those areas, a general marketing or digital agency is a better fit. If your need is specifically about how AI search sees and represents your business, that's what this engagement addresses.",
  },
  {
    question: 'Can I implement the strategy myself without hiring Beth Aden AI for implementation?',
    answer:
      "Yes. The strategy document is written to be implemented by your business — either independently or with a different technical resource. Beth Aden AI's AI Implementation service offers guided execution with explanation at every step, but it isn't a requirement. The strategy is yours to use however your business is best positioned to act on it.",
  },
  {
    question: 'How specific is the roadmap? Will I know exactly what to do?',
    answer:
      "The roadmap is written to be actionable, not aspirational. Every action includes a description of what needs to change, what form the change takes, what it will affect, and what the expected outcome is. You won't receive a document full of vague directions. You'll receive a plan that's specific enough to execute — or to hand to a technical resource with enough context to get the work done correctly.",
  },
  {
    question: 'What if my situation changes after the strategy is delivered?',
    answer:
      "A strategy is a plan, not a contract. As your business evolves — or as the AI search landscape shifts — some actions may become more or less relevant. The roadmap is designed to be used as a working document that you update as progress is made and conditions change. Beth is available to discuss significant changes to your situation that might affect the strategy's priorities. The engagement produces a durable plan, but it's built to be adapted — not followed rigidly regardless of what changes.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AIStrategyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(strategySchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="AI Strategy"
        subheadline="Knowing where your AI visibility gaps are is the beginning. Knowing what to do about them — in what order, for what reason, with what resources — is what a strategy delivers."
        body="AI Strategy at Beth Aden AI takes your audit findings and builds a prioritized roadmap built around your specific business. Not a template. Not a framework applied from a distance. A plan that reflects what your business actually needs and what it can realistically execute."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/contact' }}
        secondaryCTA={{ text: "→ See what's included ↓", href: '#included' }}
        background="navy"
        size="medium"
        rightContent={
          <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[0_8px_48px_rgba(0,0,0,0.45)]">
            <div className="pb-4 mb-5 border-b border-white/[0.08]">
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                What You Leave With
              </p>
              <p className="font-heading font-semibold text-sm text-white leading-snug">
                A Plan You Can Actually Execute
              </p>
            </div>
            <div className="space-y-2.5 mb-5">
              {([
                'Which gaps to fix first — ranked by impact',
                'Step-by-step actions anyone can follow',
                'Effort and resource requirements per action',
                'Platform-by-platform priorities',
                'Walkthrough — every decision explained',
              ] as string[]).map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-teal/[0.12] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-teal" fill="none" viewBox="0 0 10 10" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[11px] text-silver/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.08]">
              <p className="text-[11px] text-silver/40 leading-relaxed">
                Built from your audit. No generic playbooks.
              </p>
            </div>
          </div>
        }
      />

      {/* Breadcrumb */}
      <div className="bg-cloud border-b border-silver py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Strategy' },
            ]}
          />
        </Container>
      </div>

      {/* ── SECTION 2: The Problem ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>The Gap Between Knowing and Doing</SectionLabel>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mt-2 mb-6">
              Most Businesses with Audit Findings Don&#39;t Know What to Do With Them
            </h2>
            <div className="space-y-5">
              <p className="text-base text-silver leading-relaxed">
                The AI Visibility Audit tells you where your business stands. It documents what AI systems
                are finding, what they&#39;re missing, and what&#39;s preventing them from recommending you. That
                information is valuable. But it isn&#39;t a plan.
              </p>
              <p className="text-base text-silver leading-relaxed">
                A gap analysis and a list of recommendations are a starting point, not a roadmap. And
                without a roadmap, most businesses respond to their findings the same way: they start with
                whatever looks most urgent, make a few changes, and hope the picture improves. Sometimes it
                does. Often it doesn&#39;t — because AI visibility isn&#39;t improved by isolated fixes. It&#39;s
                improved by sequenced, deliberate action that addresses foundational gaps before
                surface-level ones.
              </p>
              <p className="text-base text-silver leading-relaxed">
                This is the problem AI Strategy solves. It takes everything the audit revealed and turns it
                into a specific plan: what to fix first, what to fix second, why the order matters, what
                each action will take to execute, and what you can expect to see as progress accumulates.
              </p>
              <p className="text-base text-white font-heading font-semibold leading-relaxed">
                Without a strategy, you have information. With a strategy, you have direction.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: What Is AI Strategy ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6">
              What Is an AI Strategy Engagement?
            </h2>
            <div className="space-y-5">
              <p className="text-base text-graphite leading-relaxed">
                An AI Strategy engagement is a focused planning process that begins with your audit
                findings — or with a structured review of your current AI visibility situation — and ends
                with a documented roadmap for improving it.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The roadmap isn&#39;t a list of general best practices. It&#39;s a sequenced action plan specific
                to your business: built around the gaps the audit identified, organized by the impact each
                improvement will have, and calibrated to what a business your size can realistically
                undertake.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Every action in the plan is connected to a specific outcome. Every sequence decision is
                explained. Every recommendation is written in plain language with enough context that you
                understand not just what to do, but why you&#39;re doing it in that order.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The goal of an AI Strategy engagement isn&#39;t to hand you a document. It&#39;s to leave you
                with a plan you understand, believe in, and can execute — whether that execution happens
                with Beth Aden AI&#39;s guidance or independently.
              </p>
            </div>

            <div className="mt-10">
              <PullStatement quote="The audit shows you the gap. The strategy shows you how to cross it." />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: The Progression ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>The Progression</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            Why AI Strategy Exists Between the Audit and Implementation
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The three services at Beth Aden AI are designed as a progression. Understanding where AI
            Strategy sits in that progression — and what it makes possible — is the clearest way to
            understand its value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 1 — Audit */}
            <div className="bg-cloud rounded-lg border border-silver p-6 flex flex-col">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                Phase One
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Visibility Audit — The Baseline
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  The audit establishes the facts. How do AI systems currently see your business? What
                  signals are clear? What&#39;s fragmented or missing? What&#39;s costing you recommendations right
                  now? The audit answers all of these questions with documented specificity — and produces a
                  gap analysis and prioritized recommendations as its output.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  What the audit doesn&#39;t produce is a sequenced action plan. It tells you what the gaps
                  are. It doesn&#39;t build the bridge.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-silver">
                <Link
                  href="/services/ai-visibility-audit"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
                >
                  Learn about the Audit
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Phase 2 — Strategy (current service, highlighted) */}
            <div className="bg-cloud rounded-lg border-2 border-teal p-6 flex flex-col relative">
              <span className="absolute -top-3 left-6 bg-teal text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
                This Service
              </span>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-teal mb-2">
                Phase Two
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Strategy — The Roadmap
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  AI Strategy takes the audit output and answers the question the audit intentionally leaves
                  open: what do you do with this information, and in what order?
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  This is where decisions get made. Which gaps are foundational — things that must be
                  addressed before other improvements can take effect? Which improvements are high-leverage
                  but depend on other work being done first? Which actions can happen in parallel? What does
                  realistic progress look like over the next 90 days, six months, a year?
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  The strategy answers those questions in a form that&#39;s specific enough to act on and
                  flexible enough to adjust as your business evolves.
                </p>
              </div>
            </div>

            {/* Phase 3 — Implementation */}
            <div className="bg-cloud rounded-lg border border-silver p-6 flex flex-col">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                Phase Three
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Implementation — The Execution
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  Implementation executes the strategy. Changes are made to structured data, content, entity
                  presence, and cross-platform consistency — in the sequence the strategy defined, with
                  guidance throughout.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  Without a strategy, implementation is guesswork. With a strategy, every implementation
                  decision has a reason behind it and a place in a larger sequence. The strategy is what
                  makes implementation efficient and measurable rather than random and frustrating.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-silver">
                <Link
                  href="/services/ai-implementation"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
                >
                  Learn about Implementation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: What's Included ── */}
      <Section background="white" id="included">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-3">
            What the AI Strategy Engagement Covers
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Every AI Strategy engagement at Beth Aden AI includes the following components. The specific
            depth and scope of each component is calibrated to the complexity of your business and the
            findings from your audit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {includedItems.map((item, i) => {
              const isLast = i === includedItems.length - 1
              const isOdd = includedItems.length % 2 !== 0
              return (
                <div
                  key={i}
                  className={`bg-silver rounded-lg p-6 ${
                    isLast && isOdd ? 'md:col-span-2 md:max-w-xl' : ''
                  }`}
                >
                  <h3 className="font-heading font-semibold text-sm text-navy mb-3">{item.title}</h3>
                  <div className="space-y-3">
                    {item.body.split('\n\n').map((para, j) => (
                      <p key={j} className="text-sm text-graphite leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: Deliverables ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
            What You Receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className={`bg-cloud rounded-lg p-6 border border-silver ${
                  i === deliverables.length - 1 && deliverables.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-xl'
                    : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-teal/10 text-teal text-xs font-heading font-semibold flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: Process Overview ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-3">
              How the Engagement Works
            </h2>
            <p className="text-base text-silver leading-relaxed mb-12">
              The AI Strategy engagement is structured, direct, and designed to produce a usable document
              — not a lengthy consulting process. Here&#39;s what to expect from start to finish.
            </p>
            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-12">
                    <span
                      className="text-4xl font-heading font-semibold text-teal/30 leading-none"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-semibold text-lg text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-silver leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: Who It's For ── */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              This Engagement Is Right for You If...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {qualifiers.map((q, i) => (
                <div key={i} className="border-t-2 border-teal pt-5">
                  <h3 className="font-heading font-semibold text-base text-navy mb-3">{q.title}</h3>
                  <p className="text-sm text-graphite leading-relaxed">{q.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-silver rounded-lg p-6 max-w-2xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-graphite/60 mb-3">
                When This Engagement Is Not the Right Fit
              </p>
              <div className="space-y-3">
                <p className="text-sm text-graphite leading-relaxed">
                  If you haven&#39;t completed an AI Visibility Audit and aren&#39;t sure where your gaps are,
                  AI Strategy isn&#39;t the right starting point. A strategy built on assumptions is less
                  effective than one built on findings.{' '}
                  <Link
                    href="/services/ai-visibility-audit"
                    className="text-teal underline underline-offset-2 hover:text-navy transition-colors"
                  >
                    The audit comes first.
                  </Link>
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  If you&#39;re looking for a general AI education or an overview of AI search trends, the{' '}
                  <Link
                    href="/resources"
                    className="text-teal underline underline-offset-2 hover:text-navy transition-colors"
                  >
                    AI Visibility Library
                  </Link>{' '}
                  is a better starting point than a strategy engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9: Expected Outcomes ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
            What You&#39;ll Walk Away With
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The outcomes of an AI Strategy engagement are specific and documented. Here&#39;s what changes
            between the start and the end of the engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {outcomes.map((outcome, i) => (
              <div key={i} className="bg-cloud rounded-lg p-6 border border-silver">
                <div
                  className="text-2xl font-heading font-semibold text-teal/30 mb-3"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{outcome.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 10: FAQ ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 11: Related Services ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-8">
            Where AI Strategy Fits in the Full Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-cloud rounded-lg p-6 border border-silver">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                The Starting Point
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                AI Visibility Audit
              </h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                Before you can build a strategy, you need a documented picture of where you stand. The AI
                Visibility Audit establishes that baseline — what AI systems find when they look at your
                business, and what&#39;s preventing them from recommending you.
              </p>
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
              >
                Learn about the AI Visibility Audit
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-cloud rounded-lg p-6 border border-silver">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                The Next Step
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                AI Implementation
              </h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                A strategy without execution produces no results. AI Implementation takes your roadmap and
                turns it into changes — guided, explained, and built to last beyond the engagement.
              </p>
              <Link
                href="/services/ai-implementation"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
              >
                Learn about AI Implementation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 12: Final CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5">
              Ready to Build a Plan?
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-8">
              If you have audit findings and need a clear path forward — or if you&#39;ve been working on
              your AI visibility without a framework and want to approach it with more intention — an AI
              Strategy engagement gives you the roadmap your implementation needs to be effective.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
              >
                Book a Discovery Call
              </Link>
              <p className="text-sm text-silver/70">
                Beth reviews every inquiry personally and responds within 1–2 business days.
              </p>
              <Link
                href="/services"
                className="text-sm text-silver/60 hover:text-silver underline underline-offset-2 transition-colors"
              >
                ← Back to all services
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
