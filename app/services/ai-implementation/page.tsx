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
  title: 'AI Implementation for Small Business',
  description:
    "Beth Aden AI's AI Implementation service executes your AI visibility roadmap — making the specific changes that help AI systems find, understand, and recommend your business.",
  alternates: {
    canonical: 'https://bethadenai.com/services/ai-implementation',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   Service + BreadcrumbList (FAQPage via FAQAccordion)
   ───────────────────────────────────────────── */

const implementationSchema = {
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
          name: 'AI Implementation',
          item: 'https://bethadenai.com/services/ai-implementation',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-implementation#service',
      name: 'AI Implementation',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'Guided execution of your AI visibility strategy — making the specific changes to structured data, content, entity presence, and cross-platform consistency that help AI systems find, understand, and recommend your business.',
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

const implementationAreas = [
  {
    title: 'Structured Data and Schema Markup',
    body: "Structured data is how your business communicates its identity, services, and relationships to AI systems in a format those systems can parse and trust. Schema markup is the technical implementation of structured data — the JSON-LD code that sits in your website's infrastructure and tells AI systems exactly what your business does, who operates it, where it's located, and how it relates to other entities.\n\nImplementation covers writing, deploying, and validating schema markup appropriate to your business type — including the schema types identified in your strategy as highest-priority for your specific AI visibility gaps. This includes validation against Google's Rich Results Test and verification across the platforms your customers use most.",
  },
  {
    title: 'Content Restructuring and Optimization',
    body: "AI systems evaluate your content for clarity, authority, and relevance to the queries they're trying to answer. Content that was written for traditional SEO or for human readers often doesn't provide the clear, structured signals AI systems need to confidently represent your business.\n\nImplementation covers restructuring and optimizing your existing content — not rewriting it for its own sake, but editing it to answer the specific questions AI systems and your customers are asking, in a format that supports AEO (Answer Engine Optimization) extraction and GEO (Generative Engine Optimization) inclusion. Where new content is identified in the strategy as critical to addressing a specific gap, implementation covers writing that content.",
  },
  {
    title: 'Entity Definition and Establishment',
    body: "Your business exists in AI systems' understanding as an entity — a defined, distinct organization with specific characteristics, a primary operator, a service offering, and a geographic or topical relevance. How clearly your entity is defined determines how confidently AI systems can represent you.\n\nImplementation covers the work of defining and establishing your business entity across the signals AI systems use to build that picture: your website's About content, your structured data, your business profiles, and the consistency of your identity information across all of them.",
  },
  {
    title: 'Cross-Platform Consistency',
    body: "AI systems assemble their understanding of your business from multiple sources. Inconsistencies between those sources — different business names, different phone numbers, different service descriptions, different addresses — create uncertainty that reduces AI confidence in representing you accurately.\n\nImplementation covers auditing and reconciling your business information across the platforms that matter most for your AI visibility: business directories, professional profiles, review platforms, and any other sources identified in your audit as contributors to your entity profile. Inconsistencies are documented, corrected, and verified.",
  },
  {
    title: 'Internal Linking and Information Architecture',
    body: "How your website is organized internally affects how AI systems understand the scope and depth of your expertise. A well-structured site with clear topical relationships communicates authority in a way that a flat, poorly-linked site cannot.\n\nImplementation covers reviewing and improving your internal linking structure based on the strategy's recommendations — ensuring that related content is connected, that your service pages and resource content reinforce each other's authority, and that your site architecture supports AI comprehension of what your business does and knows.",
  },
  {
    title: 'Technical Visibility Foundations',
    body: "AI systems crawl and index your content. Technical barriers — slow page load, crawl errors, missing canonical tags, broken links, mobile rendering issues — reduce the reliability of what those systems can find and trust.\n\nImplementation covers a review of your technical foundations and correction of any issues identified in the strategy as material to your AI visibility. The scope here is narrow and specific to AI discoverability — the foundational technical issues that directly affect how AI systems access and trust your content.",
  },
]

const deliverables = [
  {
    title: 'Implementation Work Product',
    body: "The changes themselves — schema markup written and deployed, content restructured and optimized, entity information reconciled, technical foundations addressed. This is the primary deliverable: a digital presence that has been systematically improved to close the gaps identified in your audit and sequenced in your strategy.",
  },
  {
    title: 'Implementation Log',
    body: "A documented record of every change made during the engagement: what was changed, where it was deployed, what it was intended to accomplish, and the baseline it was changed from. The log is yours to keep as a permanent reference — both for maintaining the work and for understanding what was built.",
  },
  {
    title: 'Validation Documentation',
    body: "For technical implementations (schema markup in particular), written documentation that the implementation was validated correctly — including Rich Results Test outputs and any platform-specific verification relevant to your business type.",
  },
  {
    title: 'Completion Summary',
    body: "A written summary of the full engagement — the strategy actions addressed, the changes made, the outcomes to monitor, and the recommended next steps for maintaining and building on your AI visibility foundation going forward.",
  },
  {
    title: 'Maintenance Guidance',
    body: "Practical, plain-language guidance on how to maintain your AI visibility improvements over time — what to update when your business changes, how to handle new platforms, what to monitor, and when to consider a follow-up audit.",
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Pre-Implementation Review',
    body: "The engagement begins with a review of your strategy roadmap and a scoping conversation. Beth reviews the strategy in full, confirms the priority sequence with your current business context, and establishes the implementation plan: which actions will be addressed in which order, what each phase of the engagement covers, and what your involvement will look like throughout.\n\nIf anything in your situation has changed since the strategy was completed — new services, new platforms, business model changes — this is when those changes are factored into the implementation plan.",
  },
  {
    number: '02',
    title: 'Foundational Implementation',
    body: "The first phase of implementation addresses the foundational actions in your strategy — the changes that must be made before other improvements can take effect. This typically includes entity definition work, core schema markup, and the most critical cross-platform consistency corrections. These are the changes with the highest dependency weight: other improvements rely on them being in place.",
  },
  {
    number: '03',
    title: 'Structural Implementation',
    body: "With the foundation in place, implementation moves to the structural layer — content restructuring and optimization, internal linking improvements, expanded schema coverage, and secondary cross-platform corrections. These are the changes that build the structure AI systems need to represent your business with confidence and specificity.",
  },
  {
    number: '04',
    title: 'Growth-Layer Implementation',
    body: "The final implementation phase addresses the growth-layer actions in the strategy — the improvements that extend your AI visibility beyond the foundation and into the topical and geographic relevance signals that drive recommendations for specific queries. This includes content additions identified in the strategy, FAQ and AEO-optimized content, and any authoritative mention or citation work in scope.",
  },
  {
    number: '05',
    title: 'Validation and Handoff',
    body: "When implementation is complete, Beth conducts a full validation pass — confirming that schema markup validates correctly, that cross-platform consistency has been achieved, and that the changes made align with the outcomes the strategy intended. A completion summary is prepared and delivered, along with the implementation log and maintenance guidance.\n\nA final walkthrough session covers what was built, what to watch, and what to do next.",
  },
]

const qualifiers = [
  {
    title: "You've completed an AI Visibility Audit and AI Strategy",
    body: "This is the natural progression. If you have a documented gap analysis and a sequenced roadmap, AI Implementation is what turns that planning into results. Without audit and strategy, implementation works from assumptions — and assumptions produce weaker outcomes than findings.",
  },
  {
    title: "You have an AI strategy but haven't been able to execute it",
    body: "If you went through strategy work — whether with Beth Aden AI or another resource — and the plan hasn't been implemented, this engagement provides the guided execution that gets the work done. Bring your existing roadmap. Implementation starts from where the strategy left off.",
  },
  {
    title: "You've been making AI visibility changes without clear results",
    body: "If you've been implementing changes based on general advice — updating schema here, adding an FAQ there — and you're not seeing consistent progress, the likely issue is sequencing and completeness rather than the individual changes themselves. A guided implementation engagement that starts from a documented strategy will be more effective than continued piecemeal work.",
  },
  {
    title: 'You want the work done correctly, with explanation throughout',
    body: "AI Implementation at Beth Aden AI is built around your understanding of what's being done. If you want to come out of the engagement knowing what was built, why it was built that way, and how to maintain it — rather than inheriting a technical black box that works until it doesn't — this is the right approach.",
  },
]

const outcomes = [
  {
    title: 'A digital presence rebuilt for AI visibility',
    body: "The most direct outcome of implementation is a business whose digital presence has been systematically improved to close the gaps that were costing it AI recommendations. Structured data that was missing is in place. Content that was ambiguous to AI systems is clear. Entity information that was fragmented is consistent. Technical barriers that were reducing AI trust are resolved.\n\nThis doesn't guarantee specific placement in specific AI recommendations — no ethical AI visibility practice can guarantee that. What it does is give AI systems everything they need to confidently represent your business when it's relevant to a query.",
  },
  {
    title: 'Documented, maintainable work',
    body: "The implementation log and completion summary give you a permanent record of what was built. You'll know what exists, where it lives, and what it's intended to do. When your business changes — new services, new locations, new content — you'll have the context to update the foundation rather than rebuild it from scratch.",
  },
  {
    title: 'An understanding of your AI visibility',
    body: "Every change made during implementation is explained as it's made. By the end of the engagement, you'll understand your business's AI visibility in practical terms: what AI systems see, why it's structured the way it is, what signals you're sending, and what to maintain. That understanding compounds in value over time — it informs content decisions, platform decisions, and future investment decisions in ways that a business without that understanding can't access.",
  },
  {
    title: 'A foundation to build on',
    body: "AI visibility isn't a one-time project. The landscape evolves. New platforms emerge. AI systems update how they evaluate sources. Your business changes. The foundation built during implementation is designed to be durable and extensible — built to be maintained and grown, not replaced.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Do I need to have completed an AI Visibility Audit and AI Strategy before starting implementation?',
    answer:
      "In almost every case, yes. AI Implementation is designed to execute a strategy — which is itself built on documented audit findings. Implementation without a strategy means making changes without a sequenced, prioritized plan, which produces weaker results and makes it harder to measure progress. If you've had a recent AI visibility assessment and strategy engagement elsewhere, that's worth discussing in a discovery call. But if you're starting without either, the audit is the right first step.",
  },
  {
    question: 'How is AI Implementation different from AI Strategy?',
    answer:
      "AI Strategy produces a plan. AI Implementation executes it. Strategy is a planning engagement: it takes your audit findings, prioritizes the gaps, and produces a sequenced roadmap of specific actions. Implementation takes that roadmap and makes the changes — writing and deploying schema markup, restructuring content, reconciling cross-platform consistency, addressing technical foundations. Both are necessary. Neither substitutes for the other.",
  },
  {
    question: 'What does "guided" implementation mean in practice?',
    answer:
      "It means you're involved and informed throughout the engagement — not just at the beginning and end. Beth explains what's being done at each phase: what's changing, what it's intended to accomplish, and what you should expect to see from it. You're not handed a completed project without context. You understand the work as it happens, and you have the opportunity to ask questions, surface concerns, and contribute context that might affect specific implementation decisions. The goal is for you to own the outcome, not just receive it.",
  },
  {
    question: 'Can I implement the strategy myself without this engagement?',
    answer:
      "Yes — the strategy document is written to be implementable by your business, independently or with a different technical resource. AI Implementation provides guided execution with explanation, validation, and documentation throughout. The advantage of the guided engagement is consistency, sequencing, and the assurance that each change is made correctly and in the right order. If you have a technical resource who can execute the strategy and you're confident in their ability to apply the AI visibility context correctly, independent implementation is a reasonable path. If you're less certain, or if you want the work done with Beth's direct oversight, this engagement is the more reliable option.",
  },
  {
    question: 'What happens after implementation is complete? Is ongoing support available?',
    answer:
      "The completion of an implementation engagement leaves you with a documented, maintained AI visibility foundation and the guidance to keep it current. As your business evolves — new services, new content, changes to your digital presence — you'll have the context to update your foundation appropriately.\n\nIf your situation changes significantly, or if a follow-up audit after a period of time identifies new gaps, that's a conversation about what comes next. Beth Aden AI doesn't structure its services around long-term retainers — the work is built to leave you capable rather than dependent. When ongoing guidance makes sense, it's discussed in practical terms, not packaged as a default add-on.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AIImplementationPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(implementationSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="AI Implementation"
        subheadline="A roadmap without execution produces no results. AI Implementation is where the plan becomes changes — to your structured data, your content, your entity presence, and the signals AI systems use to evaluate and recommend your business."
        body="Every implementation engagement at Beth Aden AI is guided. You'll understand what's being done, why it's being done, and what to expect from it. Not a black box. Not a handoff. A working process that leaves your business in better shape — and leaves you with the understanding to maintain and build on what was built."
        primaryCTA={{ text: 'Book a Discovery Call', href: '/contact' }}
        secondaryCTA={{ text: "→ See what's included ↓", href: '#included' }}
        background="navy"
        size="medium"
        rightContent={
          <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[0_8px_48px_rgba(0,0,0,0.45)]">
            <div className="pb-4 mb-5 border-b border-white/[0.08]">
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                What Changes
              </p>
              <p className="font-heading font-semibold text-sm text-white leading-snug">
                The Work That Gets You Recommended
              </p>
            </div>
            <div className="space-y-2.5 mb-5">
              {([
                'AI finds your business — accurately',
                'Consistent information everywhere it counts',
                'Structured data AI can read and trust',
                'Content that signals expertise and relevance',
                'A stronger, more verifiable presence',
                'Full handoff — you own the outcome',
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
                You understand every change before it&apos;s made.
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
              { label: 'AI Implementation' },
            ]}
          />
        </Container>
      </div>

      {/* ── SECTION 2: The Problem ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Why Strategy Alone Isn&#39;t Enough</SectionLabel>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mt-2 mb-6">
              Most AI Visibility Improvements Stall at the Planning Stage
            </h2>
            <div className="space-y-5">
              <p className="text-base text-graphite leading-relaxed">
                This is the most common pattern in AI visibility work: a business gets an audit, receives
                findings, develops a plan — and then the plan sits.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Not because the business doesn&#39;t care. Not because the work isn&#39;t worth doing. But
                because implementation is where the gap between knowing and doing gets widest. Structured
                data needs to be written and deployed. Content needs to be restructured. Entity information
                needs to be reconciled across a dozen different platforms. Schema markup needs to be coded
                and validated. Each of these tasks is specific, technical in places, and dependent on
                everything else being done in the right order.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Without guided implementation support, most businesses do one of two things: they hand the
                plan to a developer who implements the technical pieces without understanding the AI
                visibility context, or they attempt to work through it independently and stall when the
                complexity exceeds their available time or technical confidence.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Both paths produce incomplete results. The structured data gets added but the content isn&#39;t
                aligned with it. The content gets updated but the cross-platform consistency is still
                broken. The work that does get done doesn&#39;t compound — because the pieces weren&#39;t
                sequenced in the order that would let them reinforce each other.
              </p>
              <p className="text-base text-navy font-heading font-semibold leading-relaxed">
                This is exactly what AI Implementation at Beth Aden AI is designed to do.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: What AI Implementation Is ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6">
              What Is an AI Implementation Engagement?
            </h2>
            <div className="space-y-5">
              <p className="text-base text-graphite leading-relaxed">
                An AI Implementation engagement is a structured, guided execution process. It takes a
                completed AI Strategy roadmap — the prioritized, sequenced action plan that came out of
                your strategy engagement — and turns it into actual changes across your business&#39;s digital
                presence.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Implementation isn&#39;t about making changes for their own sake. Every action taken during
                implementation is anchored to the strategy: a specific gap, a specific signal AI systems
                are missing or misreading, a specific outcome the change is intended to produce. Nothing is
                changed because it seems like a good idea. Everything is changed because the strategy
                established it as the right action at the right point in the sequence.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The engagement is guided throughout. Beth oversees and explains every implementation
                decision. You&#39;re not handed off to a technical team that works in isolation. You know
                what&#39;s being done at every step, what it&#39;s intended to accomplish, and what it looks like
                when it&#39;s done correctly.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The goal of implementation isn&#39;t a one-time fix. It&#39;s a documented, maintained foundation
                for ongoing AI visibility that your business owns.
              </p>
            </div>

            <div className="mt-10">
              <PullStatement quote="Implementation isn't the end of the process. It's where the strategy starts working." />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: The Progression ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>The Progression</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            Why AI Implementation Exists at the End of the Path — and What the Path Makes Possible
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The three services at Beth Aden AI follow a deliberate sequence. Implementation is the final
            phase, but understanding what it depends on — and what it makes possible — is the clearest
            way to understand its value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phase 1 — Audit */}
            <div className="bg-cloud rounded-lg border border-silver p-6 flex flex-col shadow-sm">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                Phase One
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Visibility Audit — The Diagnosis
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  The audit documents your current AI visibility status with specificity. It identifies
                  what AI systems find when they look at your business, what signals are incomplete or
                  contradictory, and where the gaps are costing you recommendations.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  You cannot implement effectively without knowing what needs to change. The audit answers
                  that question.
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

            {/* Phase 2 — Strategy */}
            <div className="bg-cloud rounded-lg border border-silver p-6 flex flex-col shadow-sm">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                Phase Two
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Strategy — The Plan
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  The strategy takes the audit findings and produces a sequenced action plan: which gaps to
                  address first, which improvements depend on others being done first, and what each action
                  requires to execute.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  You cannot implement efficiently without knowing what to do first. The strategy answers
                  that question.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-silver">
                <Link
                  href="/services/ai-strategy"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
                >
                  Learn about AI Strategy
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Phase 3 — Implementation (current service, highlighted) */}
            <div className="bg-cloud rounded-lg border-2 border-teal p-6 flex flex-col relative">
              <span className="absolute -top-3 left-6 bg-teal text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
                This Service
              </span>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-teal mb-2">
                Phase Three
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">
                AI Implementation — The Execution
              </h3>
              <div className="space-y-3 flex-1">
                <p className="text-sm text-graphite leading-relaxed">
                  Implementation makes the changes. Every action in the strategy roadmap is executed in
                  sequence — structured data is written and deployed, content is restructured and
                  optimized, entity information is reconciled across platforms, schema markup is coded and
                  validated.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  The audit told you where you stood. The strategy told you what to do.{' '}
                  <span className="font-heading font-semibold text-navy">Implementation does it.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bridge paragraph — transparency moment, do not minimize */}
          <div className="max-w-2xl bg-cloud rounded-lg border border-silver p-6 shadow-sm">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-graphite/60 mb-3">
              Why the Sequence Matters
            </p>
            <p className="text-sm text-graphite leading-relaxed">
              Businesses occasionally ask whether they can skip the audit and strategy and go straight to
              implementation. The honest answer is: implementation without a strategy is guesswork, and
              strategy without an audit is an incomplete plan. Skipping phases doesn&#39;t accelerate results
              — it reduces their quality and durability. The sequence exists because each phase produces
              something the next phase depends on.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: What Implementation Includes ── */}
      <Section background="white" id="included">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-3">
            What the Implementation Engagement Covers
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            AI Implementation at Beth Aden AI covers six primary areas. The specific scope within each
            area is determined by your strategy roadmap — by what your audit found and what your strategy
            prioritized. Not every engagement requires the same depth in every area. What every
            engagement does require is that the areas are addressed in the right sequence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {implementationAreas.map((area, i) => (
              <div key={i} className="bg-silver rounded-lg p-6">
                <h3 className="font-heading font-semibold text-sm text-navy mb-3">{area.title}</h3>
                <div className="space-y-3">
                  {area.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm text-graphite leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
                className={`bg-cloud rounded-lg p-6 border border-silver shadow-sm ${
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
      <Section background="silver">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-3">
              How the Engagement Works
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-12">
              The AI Implementation engagement is structured around your strategy roadmap. Every phase of
              the engagement maps to a phase of the roadmap — foundational work first, structural work
              second, growth-layer work third.
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
                    <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                      {step.title}
                    </h3>
                    <div className="space-y-3">
                      {step.body.split('\n\n').map((para, j) => (
                        <p key={j} className="text-base text-graphite leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
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
                  If you haven&#39;t completed an AI Visibility Audit and AI Strategy, implementation isn&#39;t
                  the right starting point. Executing without a documented strategy produces changes that
                  may or may not address the right gaps, in the right sequence, at the right depth. The
                  audit and strategy aren&#39;t prerequisites because of process — they&#39;re prerequisites
                  because they&#39;re what makes implementation worth doing.
                </p>
                <p className="text-sm text-graphite leading-relaxed">
                  If you&#39;re looking for ongoing content creation, social media management, or general
                  marketing support, those needs are better served by a general marketing resource. AI
                  Implementation covers the specific changes to your digital infrastructure and content
                  that affect AI visibility. It isn&#39;t a content retainer or a marketing engagement.
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
            Implementation produces two kinds of outcomes: the changes themselves, and your understanding
            of what was changed and why. Both matter for different reasons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {outcomes.map((outcome, i) => (
              <div key={i} className="bg-cloud rounded-lg p-6 border border-silver shadow-sm">
                <div
                  className="text-2xl font-heading font-semibold text-teal/30 mb-3"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {outcome.title}
                </h3>
                <div className="space-y-3">
                  {outcome.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm text-graphite leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
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
            The Full Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-cloud rounded-lg p-6 border border-silver shadow-sm">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                Where to Start
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                AI Visibility Audit
              </h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                Before you can implement effectively, you need a documented picture of where your AI
                visibility gaps are. The AI Visibility Audit establishes that baseline with specificity —
                the right foundation for every phase of work that follows.
              </p>
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
              >
                Learn about the AI Visibility Audit
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-cloud rounded-lg p-6 border border-silver shadow-sm">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-graphite/50 mb-2">
                The Plan That Makes Implementation Work
              </p>
              <h3 className="font-heading font-semibold text-base text-navy mb-3">AI Strategy</h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                Implementation without a strategy is guesswork. AI Strategy builds the sequenced,
                prioritized roadmap that implementation executes — and it&#39;s what makes the difference
                between isolated changes and a coherent, compounding plan.
              </p>
              <Link
                href="/services/ai-strategy"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
              >
                Learn about AI Strategy
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
              Ready to Execute Your Roadmap?
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-8">
              If you have an AI strategy and you&#39;re ready to make the changes — or if you want to move
              through the full path from audit to strategy to implementation — this is where the work
              actually gets done.
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
