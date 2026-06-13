import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { PullStatement } from '@/components/global/PullStatement'
import { CTABlock } from '@/components/global/CTABlock'
import { ServiceCard } from '@/components/global/ServiceCard'
import { ArticleCard } from '@/components/global/ArticleCard'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import type { FAQItem, ServiceCard as ServiceCardType } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Visibility & Strategy for Small Business',
  description:
    'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI search, answer engines, and automated decision systems. Start with an AI Visibility Audit.',
  alternates: {
    canonical: 'https://bethadenai.com/',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   WebSite + Organization + Person in one @graph
   ───────────────────────────────────────────── */

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://bethadenai.com/#website',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
      description:
        'AI visibility strategy, GEO, AEO, and implementation for small businesses.',
    },
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
      description:
        'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI search, answer engines, and automated decision systems.',
      email: 'beth@bethadenai.com',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      founder: { '@id': 'https://bethadenai.com/#person' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'beth@bethadenai.com',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      url: 'https://bethadenai.com/about',
      worksFor: { '@id': 'https://bethadenai.com/#organization' },
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE DATA
   ───────────────────────────────────────────── */

const services: ServiceCardType[] = [
  {
    title: 'AI Visibility Audit',
    description:
      'The right place to start. An AI Visibility Audit examines how AI systems currently find, understand, and represent your business — across ChatGPT, Perplexity, Google AI Overviews, and others. You\'ll receive a written report with your current visibility status, a gap analysis, and a prioritized list of recommendations.',
    href: '/services/ai-visibility-audit',
    badge: 'Start Here',
  },
  {
    title: 'AI Strategy',
    description:
      'Once you know where you stand, the next step is a plan. AI Strategy takes your audit findings and builds a prioritized roadmap tailored to your business, your goals, and your resources. The strategy is practical, not theoretical — designed to be implemented by a real business with real constraints.',
    href: '/services/ai-strategy',
  },
  {
    title: 'AI Implementation',
    description:
      'Strategy without execution is just a document. AI Implementation is where plans become changes — to your website, your structured data, your content, your cross-platform presence, and the other signals that determine how AI systems see your business.',
    href: '/services/ai-implementation',
  },
]

const differentiators = [
  {
    title: 'Specific Over General',
    body: 'Beth Aden AI doesn\'t offer everything. The practice is focused specifically on AI visibility, AI strategy, and AI implementation for small businesses. That focus means deeper expertise and more relevant recommendations — not a broad agency menu with AI tacked on.',
  },
  {
    title: 'Honest Over Optimistic',
    body: 'The AI space is full of inflated promises. Beth Aden AI operates differently. If an audit reveals that your AI visibility is stronger than expected, you\'ll hear that. If the gaps are significant, you\'ll hear that too — along with exactly what to do about them.',
  },
  {
    title: 'Practical Over Theoretical',
    body: 'AI strategy that can\'t be implemented isn\'t useful. Every recommendation from Beth Aden AI is grounded in what\'s actually achievable for a business like yours — prioritized by impact, written in plain language, and designed to be executed without a technical team.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Assess',
    body: 'Before anything else, you need to know where your business stands. An AI Visibility Audit establishes your baseline — documenting how AI systems currently find, understand, and represent your business, and identifying the gaps that are costing you visibility.',
  },
  {
    number: '02',
    title: 'Strategize',
    body: 'With a clear picture of your current AI visibility, the next step is a plan. AI Strategy takes your audit findings and builds a prioritized roadmap — specific to your business, your services, and the platforms your customers use most.',
  },
  {
    number: '03',
    title: 'Implement',
    body: 'Strategy becomes results through implementation. Whether that means improving your structured data, restructuring your content, building your entity presence, or addressing cross-platform consistency — each change is made with purpose, and explained along the way.',
  },
  {
    number: '04',
    title: 'Optimize',
    body: 'AI search evolves. The platforms change, the signals shift, and what works today will need to be maintained and refined over time. Ongoing optimization keeps your business visible and competitive as the AI search landscape continues to develop.',
  },
]

const libraryArticles = [
  {
    slug: 'what-is-ai-visibility',
    category: 'AI Visibility',
    title: 'What Is AI Visibility — and Why Your Business Needs It',
    description:
      'AI visibility is the degree to which AI-powered systems can find, understand, and recommend your business. This article explains what it is, why it matters now, and what the difference is between being visible online and being visible to AI.',
    badge: 'Start Here',
  },
  {
    slug: 'what-is-geo',
    category: 'GEO',
    title: 'What Is Generative Engine Optimization (GEO)?',
    description:
      'GEO is the practice of optimizing your business\'s digital presence for generative AI systems — so that tools like ChatGPT, Perplexity, and Gemini are more likely to recommend you. This article explains what GEO is, how it works, and why it\'s different from SEO.',
  },
  {
    slug: 'what-is-aeo',
    category: 'AEO',
    title: 'What Is Answer Engine Optimization (AEO)?',
    description:
      'AEO focuses on making your business the answer when AI-powered tools respond to questions. This article explains what AEO is, how answer engines decide what to surface, and why small businesses should pay attention to it now.',
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'What does Beth Aden AI do?',
    answer:
      'Beth Aden AI helps small businesses become visible, understandable, and recommendable across AI-powered search platforms and answer engines. The practice offers AI Visibility Audits, AI Strategy, and AI Implementation — a full path from understanding where your business stands in AI search to doing something about it.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Beth Aden AI works with small business owners, service businesses, entrepreneurs, and growing companies who rely on customers finding them — and who want to understand how AI search is affecting that. The work is practical and plain-language, designed for business owners without a technical background. You don\'t need to understand how AI works to benefit from being visible to it.',
  },
  {
    question: 'How is AI visibility different from SEO?',
    answer:
      'SEO is about ranking in traditional search results — Google, Bing, and similar platforms. AI visibility is about showing up in AI-powered recommendations from tools like ChatGPT, Perplexity, and Google AI Overviews. These are different systems that use different signals to evaluate businesses. Strong SEO doesn\'t guarantee AI visibility. Improving your AI visibility requires understanding a different set of requirements — which is exactly what an AI Visibility Audit identifies.',
  },
  {
    question: 'Where should I start?',
    answer:
      'Start with an AI Visibility Audit. It\'s the most efficient first step because everything else — strategy, implementation, content — is more effective when it\'s built on accurate information about how AI systems currently see your specific business. The audit tells you exactly where you stand and what to prioritize. From there, you\'ll know what kind of help you need and in what order.',
  },
]

const proofColumns = [
  {
    title: 'Built',
    items: [
      'AI Visibility OS™',
      'Proofmaster™ distillery calculator platform',
      'Custom GPT and workflow systems',
      'AI visibility audit framework',
    ],
  },
  {
    title: 'Implemented',
    items: [
      'AI-assisted business planning',
      'Distillery marketing and investor materials',
      'Client AI training and adoption support',
      'Workflow documentation and operational systems',
    ],
  },
  {
    title: 'Validated',
    items: [
      'Client recommendations',
      'Claude training completed',
      'Real business use cases',
      'Founder-led implementation',
    ],
  },
]

// Rick Aden — DO NOT PUBLISH until quote receives final approval from Rick.
// {
//   quote: "Beth introduced me to practical AI tools for the distillery business, helping turn ideas into marketing materials, investor resources, product planning, and the Proofmaster calculator platform.",
//   name: "Rick Aden",
//   context: "Ozark Mountains Distillery",
// },
const testimonials = [
  {
    quote: 'Beth brings a rare combination of technical knowledge and practical application. Her training was immediately actionable and tailored to my business needs.',
    name: 'Erin Mercer',
    context: 'Legacy Practice Transitions',
  },
  {
    quote: 'Beth built custom AI solutions tailored to my workflow that significantly improved efficiency and accuracy.',
    name: 'Wendy Greenlee',
    context: 'Jefferson County Courts',
  },
  {
    quote: 'Beth helped elevate my overall marketing approach, enhancing visibility, branding, and client engagement.',
    name: 'Patricia Carter',
    context: 'Heartland Realty',
  },
]

const caseStudies = [
  {
    title: 'Ozark Mountains Distillery',
    challenge: 'A traditional distillery business needed stronger marketing assets, planning support, operational tools, and practical AI adoption.',
    solution: 'Beth introduced AI-assisted planning, content development, investor materials, product support, workflow systems, and Proofmaster™ calculator development.',
    outcome: 'Created investor-ready materials, marketing systems, practical operating support, and a specialized calculator platform for distillery workflows.',
  },
  {
    title: 'AI Visibility OS™',
    challenge: 'Businesses needed a practical way to understand how AI systems evaluate, understand, and recommend them.',
    solution: 'Beth developed AI Visibility OS™ to assess entity clarity, AI discoverability, authority signals, content visibility, and recommendation readiness.',
    outcome: 'The platform produces structured AI visibility assessments with prioritized recommendations businesses can act on.',
  },
]

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <section className="relative bg-cloud overflow-hidden py-20 md:py-28">

        {/* Subtle background: fine navy grid, no animations */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0 L0 0 0 48" fill="none" stroke="rgba(11,31,51,0.05)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)"/>
          </svg>
        </div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: Headline, subheadline, copy, CTAs ── */}
            <div>
              <h1 className="font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight mb-5">
                Get Found. Get Understood. Get Recommended by AI.
              </h1>
              <p className="text-xl md:text-2xl font-heading font-medium text-graphite leading-snug mb-5">
                When customers ask AI who to call, will your business come up?
              </p>
              <p className="text-base md:text-lg text-graphite/70 leading-relaxed mb-8">
                Beth Aden AI helps businesses become visible, understandable, and recommendable
                across AI search, answer engines, and automated decision systems.
              </p>
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
            </div>

            {/* ── Right: AI Visibility Audit Snapshot mock card (desktop only) ── */}
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-[340px] rounded-2xl bg-navy border border-teal/20 p-6 shadow-[0_8px_32px_rgba(0,184,174,0.12),0_4px_16px_rgba(11,31,51,0.15)]">

                {/* Card header */}
                <div className="pb-4 mb-5 border-b border-white/[0.08]">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                    What AI Finds
                  </p>
                  <p className="font-heading font-semibold text-sm text-white leading-snug">
                    Your Business Through AI&apos;s Eyes
                  </p>
                </div>

                {/* Metric rows */}
                <div className="space-y-4 mb-5">
                  {(
                    [
                      { label: 'Competitors show up — you don\'t', pct: 18 },
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

                {/* Priority Gaps row */}
                <div className="flex items-center justify-between py-3 border-t border-white/[0.08] mb-4">
                  <span className="text-[11px] text-silver/70">Issues Found</span>
                  <span className="text-[10px] font-heading font-semibold text-gold bg-gold/[0.12] px-2 py-0.5 rounded">
                    5 identified
                  </span>
                </div>

                {/* Footer note */}
                <p className="text-[11px] text-silver/40 leading-relaxed">
                  Most businesses don&apos;t know this gap exists.
                </p>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Trust / Credibility ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Why It Matters Who You Work With</SectionLabel>

            <div className="space-y-5 text-base text-graphite leading-relaxed">
              <p>
                AI visibility is a new discipline. Most businesses haven&rsquo;t heard of it yet.
                Most consultants who say they offer it are applying old SEO playbooks to a
                fundamentally different system.
              </p>
              <p>
                Beth Aden AI was built specifically to address AI visibility, AI strategy, and AI
                implementation for small businesses — not as an add-on to traditional marketing
                services, but as a focused practice built around how AI search actually works.
              </p>
              <p>
                Every methodology, every framework, and every audit deliverable at Beth Aden AI is
                built around one question: what does it actually take for a business like yours to
                show up, and be recommended, in AI-powered search?
              </p>
            </div>

            {/* Trust signal */}
            <div className="mt-8 pl-6 border-l-4 border-gold">
              <p className="text-base text-graphite leading-relaxed">
                Beth runs AI-first workflows across her own business operations. The tools and
                strategies she recommends are the same tools and systems she uses herself. This
                practice was built through direct implementation, not repurposed marketing theory.
              </p>
            </div>

            <p className="mt-6 text-base font-heading font-semibold text-navy">
              Straightforward expertise. No hype. No inflated promises. Just clear strategy and
              practical implementation.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: The AI Search Shift ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>The Shift Is Already Here</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-6">
              Your Customers Are Using AI to Find Businesses Like Yours
            </h2>

            <div className="space-y-5 text-base text-graphite leading-relaxed">
              <p>
                Something changed in the way people find service providers — and it happened faster
                than most businesses noticed.
              </p>
              <p>
                ChatGPT, Perplexity, Google AI Overviews, and a growing list of AI-powered tools
                are now part of how people search. Not occasionally. Regularly. They describe what
                they need in plain language, and AI gives them a recommendation. A name. A business.
                Someone to call.
              </p>
              <p>
                The customers who search this way are often the most decisive ones. They&rsquo;re
                not scanning page after page of results. They&rsquo;re asking a specific question
                and acting on the first good answer they receive.
              </p>
              <p>
                Here&rsquo;s what most business owners don&rsquo;t realize: being recommended by AI
                isn&rsquo;t automatic, and it isn&rsquo;t random. AI systems evaluate businesses
                using specific signals — structured data, authoritative content, consistent entity
                information, and credible digital presence. Businesses that send those signals get
                recommended. Businesses that don&rsquo;t, don&rsquo;t appear at all.
              </p>
              <p>
                This isn&rsquo;t a technology story. It&rsquo;s a visibility story.
              </p>
              <p>
                The businesses showing up in AI recommendations today didn&rsquo;t get there by
                accident. They got there because their digital presence gave AI systems enough
                clear, reliable information to make a recommendation with confidence.
              </p>
              <p>
                The ones that aren&rsquo;t showing up — most of them — aren&rsquo;t invisible
                because they&rsquo;re bad businesses. They&rsquo;re invisible because AI
                doesn&rsquo;t have what it needs to recommend them.
              </p>
              <p className="font-heading font-semibold text-navy">
                That&rsquo;s a solvable problem. But it starts with knowing where you stand.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: What Is AI Visibility? ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>Understanding the Basics</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-6">
              What Is AI Visibility — and Why Does Your Business Need It?
            </h2>

            <div className="space-y-5 text-base text-graphite leading-relaxed">
              <p>
                AI visibility is the degree to which AI-powered systems can find your business,
                understand what it does, and confidently recommend it to the people asking.
              </p>
              <p>
                It&rsquo;s different from website traffic. It&rsquo;s different from social media
                reach. It&rsquo;s different from your Google ranking — though all of those things
                can contribute to it.
              </p>
              <p>
                When someone asks ChatGPT &ldquo;who&rsquo;s the best accountant near me?&rdquo;
                or asks Perplexity &ldquo;what&rsquo;s a good AI strategy consultant for small
                business?&rdquo; — the answer doesn&rsquo;t come from whoever spent the most on
                ads, or whoever has the most followers. It comes from whichever business AI systems
                have the most complete, consistent, and credible information about.
              </p>
              <p>
                That information — the sum of everything AI can find, verify, and trust about your
                business — is your AI visibility.
              </p>
              <p>
                Businesses with high AI visibility get recommended. Businesses with low AI
                visibility don&rsquo;t appear, regardless of how good they are.
              </p>
            </div>

            <PullStatement
              quote="AI doesn&rsquo;t recommend the loudest business. It recommends the clearest one."
              className="mt-8"
            />

            <div className="mt-6">
              <Link
                href="/resources/what-is-ai-visibility"
                className="text-teal font-heading font-semibold text-sm hover:text-navy transition-colors inline-flex items-center gap-1.5"
              >
                Read: What Is AI Visibility? <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: Core Services Overview ── */}
      <Section background="white">
        <Container>
          <SectionLabel>How Beth Aden AI Can Help</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-4">
            Three Ways to Build Your AI Visibility
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Most businesses need to move through three phases: understand where they stand, build a
            plan to improve it, and implement that plan. Each service at Beth Aden AI addresses one
            of those phases — and they&rsquo;re designed to work together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: Why Beth Aden AI ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>The Approach</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-4">
            What You Can Expect Working with Beth Aden AI
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            There&rsquo;s no shortage of people claiming expertise in AI right now. Here&rsquo;s
            what working with Beth Aden AI actually looks like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-14">
            {differentiators.map((col) => (
              <div key={col.title} className="border-t-2 border-teal pt-6">
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">{col.title}</h3>
                <p className="text-base text-graphite leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>

          {/* About Beth — abbreviated */}
          <div className="border-t border-silver pt-10 max-w-2xl">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-4">
              About Beth
            </p>
            <p className="text-base text-graphite leading-relaxed">
              Beth Aden is an AI visibility strategist who works at the intersection of business
              operations, systems thinking, and practical AI implementation. Her focus is helping
              business owners understand what AI systems actually see when they look at their
              business — and building the specific changes that improve it.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-1.5 text-teal font-heading font-semibold text-sm hover:text-navy transition-colors"
            >
              More about Beth <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: Meet Beth Aden ── */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <SectionLabel>Meet Beth Aden</SectionLabel>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-5">
                AI strategist, systems builder, and founder of Beth Aden AI.
              </h2>
              <p className="text-base text-graphite leading-relaxed mb-8">
                Beth helps small businesses become visible, understandable, and recommendable in an AI-first world. Her work focuses on helping business owners understand how AI search evaluates companies, where visibility gaps exist, and what practical steps create measurable improvements.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                Learn More About Beth
              </Link>
            </div>
            {/* Right: Headshot */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/beth-aden-ai-headshot.png"
                alt="Beth Aden, AI Visibility Strategist and founder of Beth Aden AI"
                width={480}
                height={560}
                className="rounded-2xl border border-silver shadow-[0_8px_32px_rgba(11,31,51,0.12)] object-cover w-full max-w-[400px]"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7b: Founder Authority ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>Founder Authority</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-2">
            Why Businesses Work With Beth Aden
          </h2>
          <div className="w-10 h-[2px] bg-gold/60 mb-6" aria-hidden="true" />
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            Beth Aden helps business owners understand, adopt, and implement AI in practical ways
            that improve visibility, operations, and execution. Her work combines AI strategy,
            workflow systems, AI visibility, and real-world business experience to help organizations
            move from confusion to confident action.
          </p>

          {/* ── 5-card authority grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">

            {/* Card 1 — AI Visibility Strategist (proprietary frameworks — gold indicator) */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-7 h-[3px] bg-teal mt-1 flex-none" />
                <span className="text-[9px] font-heading font-semibold uppercase tracking-[0.14em] text-gold border border-gold/30 rounded px-1.5 py-0.5 leading-none flex-none ml-3">
                  Framework
                </span>
              </div>
              <h3 className="font-heading font-semibold text-base text-navy mb-2 leading-snug">
                AI Visibility Strategist
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Creator of the Beth Aden AI Visibility Framework
                <span className="text-gold">™</span> and AI Visibility OS
                <span className="text-gold">™</span>.
              </p>
            </div>

            {/* Card 2 — AI Operations Strategist */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
              <div className="w-7 h-[3px] bg-teal mb-4" />
              <h3 className="font-heading font-semibold text-base text-navy mb-2 leading-snug">
                AI Operations Strategist
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Helps businesses turn AI from a concept into practical daily execution.
              </p>
            </div>

            {/* Card 3 — Custom AI Systems Builder */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
              <div className="w-7 h-[3px] bg-teal mb-4" />
              <h3 className="font-heading font-semibold text-base text-navy mb-2 leading-snug">
                Custom AI Systems Builder
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Designs custom GPTs, AI assistants, workflow systems, and operational frameworks.
              </p>
            </div>

            {/* Card 4 — AI Enablement Advisor */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
              <div className="w-7 h-[3px] bg-teal mb-4" />
              <h3 className="font-heading font-semibold text-base text-navy mb-2 leading-snug">
                AI Enablement Advisor
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Translates complex AI concepts into plain-English processes teams can actually use.
              </p>
            </div>

            {/* Card 5 — Business Operator First */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col">
              <div className="w-7 h-[3px] bg-teal mb-4" />
              <h3 className="font-heading font-semibold text-base text-navy mb-2 leading-snug">
                Business Operator First
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Built from hands-on business experience, not theory, hype, or trend-chasing.
              </p>
            </div>

          </div>

          {/* ── Proof bar ── */}
          <div className="border-t border-graphite/10 pt-8">
          <div className="border-l-4 border-gold pl-6 py-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {(
                [
                  'AI Visibility OS™ Creator',
                  'Custom GPT Builder',
                  'AI Operations Strategist',
                  'AI Enablement Advisor',
                  'Speaker & Educator',
                ] as string[]
              ).map((item, i, arr) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-sm font-heading font-semibold text-navy">{item}</span>
                  {i < arr.length - 1 && (
                    <span className="text-graphite/30 select-none" aria-hidden="true">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>

        </Container>
      </Section>

      {/* ── Proof & Results ── */}
      <Section background="white">
        <Container>
          <SectionLabel>Proof &amp; Results</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-2">
            Built Systems. Real Work. Practical AI Adoption.
          </h2>
          <div className="w-10 h-[2px] bg-gold/60 mb-6" aria-hidden="true" />
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-12">
            Beth Aden AI is built from hands-on implementation — not theory. From custom AI tools
            and business workflows to visibility audits, training, and real client support, the work
            is grounded in systems people can actually use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {proofColumns.map((col) => (
              <div key={col.title} className="border-t-2 border-gold pt-5">
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-gold mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-graphite leading-relaxed">
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-teal mt-2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Client Feedback ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>Client Feedback</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-10">
            What Clients Say About Working With Beth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-cloud rounded-xl p-6 border border-silver shadow-sm flex flex-col">
                <span className="text-3xl font-heading text-gold/60 leading-none mb-3 select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="text-sm text-graphite leading-relaxed flex-grow mb-5">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-silver pt-4 mt-auto">
                  <p className="font-heading font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-teal mt-0.5">{t.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Selected Work ── */}
      <Section background="white">
        <Container>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-10">
            AI Systems Built for Real Business Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="bg-cloud rounded-xl p-6 md:p-8 border border-silver shadow-sm">
                <h3 className="font-heading font-semibold text-lg text-navy mb-5 pb-4 border-b border-silver">
                  {cs.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-1.5">
                      Challenge
                    </p>
                    <p className="text-sm text-graphite leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm text-graphite leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.15em] text-gold mb-1.5">
                      Outcome
                    </p>
                    <p className="text-sm text-graphite leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: Audit Introduction ── */}
      <Section background="teal">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>The Right Starting Point</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-6">
              Not Sure Where You Stand? That&rsquo;s Exactly What the Audit Is For.
            </h2>

            <div className="space-y-5 text-base text-graphite leading-relaxed">
              <p>
                Most business owners who come to Beth Aden AI start with the same situation: they
                know AI search is changing things, they&rsquo;re not sure what it means for their
                specific business, and they don&rsquo;t know what to do first.
              </p>
              <p>
                The AI Visibility Audit answers all three of those questions.
              </p>
              <p>
                It starts with a thorough assessment of your business&rsquo;s current AI visibility
                across the platforms your customers are using — ChatGPT, Perplexity, Google AI
                Overviews, and others. It documents exactly how AI systems see your business today:
                what information they have, what they&rsquo;re missing, what they&rsquo;re getting
                wrong.
              </p>
              <p>
                From that assessment, you receive a written report with a gap analysis and a
                prioritized set of recommendations — organized by impact, written in plain language,
                and designed to give you a clear path forward regardless of your technical
                background.
              </p>
              <p>
                You&rsquo;ll know where you stand. You&rsquo;ll know what matters most. And
                you&rsquo;ll have a documented plan for what to do next.
              </p>
            </div>

            <PullStatement
              quote="The audit isn&rsquo;t a starting point because it&rsquo;s the cheapest option. It&rsquo;s a starting point because everything else — strategy, implementation, content — works better when it&rsquo;s built on accurate information."
              className="mt-8"
            />

            <div className="mt-8">
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                Get Your AI Visibility Audit <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: Process Overview ── */}
      <Section background="white">
        <Container>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-4">
            A Clear Path from Invisible to Recommended
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-12">
            Working with Beth Aden AI follows a consistent process built around one principle:
            every action should be grounded in accurate information about your specific business.
            Here&rsquo;s how that works in practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-10 mb-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="text-4xl font-heading font-semibold text-teal/25 leading-none mb-3" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">{step.title}</h3>
                <p className="text-base text-graphite leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-silver pt-8 max-w-2xl">
            <p className="text-base text-graphite leading-relaxed mb-6">
              Not every business needs all four phases at once. Some start with the audit and handle
              implementation on their own. Others move from audit to strategy to implementation in
              sequence. The path is flexible — the starting point is not.
            </p>
            <Link
              href="/services/ai-visibility-audit"
              className="inline-flex items-center gap-1.5 text-teal font-heading font-semibold text-sm hover:text-navy transition-colors"
            >
              Start with an AI Visibility Audit <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9: AI Visibility Library Preview ── */}
      <Section background="white">
        <Container>
          <SectionLabel>From the AI Visibility Library</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-4">
            Resources to Help You Understand AI Search
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The AI Visibility Library is where Beth Aden AI publishes clear, practical resources on
            AI visibility, GEO, AEO, and AI strategy for small businesses. No technical jargon. No
            recycled marketing content. Just straightforward explanations of what&rsquo;s changing
            and what it means for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {libraryArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-teal font-heading font-semibold text-sm hover:text-navy transition-colors"
            >
              Visit the AI Visibility Library <span aria-hidden="true">→</span>
            </Link>
            <span className="hidden sm:block w-px h-4 bg-silver flex-shrink-0" aria-hidden="true" />
            <Link
              href="/resources/ai-visibility-readiness-checklist"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-navy/70 hover:text-teal transition-colors group"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal/10 border border-teal/30 flex-shrink-0 group-hover:bg-teal/20 transition-colors" aria-hidden="true">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.2 5.5L8 1" stroke="#00B8AE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Free Checklist: AI Visibility Readiness
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 10: Speaking Preview ── */}
      <Section background="white">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Speaking</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mt-2 mb-6">
              Beth Aden on AI Visibility for Business Leaders
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-4">
              Beth speaks to business owners, associations, and professional groups on the topics of
              AI visibility, GEO, AEO, and the practical realities of AI search for small businesses.
              Her talks are designed for audiences who need to understand what AI search means for
              their business — not a technical deep-dive, but a clear, grounded explanation of
              what&rsquo;s changing and what to do about it.
            </p>
            <p className="text-base text-graphite leading-relaxed mb-8">
              If you&rsquo;re looking for a speaker who can make AI search feel accessible,
              relevant, and actionable for a business audience, this is the right fit.
            </p>
            <Link
              href="/speaking"
              className="inline-flex items-center gap-1.5 text-teal font-heading font-semibold text-sm hover:text-navy transition-colors"
            >
              See speaking topics and availability <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 11: FAQ ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy leading-tight mb-8">
              Common Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 12: Final CTA ── */}
      <CTABlock
        label="Ready to Find Out?"
        headline="Find Out Where Your Business Stands"
        body="AI search is already recommending businesses in your category to customers who are ready to buy. An AI Visibility Audit tells you whether your business is one of them — and if it&rsquo;s not, exactly what to change. No technical knowledge required. No long-term commitment. Just a clear, honest assessment of where your business stands in AI search and a prioritized plan for what to do next."
        primaryCTA={{ text: 'Get Your AI Visibility Audit', href: '/contact' }}
        secondaryCTA={{ text: 'See all services', href: '/services' }}
        microCopy="beth@bethadenai.com · Serving clients throughout the United States, virtually and remotely. Beth reviews every inquiry personally and responds within 1–2 business days."
        background="navy"
      />
    </>
  )
}
