import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '@/components/global/Hero'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { PullStatement } from '@/components/global/PullStatement'
import type { FAQItem } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'About Beth Aden — AI Visibility Strategist',
  description:
    'Learn about Beth Aden — AI visibility strategist helping business owners understand what AI sees when it looks at their business, and building the changes that make it better.',
  alternates: {
    canonical: 'https://bethadenai.com/about',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   Person + Organization + BreadcrumbList
   (FAQPage handled by FAQAccordion)
   ───────────────────────────────────────────── */

const aboutSchema = {
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
          name: 'About',
          item: 'https://bethadenai.com/about',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/about#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      worksFor: {
        '@id': 'https://bethadenai.com/#organization',
      },
      url: 'https://bethadenai.com/about',
      knowsAbout: [
        'AI Visibility',
        'Generative Engine Optimization',
        'Answer Engine Optimization',
        'AI Strategy for Small Business',
        'Schema Markup and Structured Data',
        'Entity Definition and Establishment',
        'AI Implementation',
        'Business Process Improvement',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://bethadenai.com/#organization',
      name: 'Beth Aden AI',
      url: 'https://bethadenai.com',
      founder: {
        '@id': 'https://bethadenai.com/about#person',
      },
    },
  ],
}

/* ─────────────────────────────────────────────
   PAGE DATA
   ───────────────────────────────────────────── */

const beliefs = [
  {
    heading: 'AI Is Infrastructure, Not a Trend',
    body: "I don't think AI search is something to wait out, or a phase that will pass and leave traditional marketing intact. I think it's infrastructure — the operating environment that businesses are now built inside of, whether they've acknowledged it or not. The businesses that recognize that early and build for it deliberately are in a fundamentally different position than the ones that don't.\n\nThat's not a fear tactic. It's a description of what's already true. AI is already recommending businesses to customers who are ready to buy. The only question is which businesses are showing up.",
  },
  {
    heading: "You Don't Need to Understand AI. You Need to Understand What AI Sees.",
    body: "I've never once had a client who needed to become an AI expert. That's not what this work requires. What it requires is understanding what AI systems see when they look at your business — the picture your digital presence paints, the signals it sends, the gaps it contains.\n\nThat's a much more specific question than \"how does AI work?\" And it's a question I can answer for you in concrete, documented terms. Once you see it clearly, the path forward is usually less complicated than you expected.",
  },
  {
    heading: 'Honest Assessment Is More Useful Than Comfortable Reassurance',
    body: "I'm not going to tell you your AI visibility is fine if it isn't. I'm not going to bury bad news under optimistic projections. If the audit reveals significant gaps, you'll hear that clearly — along with exactly what to do about them, in what order, and why.\n\nI operate this way because I've been on the receiving end of consulting that prioritized keeping a client comfortable over telling them what they needed to know. It's a waste of everyone's time. An honest picture of where you stand is worth more than a polished report that doesn't actually help.",
  },
  {
    heading: 'Clarity Is More Valuable Than Cleverness',
    body: "Every recommendation I give is designed to be understood and implemented by the person receiving it — not delegated to a technical team you may not have, or stored in a strategy document that never leaves a folder.\n\nIf I can't explain why a recommendation matters and what it will change, I don't make the recommendation. The measure of good strategy isn't how sophisticated it sounds. It's whether it actually gets executed.",
  },
  {
    heading: 'Small Businesses Deserve Real Guidance, Not Leftover Enterprise Frameworks',
    body: "Most of the AI consulting industry is still oriented toward enterprise clients. The frameworks, the pricing, the deliverables — they're built for organizations with dedicated technical teams, large budgets, and the bandwidth to absorb lengthy strategy documents.\n\nSmall business owners don't operate that way, and I didn't build Beth Aden AI for clients who do. The work here is built around businesses with real constraints: limited time, limited technical resources, and a genuine need to understand what to prioritize. That's a different kind of work. It requires a different kind of thinking.",
  },
]

