import type { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'AI Visibility Audit for Small Business',
  description:
    "Discover where your business stands in AI search. Beth Aden AI's audit shows how AI systems find, understand, and recommend you — and exactly what to fix.",
  alternates: {
    canonical: 'https://bethadenai.com/services/ai-visibility-audit',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   Service + BreadcrumbList (FAQPage via FAQAccordion)
   ───────────────────────────────────────────── */

const auditSchema = {
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
          name: 'AI Visibility Audit',
          item: 'https://bethadenai.com/services/ai-visibility-audit',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://bethadenai.com/services/ai-visibility-audit#service',
      name: 'AI Visibility Audit',
      provider: { '@id': 'https://bethadenai.com/#organization' },
      description:
        'A structured assessment of how AI-powered systems find, interpret, and represent your business across AI search platforms and answer engines — with a gap analysis and prioritized recommendations.',
      serviceType: 'AI Visibility Audit',
      areaServed: 'US',
      url: 'https://bethadenai.com/services/ai-visibility-audit',
      offers: {
        '@type': 'Offer',
        price: '497',
        priceCurrency: 'USD',
        description: 'Includes written report, gap analysis, prioritized recommendations, and 60-minute walkthrough session.',
      },
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

const auditAreas = [
  {
    title: 'Entity Presence and Clarity',
    body: 'AI systems work by recognizing entities — businesses, people, and organizations with clear, consistent digital identities. The audit assesses how well your business is defined as an entity across the web: whether AI can clearly identify who you are, what you do, and who you serve, and whether that definition is consistent across every place your business appears.',
  },
  {
    title: 'Structured Data and Schema Markup',
    body: 'Schema markup is the technical language that tells AI systems — and search engines — exactly what your website content means. The audit reviews whether your site uses schema markup, whether it\'s implemented correctly, and whether it communicates the specific signals AI answer engines use to evaluate business credibility and relevance.',
  },
  {
    title: 'Website Content Structure',
    body: "AI systems don't just scan for keywords — they assess whether your content answers questions clearly, authoritatively, and in a structure they can process. The audit evaluates how well your website content is organized, whether it directly answers the questions your customers are asking, and where it falls short of what AI systems expect from a credible source.",
  },
  {
    title: 'Cross-Source Consistency',
    body: "When AI systems evaluate a business, they cross-reference information from multiple sources: your website, directories, review platforms, social profiles, and mentions across the web. Inconsistencies in your name, description, services, or location send signals of unreliability. The audit maps your business's cross-source presence and identifies where inconsistencies are undermining your AI visibility.",
  },
  {
    title: 'Authoritative Mentions and Citations',
    body: 'AI systems give more weight to businesses that are mentioned, cited, or referenced by authoritative sources. The audit evaluates the quality and breadth of your business\'s external mentions and identifies opportunities to build the kind of authoritative presence that AI systems recognize and trust.',
  },
  {
    title: 'AI Platform Visibility Testing',
    body: 'The audit includes direct testing across major AI platforms — including ChatGPT, Perplexity, and Google AI Overviews — to document how each platform currently represents your business, what it gets right, what it gets wrong, and where you\'re absent entirely.',
  },
]

const deliverables = [
  {
    title: 'Written AI Visibility Report',
    body: 'A clear, structured document covering your full audit findings — organized by the six assessment areas and written in plain language. No technical jargon, no dense data dumps. Every finding is explained in terms of what it means for your business and why it matters.',
  },
  {
    title: 'Current Visibility Assessment',
    body: 'A documented snapshot of how your business currently appears across major AI platforms, including direct examples of how AI systems describe your business, what information they surface, and where you\'re missing from results entirely.',
  },
  {
    title: 'Gap Analysis',
    body: "A breakdown of the specific gaps between where your business is and where it needs to be to show up consistently in AI recommendations — organized by impact so you know what's costing you the most visibility right now.",
  },
  {
    title: 'Prioritized Recommendations',
    body: "A clear list of actions, ranked by priority, with enough context to understand what each one involves, why it matters, and what to tackle first. This isn't a list of vague suggestions — it's a roadmap you can act on.",
  },
  {
    title: '60-Minute Walkthrough Session',
    body: "A session with Beth to review your report together, answer your questions, and make sure you leave with a clear understanding of your findings and your next steps. You don't need to be technical — the session is designed for business owners, not IT teams.",
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Intake',
    body: "After you book your audit, you'll complete a brief intake form about your business: what you do, who you serve, which services you offer, and where you're located. This takes most clients 15–20 minutes. No technical knowledge is required.",
  },
  {
    number: '02',
    title: 'Assessment',
    body: "Beth conducts the full audit — reviewing your entity presence, structured data, website content, cross-source consistency, authoritative mentions, and direct AI platform testing. This is where the depth of the analysis happens. You don't need to be involved during this phase.",
  },
  {
    number: '03',
    title: 'Report',
    body: 'Beth documents the findings in your written AI Visibility Report, including your current visibility snapshot, gap analysis, and prioritized recommendations. Reports are written in plain language and organized for clarity, not volume.',
  },
  {
    number: '04',
    title: 'Walkthrough',
    body: "Beth walks you through your report in a 60-minute session. You'll review the findings together, discuss what they mean for your business specifically, and clarify next steps. This session is where the report becomes a plan.",
  },
]

const qualifiers = [
  {
    title: 'You rely on customers finding you',
    body: "If new customers discover your business through search, referrals, or online recommendations, AI visibility directly affects your pipeline. The audit tells you how much — and what to change.",
  },
  {
    title: "You've invested in your website or SEO but aren't sure if it translates to AI",
    body: "Traditional SEO work doesn't automatically carry over to AI search. If you've built a strong online presence and want to know how it performs in AI systems, the audit gives you that answer.",
  },
  {
    title: 'You want to act on real information, not guesswork',
    body: 'Many business owners are making decisions about their marketing based on what they think is true about AI search. The audit replaces assumptions with documented findings.',
  },
  {
    title: "You're building for the next five years, not just today",
    body: 'AI search is growing, not shrinking. Business owners who understand their AI visibility now are better positioned to build on it — before their competitors catch up.',
  },
]

const outcomes = [
  {
    title: 'A clear baseline',
    body: "You'll know, for the first time, exactly how AI systems currently see your business — what they find, what they miss, and what they get wrong. Most business owners have never seen their business from this perspective. It changes how you think about every digital decision you make.",
  },
  {
    title: 'A prioritized action plan',
    body: "You'll have a ranked list of specific improvements, organized by impact. Not a wish list — an actionable sequence that tells you what to address first, second, and third, and why the order matters.",
  },
  {
    title: 'A foundation for everything that follows',
    body: 'Whether your next step is an AI strategy engagement, content improvements, schema implementation, or something else, the audit findings give you a factual foundation for every decision. You won\'t be guessing. You\'ll be building on evidence.',
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'What is an AI visibility audit?',
    answer:
      "An AI visibility audit is a structured assessment of how AI-powered systems find, interpret, and represent your business across AI search platforms and answer engines. Tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini don't evaluate your business the way traditional search engines do — they draw from structured data, authoritative content, and consistent digital signals to form a picture of who your business is, what it does, and whether it's worth recommending. An AI visibility audit examines whether your business is showing up in those systems, what information they're finding, what they're missing, and where the gaps are. The result is a clear, documented picture of where your business stands in AI search — and a prioritized set of recommendations for what to address.",
  },
  {
    question: 'How is an AI visibility audit different from an SEO audit?',
    answer:
      "An SEO audit evaluates how well your website ranks in traditional search results on platforms like Google and Bing. An AI visibility audit evaluates something different: whether AI-powered tools like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business when users ask them questions. These two assessments look at different signals, different platforms, and different outcomes. Strong SEO doesn't guarantee AI visibility, and the reverse is also true — they're separate systems with different rules. An AI visibility audit focuses specifically on the signals that matter to AI answer engines, including entity recognition, structured data, content authority, and the consistency of your business information across the web.",
  },
  {
    question: "Why isn't my business showing up in AI search?",
    answer:
      "The most common reason businesses don't appear in AI search is that AI systems can't clearly identify who the business is, what it does, and who it serves. AI answer engines don't browse your website the way a person would — they look for structured, consistent, authoritative signals across multiple sources. If your business information is inconsistent, missing, or poorly organized, you won't be recommended — even if you have a well-designed website and strong reviews. Other contributing factors include missing schema markup, poorly structured content, and limited authoritative mentions from sources AI systems trust. An AI visibility audit identifies exactly which gaps apply to your business and what to address first.",
  },
  {
    question: 'How does ChatGPT decide what businesses to recommend?',
    answer:
      "ChatGPT recommends businesses based on the quality, consistency, and authority of information available about them across the web. AI systems like ChatGPT look for clear signals: structured data that defines what a business does, consistent descriptions across multiple authoritative sources, relevant content that demonstrates expertise, and a well-defined digital identity. ChatGPT doesn't visit your website in real time for most queries — it draws from training data and, in some versions, from live web retrieval — but in both cases, businesses that are consistently described in clear, trustworthy sources are more likely to be recommended. Businesses with incomplete or inconsistent digital footprints are routinely overlooked, regardless of how good they are in practice.",
  },
  {
    question: 'Do I need an AI visibility audit if I already have good SEO?',
    answer:
      "Yes — because SEO and AI visibility are evaluated by entirely different systems. Strong SEO means your website ranks well in traditional search. That's valuable, but it doesn't tell you whether ChatGPT, Perplexity, Google AI Overviews, or other AI answer engines can find and recommend your business. These platforms use different signals: entity recognition, structured data, cross-source consistency, and content authority — many of which aren't measured in a standard SEO audit. In practice, many businesses with strong SEO rankings are effectively invisible in AI search because they haven't addressed the requirements AI systems use to evaluate credibility and relevance. An AI visibility audit tells you exactly where those gaps are, regardless of how your traditional search performance looks.",
  },
  {
    question: 'What does an AI visibility audit include?',
    answer:
      "An AI visibility audit from Beth Aden AI covers how your business appears — or doesn't appear — across major AI platforms including ChatGPT, Perplexity, Google AI Overviews, and others. The audit examines your business's entity presence (how clearly AI systems understand who you are and what you do), your structured data and schema markup, the quality and structure of your website content, the consistency of your business information across the web, and the strength of your authoritative mentions. You receive a written report with a clear assessment of your current AI visibility, a breakdown of specific gaps, and a prioritized set of recommendations. The audit is designed to give you an honest, complete picture of where your business stands in AI search and a clear path forward.",
  },
  {
    question: "How long does an AI visibility audit take, and what's involved on my end?",
    answer:
      "An AI visibility audit typically takes one to two weeks from start to delivery of your report. Your involvement is minimal — you complete a brief intake form about your business, your services, and your customers. No technical knowledge is required on your part. Beth handles the research, analysis, and documentation. Once the audit is complete, you receive a written report and a walkthrough session to go through the findings together and answer your questions. The goal is to give you clear, actionable information without adding technical burden or complexity to your workload.",
  },
  {
    question: "What's the first step to improving my business's AI visibility?",
    answer:
      "The first step is understanding where you currently stand. Most business owners don't know whether AI systems can find them, what those systems are saying about their business, or what's preventing them from appearing in AI recommendations. Without that baseline, any improvement effort is guesswork. An AI visibility audit establishes that baseline — a clear, documented assessment of your current AI visibility across the platforms your customers are already using. From there, every decision about what to fix, what to build, and where to focus has a factual foundation behind it. If you're ready to find out where your business stands, that's exactly what the audit is designed to tell you.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AIVisibilityAuditPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />

      {/* ── SECTION 1: Hero ── */}
      <Hero
        headline="AI Visibility Audit"
        subheadline="Find out exactly where your business stands in AI search — and what it will take to show up when your customers are looking."
        primaryCTA={{ text: 'Get Your AI Visibility Audit', href: '/contact' }}
        secondaryCTA={{ text: 'See what\'s included ↓', href: '#included' }}
        background="navy"
        size="medium"
        rightContent={
          <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[0_8px_48px_rgba(0,0,0,0.45)]">
            <div className="pb-4 mb-5 border-b border-white/[0.08]">
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                What You&apos;ll Know
              </p>
              <p className="font-heading font-semibold text-sm text-white leading-snug">
                What the Audit Answers
              </p>
            </div>
            <div className="space-y-2.5 mb-5">
              {([
                'Why AI is overlooking your business',
                "What your competitors have that you don't",
                'Which gaps are costing you the most',
                'Exactly what to fix, in what order',
                '60-min walkthrough of every finding',
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
            <div className="flex items-center justify-between py-3 border-t border-white/[0.08] mb-3">
              <span className="text-[11px] text-silver/50">Timeline</span>
              <span className="text-[10px] font-heading font-semibold text-silver/40 bg-white/[0.06] px-2 py-0.5 rounded">1–2 weeks</span>
            </div>
            <p className="text-[11px] text-silver/40 leading-relaxed">
              Most businesses find gaps they didn&apos;t know existed.
            </p>
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
              { label: 'AI Visibility Audit' },
            ]}
          />
        </Container>
      </div>

      {/* ── SECTION 2: The Problem ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>The Shift Is Already Here</SectionLabel>
            <div className="space-y-5 mt-6">
              <p className="text-base md:text-lg text-silver leading-relaxed">
                Your customers are already using AI to find businesses like yours.
              </p>
              <p className="text-base text-silver leading-relaxed">
                ChatGPT, Perplexity, Google AI Overviews, Gemini, and dozens of other AI-powered tools are
                now part of how people search for services, compare options, and decide who to call. Many
                of those customers never type a query into Google. They ask AI. They describe what they
                need. They get a list of recommendations. And they call whoever appears at the top.
              </p>
              <p className="text-base text-silver leading-relaxed">
                The question isn&#39;t whether AI is recommending businesses in your category. It is.
              </p>
              <PullStatement
                light
                quote="The question is whether it's recommending yours."
              />
              <p className="text-base text-silver leading-relaxed">
                Most business owners don&#39;t know the answer. They assume that if they have a website,
                active social media, and decent Google reviews, they&#39;re covered. In most cases, they&#39;re
                not. AI systems evaluate businesses differently from traditional search engines — and the
                signals that made you visible on Google don&#39;t automatically make you visible to AI.
              </p>
              <p className="text-base text-silver leading-relaxed">
                That&#39;s not a technology problem. It&#39;s an information problem. And it&#39;s exactly what an
                AI Visibility Audit is designed to solve.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 3: What Is an AI Visibility Audit? ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6">
              What Is an AI Visibility Audit?
            </h2>
            <div className="space-y-5">
              <p className="text-base text-graphite leading-relaxed">
                An AI visibility audit is a structured assessment of how AI-powered systems find,
                interpret, and represent your business across AI search platforms and answer engines.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                Tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini don&#39;t evaluate your
                business the way traditional search engines do. They don&#39;t simply crawl your website and
                rank it. They draw from structured data, authoritative content, and consistent signals
                across the web to form a picture of who your business is, what it does, and whether it&#39;s
                worth recommending.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                An AI visibility audit examines that picture from the outside — the way AI systems
                actually see your business. It identifies what they&#39;re finding, what they&#39;re missing,
                what they&#39;re getting wrong, and what&#39;s preventing your business from showing up in AI
                recommendations.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The result is a clear, documented baseline. You&#39;ll know exactly where your business
                stands in AI search, which gaps are costing you visibility, and what to prioritize to
                change it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: Why This Matters Right Now ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-6">
              Why This Matters Right Now
            </h2>
            <div className="space-y-5">
              <p className="text-base md:text-lg font-heading font-semibold text-navy leading-relaxed">
                AI search isn&#39;t a future trend. It&#39;s a present reality.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                In the past two years, the way people find service providers has shifted in a way that has
                no historical parallel. AI answer engines have gone from a curiosity to a daily tool —
                used by millions of people to find recommendations, compare options, and make decisions.
                The businesses that show up in those recommendations are capturing customers who never
                visit a search results page at all.
              </p>
              <p className="text-base text-graphite leading-relaxed border-l-4 border-gold pl-6 py-1">
                The window to establish AI visibility early is open — but it&#39;s narrowing.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                AI systems build trust in sources over time. The businesses that establish clear,
                consistent, authoritative AI signals now will be harder to displace later. The ones that
                wait will be playing catch-up in a system that rewards early movers.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                You don&#39;t need to understand how AI works to benefit from being visible to it. You do
                need to know where you stand — because right now, most business owners are making
                decisions about their marketing, their website, and their digital presence without any
                information about how AI systems see them.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                An audit gives you that information. Everything else follows from it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: What the Audit Covers ── */}
      <Section background="silver" id="included">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-3">
            What the Audit Covers
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The AI Visibility Audit examines six areas of your business&#39;s digital presence that directly
            affect how AI systems find, understand, and recommend you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {auditAreas.map((area, i) => (
              <div key={i} className="bg-cloud rounded-lg p-6 border border-silver">
                <h3 className="font-heading font-semibold text-base text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: What You Receive ── */}
      <Section background="white">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-3">
            What You Receive
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            At the end of your AI Visibility Audit, you receive a written report and a live walkthrough
            session. Here&#39;s exactly what that includes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className={`rounded-lg p-6 border border-silver ${
                  i === deliverables.length - 1 && deliverables.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-lg'
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
                    <h3 className="font-heading font-semibold text-base text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-graphite leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: How It Works ── */}
      <Section background="graphite">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-3">
              How It Works
            </h2>
            <p className="text-base text-silver leading-relaxed mb-12">
              The process is straightforward. Your time investment is minimal. Here&#39;s what to expect
              from start to finish.
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
            <p className="text-sm text-silver/70 mt-10 border-t border-white/10 pt-6">
              The full process — from intake to walkthrough — typically takes one to two weeks.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: Who It's For ── */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
              This Audit Is Right for You If...
            </h2>
            <p className="text-base text-graphite leading-relaxed mb-10 max-w-2xl">
              The AI Visibility Audit is designed for business owners who are serious about understanding
              their position in AI search — and doing something about it. It&#39;s not an entry-level
              overview. It&#39;s a thorough assessment with a specific outcome.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {qualifiers.map((q, i) => (
                <div key={i} className="border-t-2 border-teal pt-5">
                  <h3 className="font-heading font-semibold text-base text-navy mb-3">
                    {q.title}
                  </h3>
                  <p className="text-sm text-graphite leading-relaxed">{q.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-silver rounded-lg p-6 max-w-2xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-graphite/60 mb-3">
                What This Audit Is Not
              </p>
              <p className="text-sm text-graphite leading-relaxed">
                This audit is not the right fit for businesses that aren&#39;t ready to act on findings, or
                for organizations looking for a one-size-fits-all checklist. The audit is thorough,
                specific, and designed to lead somewhere — if you&#39;re looking for a general overview, the{' '}
                <Link
                  href="/resources"
                  className="text-teal underline underline-offset-2 hover:text-navy transition-colors"
                >
                  AI Visibility Library
                </Link>{' '}
                is a better starting point.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 9: Outcomes ── */}
      <Section background="silver">
        <Container>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-4">
            After Your Audit, You&#39;ll Have...
          </h2>
          <p className="text-base text-graphite leading-relaxed mb-10 max-w-2xl">
            The value of an AI Visibility Audit isn&#39;t the report — it&#39;s what you&#39;re able to do because
            of it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/*
       * SECTION 10 — SOCIAL PROOF
       * Three client testimonial cards. Omitted from production render until
       * real testimonials are available. Do not publish with placeholder content.
       * When ready: add a `testimonials` data array and render a 3-column card grid here.
       */}

      {/* ── SECTION 11: Pricing ── */}
      <Section background="white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Investment
            </h2>

            {/* Price block */}
            <div className="bg-navy rounded-lg p-8 md:p-12 mb-8">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-teal mb-4">
                AI Visibility Audit
              </p>
              <p className="text-6xl md:text-7xl font-heading font-semibold text-white mb-3">
                $497
              </p>
              <p className="text-sm text-silver/70 mb-6">
                Flat fee &nbsp;·&nbsp; No hourly rates &nbsp;·&nbsp; No retainer required
              </p>
              <p className="text-sm text-silver leading-relaxed">
                Includes: written report, current visibility assessment, gap analysis, prioritized
                recommendations, and 60-minute walkthrough session.
              </p>
            </div>

            <div className="space-y-4 text-left mb-10">
              <p className="text-base text-graphite leading-relaxed">
                Most clients complete their audit in two weeks or less. The investment is designed to be
                accessible for small business owners — not priced for enterprise budgets.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                If you&#39;re weighing the cost against the alternative: every month your business is
                invisible to AI search is a month of recommendations that went to someone else. The audit
                tells you whether that&#39;s happening, and what to do about it.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
              >
                Get Your AI Visibility Audit
              </Link>
              <Link
                href="/contact"
                className="text-sm text-graphite hover:text-navy underline underline-offset-2 transition-colors"
              >
                Questions about the audit? → Contact Beth
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 12: FAQ ── */}
      <Section background="silver">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 13: Related Services ── */}
      <Section background="white">
        <Container>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-8">
            You Might Also Be Interested In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-silver rounded-lg p-6 border border-silver">
              <h3 className="font-heading font-semibold text-base text-navy mb-3">AI Strategy</h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                Once your audit is complete, AI Strategy takes the findings and builds a clear,
                prioritized roadmap — organized around your specific business, your goals, and the
                actions most likely to move the needle.
              </p>
              <Link
                href="/services/ai-strategy"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
              >
                Learn about AI Strategy
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-silver rounded-lg p-6 border border-silver">
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                AI Implementation
              </h3>
              <p className="text-sm text-graphite leading-relaxed mb-5">
                If you already know what needs to change and you&#39;re ready to act on it, AI
                Implementation turns your strategy into concrete improvements — with guidance at every
                step.
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

      {/* ── SECTION 14: Final CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-5">
              Find Out Where Your Business Stands
            </h2>
            <p className="text-base md:text-lg text-silver leading-relaxed mb-4">
              The AI Visibility Audit gives you a complete, honest picture of how AI systems see your
              business right now — what they find, what they miss, and what it will take to show up when
              your customers are looking.
            </p>
            <p className="text-base text-silver leading-relaxed mb-8">
              No technical knowledge required. No long-term commitment. Just clear information you can
              act on.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-heading font-semibold text-base rounded-md hover:bg-[#009991] transition-colors"
              >
                Get Your AI Visibility Audit
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