const differentiators = [
  {
    heading: 'This Is the Only Thing I Do',
    body: "Beth Aden AI is a focused practice. AI Visibility Audits, AI Strategy, and AI Implementation — that's the full scope. I'm not a generalist marketing consultant who added AI to a service list. I'm not an agency distributing AI projects across a team with varying levels of expertise.\n\nEvery client engagement I take is in the domain I know best. That focus isn't a limitation — it's the point. Depth matters more than breadth when the discipline is this specific.",
  },
  {
    heading: 'I Work From Real Implementation, Not Theory',
    body: "I run AI-first workflows across my own business operations. The tools and frameworks I recommend are ones I use myself — tested against real platforms, refined through actual implementation, and built to work at the scale a small business operates at.\n\nThere's a meaningful difference between someone who understands AI conceptually and someone who has implemented it operationally and observed how AI systems respond to the changes. I sit in the second category. That difference shows up in the quality and specificity of what comes out of an audit.",
  },
  {
    heading: "You'll Understand What You're Getting and Why",
    body: "I don't operate as a black box. When I deliver an audit report, you'll understand every finding. When I make a recommendation, you'll understand why it matters, what it changes, and what to expect from it. When implementation happens, you'll know what was done.\n\nI work this way for one reason: a business owner who understands their AI visibility strategy is capable of maintaining it, building on it, and making better decisions with it. A business owner who was just handed a deliverable they don't understand is dependent on whoever made it. I prefer clients who understand what they've built.",
  },
  {
    heading: 'I Build for the Business In Front of Me',
    body: "No two audits look the same. No two strategies look the same. The findings from an AI Visibility Audit reflect the actual state of your specific business's digital presence — not a template applied to your category.\n\nThat's a more labor-intensive way to work. It's also the only way that produces recommendations worth following.",
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Do you work with businesses outside of a specific location?',
    answer:
      "Yes. Beth Aden AI works with small businesses across the United States. Most engagements are conducted remotely — the audit process, strategy sessions, and implementation guidance are all designed to work without an in-person requirement. If you're interested in working together, location isn't a barrier.",
  },
  {
    question: 'What size business is this right for?',
    answer:
      "Beth Aden AI works primarily with small businesses, service businesses, and independent operators — businesses with real customers, a real digital presence, and a real need to be found. There's no revenue threshold or employee count requirement. What matters is that your business relies on customers discovering and choosing you, and that you're ready to act on what an audit reveals.",
  },
  {
    question: 'Do I need any technical knowledge to work with you?',
    answer:
      "None. The audit, the strategy, and the implementation guidance are all designed for business owners — not technical teams. You won't be handed a report full of code or jargon. If something requires technical execution, I'll explain it in terms that make the purpose clear, and I'll walk you through what's involved. You'll understand what's being done and why without needing a background in web development or AI.",
  },
  {
    question: 'I already work with a marketing agency. Does that create a conflict?',
    answer:
      "Not in most cases. AI visibility work is specific enough that it rarely duplicates what a general marketing agency does. Most agencies aren't conducting AI platform testing, building entity definitions, or advising on schema markup in the context of AI recommendations. If there's overlap, I'll tell you directly before we start. In most cases, the work here complements an existing marketing relationship rather than competing with it.",
  },
  {
    question: "What's the best way to get started?",
    answer:
      "Start with an AI Visibility Audit. It's the right first step for almost every business I work with because it gives us both a documented, specific picture of where you stand — which makes every conversation after it more useful. Whether you move from the audit to strategy, to implementation, or choose to handle the recommendations yourself, you'll leave with something concrete and actionable.\n\nIf you're not sure whether an audit is the right fit, reach out through the contact page. I review every inquiry personally and will tell you honestly whether it's the right starting point for your situation.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="About Beth Aden"
        subheadline="I built Beth Aden AI because small businesses deserve honest, practical guidance on AI visibility — not repurposed enterprise frameworks, not hype, and not a 90-page report they'll never finish reading."
        body="If you've landed here, you're probably trying to figure out whether AI search is affecting your business, and whether this practice is the right fit to help you with it. I'll give you a straight answer to both questions on this page."
        primaryCTA={{ text: 'Get Your AI Visibility Audit', href: '/services/ai-visibility-audit' }}
        secondaryCTA={{ text: 'Book a Discovery Call', href: '/contact' }}
        background="silver"
        size="medium"
        rightContent={
          <Image
            src="/images/beth-aden-ai-headshot.png"
            alt="Beth Aden, AI Visibility Strategist and founder of Beth Aden AI"
            width={480}
            height={560}
            className="rounded-2xl border border-graphite/10 shadow-[0_8px_32px_rgba(11,31,51,0.12)] object-cover w-full max-w-[420px]"
            priority
          />
        }
        rightContentMobile
      />

      {/* Breadcrumb */}
      <div className="bg-cloud border-b border-silver py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
          />
        </Container>
      </div>

      {/* ── SECTION 2: Personal Story ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>How I Got Here</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-8">
              I Didn&#39;t Start in AI. I Started in Business.
            </h2>

            {/* Photo placeholder — replace with <Image> before launch */}
            {/* <div className="w-full max-w-sm mb-10 rounded-lg overflow-hidden">
              <Image src="/images/beth-aden-portrait.jpg" alt="Beth Aden" width={480} height={600} className="object-cover" />
            </div> */}

            <div className="space-y-6">
              <p className="text-base text-graphite leading-relaxed">
                Before I built Beth Aden AI, I was doing what a lot of small business owners do:
                running operations, managing multiple projects at once, trying to make everything work
                with a team that&#39;s smaller than the workload.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                I started using AI tools the way most people do — cautiously, then constantly. I started
                automating workflows. I started using AI to write, research, organize, and build. And
                somewhere in that process, something shifted. The way I ran my businesses changed. The
                speed changed. The capacity changed. The quality of the decisions I was able to make
                changed, because I had better information faster.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                I became genuinely interested in what was happening — not just in my own work, but in the
                underlying mechanics. How do AI systems decide what to recommend? How do they evaluate
                sources? What makes one business show up and another one disappear? I started testing
                those questions directly. I started running my own business through the same assessments
                I&#39;d eventually build into an audit framework — checking how AI platforms described my
                services, where my information was inconsistent, what signals I was sending that AI
                couldn&#39;t interpret.
              </p>
              <p className="text-base text-graphite leading-relaxed font-heading font-semibold text-navy">
                What I found surprised me.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                My businesses had decent websites. I had active profiles across the right platforms. I
                had strong reviews. And yet when I tested how major AI systems represented me, the
                picture was incomplete in ways I hadn&#39;t anticipated. The information was fragmented. The
                connections between my identity, my services, and my credibility weren&#39;t clear to the
                systems doing the evaluating. I was visible in the traditional sense — but I was nearly
                invisible in the AI sense.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                If that was happening to me — someone who spends a significant amount of time thinking
                about this — I knew it was happening at scale to businesses that hadn&#39;t considered it
                at all.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                That&#39;s when I started building the methodology that became the AI Visibility Audit. And
                that&#39;s when Beth Aden AI became a real practice rather than an internal experiment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: Philosophy ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>What I Believe</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            My Philosophy on AI, Business, and Getting Found
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            A few things I believe about AI visibility that shape how I work — and what you&#39;ll get
            when you work with me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className={`bg-cloud rounded-lg p-6 border border-silver shadow-sm ${
                  i === beliefs.length - 1 && beliefs.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-xl'
                    : ''
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="flex-shrink-0 w-1 h-full min-h-[1.25rem] bg-teal rounded-full mt-1"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-semibold text-base text-navy leading-snug">
                    {belief.heading}
                  </h3>
                </div>
                <div className="space-y-3 pl-4">
                  {belief.body.split('\n\n').map((para, j) => (
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

      {/* ── SECTION 4: Approach ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-6">
              Systems Thinking Applied to AI Visibility
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-6">
              I approach AI visibility as a systems problem. Not a checklist problem, not a keyword
              problem, not a &#34;post more content&#34; problem. A systems problem.
            </p>
            <div className="space-y-5 mb-12">
              <p className="text-base text-graphite leading-relaxed">
                Here&#39;s what I mean by that.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                AI systems don&#39;t evaluate your business in isolation. They assemble a picture of who
                you are from dozens of signals across the web — your website, your structured data, your
                directory listings, your content, your authoritative mentions, the consistency of your
                information across all of it. Every piece of that picture either contributes to or
                undermines AI&#39;s confidence in recommending you.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                A checklist approach to AI visibility will catch the obvious gaps. It will miss the
                systemic ones — the places where your signals contradict each other, where your entity
                definition is incomplete, where your content is answering the wrong questions or no
                questions at all.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                My audit methodology was built to evaluate your business&#39;s AI visibility as a complete
                system — not a collection of individual items to check off. That means the
                recommendations that come out of an audit are prioritized by systemic impact, not by how
                easy they are to fix. The things that matter most come first.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                That same thinking carries through to strategy and implementation. I don&#39;t build
                strategies that look good on paper and fall apart in execution. I build strategies that
                account for how a real business actually operates — with real resource constraints, real
                timelines, and real competing priorities.
              </p>
            </div>
          </div>

          {/* 3-column approach section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="border-t-2 border-teal pt-5">
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                The way I assess
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                I test directly. Every AI Visibility Audit includes hands-on evaluation across real AI
                platforms — not a theoretical review of best practices. I look at how AI systems
                actually represent your business, what they find, what they miss, and where the gaps
                are. The findings are documented in plain language with clear examples.
              </p>
            </div>
            <div className="border-t-2 border-teal pt-5">
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                The way I strategize
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Every recommendation is specific to your business. I don&#39;t apply a standard playbook.
                The gap analysis from your audit drives the strategy, which means the strategy reflects
                your actual situation — not a general template for businesses in your category.
              </p>
            </div>
            <div className="border-t-2 border-teal pt-5">
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                The way I implement
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                I guide implementation with enough explanation that you understand what&#39;s being done and
                why. I don&#39;t operate as a black box. When changes are made to your structured data, your
                content, or your digital presence, you&#39;ll understand what changed, what it&#39;s intended to
                do, and how to maintain it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: Why AI Visibility Matters ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>The Shift Worth Understanding</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-2">
              Why I Built a Practice Around This Specific Problem
            </h2>
            <div className="w-10 h-[2px] bg-gold/70 mb-7" aria-hidden="true" />
            <div className="space-y-6">
              <p className="text-base text-silver leading-relaxed">
                I want to be direct about something, because I think it&#39;s worth saying plainly.
              </p>
              <p className="text-base text-silver leading-relaxed">
                AI visibility is a new category. The terminology — GEO, AEO, AI search, entity
                recognition — is still unfamiliar to most business owners. The consultants claiming
                expertise in it are multiplying faster than the established methodology around it. And
                the businesses that most need it are the ones least likely to find their way to
                genuinely useful guidance.
              </p>
              <p className="text-base text-silver leading-relaxed">
                I built Beth Aden AI to address that gap specifically.
              </p>
              <p className="text-base text-silver leading-relaxed">
                Not because AI visibility is a hot trend worth capitalizing on. Because I&#39;ve seen, in
                my own businesses and in the businesses I&#39;ve evaluated, how significant the gap is
                between what business owners assume about their AI presence and what&#39;s actually true.
                That gap has real consequences — customers who go to competitors because AI didn&#39;t have
                what it needed to recommend the better option.
              </p>
              <PullStatement
                light
                quote="That's fixable. But only if businesses know the gap exists."
              />
              <p className="text-base text-silver leading-relaxed">
                The AI search environment is also still early enough that the businesses who establish
                clear, authoritative AI visibility now are in a meaningfully better position than the
                ones who wait. AI systems build trust in sources over time. That trust compounds.
                Getting started now isn&#39;t about panicking — it&#39;s about recognizing that early action
                here has an outsized return compared to early action on most other marketing
                investments.
              </p>
              <p className="text-base text-silver leading-relaxed">
                I&#39;m not in the business of creating urgency for its own sake. What I&#39;m saying is: if
                you&#39;ve been considering this and haven&#39;t started, the practical case for starting now
                is strong.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: Why Work With Beth ── */}
      <Section background="white">
        <Container>
          <SectionLabel>What&#39;s Different Here</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            Why Work with Beth Aden AI
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            There are consultants who can talk about AI. There are agencies that have added AI
            services to their menu. Here&#39;s what makes this practice different — and why I think it
            matters for the clients I work with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {differentiators.map((diff, i) => (
              <div key={i} className="border-t-2 border-teal pt-5">
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {diff.heading}
                </h3>
                <div className="space-y-3">
                  {diff.body.split('\n\n').map((para, j) => (
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

      {/* ── SECTION 7: FAQ ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Questions About Working Together</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-10">
              What People Usually Ask Before We Start
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5">
              Ready to Find Out Where Your Business Stands?
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-3">
              The best thing I can do for your business right now is give you accurate information
              about your AI visibility — what AI systems find when they look at you, what they miss,
              and what it would take to show up consistently in AI recommendations.
            </p>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-8">
              That&#39;s what the audit is for. It takes two weeks, requires minimal time on your end,
              and delivers a clear picture and a prioritized plan.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/services/ai-visibility-audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
              >
                Get Your AI Visibility Audit
              </Link>
              <p className="text-sm text-silver/70">
                I review every inquiry personally and respond within 1–2 business days.
              </p>
              <Link
                href="/contact"
                className="text-sm text-silver/60 hover:text-silver underline underline-offset-2 transition-colors"
              >
                → Book a discovery call instead
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
