import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/global/Section'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { PullStatement } from '@/components/global/PullStatement'
import { ArticleCard } from '@/components/global/ArticleCard'
import { FAQAccordion } from '@/components/global/FAQAccordion'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import type { FAQItem } from '@/types'

/* ─────────────────────────────────────────────
   PAGE METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Visibility Library — Resources for Business Owners — Beth Aden AI',
  description:
    'Plain-language resources on AI visibility, GEO, AEO, and AI search for small businesses. Written by Beth Aden, AI visibility strategist. No jargon. No hype. Just useful.',
  alternates: {
    canonical: 'https://bethadenai.com/resources',
  },
}

/* ─────────────────────────────────────────────
   STRUCTURED DATA
   CollectionPage + ItemList + BreadcrumbList
   (FAQPage handled by FAQAccordion)
   ───────────────────────────────────────────── */

const librarySchema = {
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
          name: 'AI Visibility Library',
          item: 'https://bethadenai.com/resources',
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://bethadenai.com/resources#page',
      name: 'AI Visibility Library',
      description:
        'Plain-language resources on AI visibility, GEO, AEO, and AI search for small businesses. Written by Beth Aden, AI visibility strategist.',
      url: 'https://bethadenai.com/resources',
      author: {
        '@id': 'https://bethadenai.com/about#person',
      },
      publisher: {
        '@id': 'https://bethadenai.com/#organization',
      },
    },
    {
      /*
        UPDATE THIS SECTION every time a new article is published.
        Each ListItem must include: position, name, url, description.
        This schema is critical for AI discoverability — it allows AI systems
        to enumerate and index all library articles as part of Beth Aden AI's
        content entity.
      */
      '@type': 'ItemList',
      '@id': 'https://bethadenai.com/resources#article-list',
      name: 'AI Visibility Library Articles',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'What Is AI Visibility? A Plain-Language Guide for Business Owners',
          url: 'https://bethadenai.com/resources/what-is-ai-visibility',
          description:
            'AI visibility is the degree to which AI-powered systems can find your business, understand what it does, and confidently recommend it. This article defines the concept, explains how it relates to SEO, and describes what low AI visibility costs a business in practical terms.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'What Is Generative Engine Optimization (GEO)?',
          url: 'https://bethadenai.com/resources/what-is-geo',
          description:
            'GEO is the practice of building a digital presence that generative AI systems are willing and able to recommend. This article explains what GEO is, how generative AI systems evaluate sources, and what small businesses should focus on first.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'What Is Answer Engine Optimization (AEO)?',
          url: 'https://bethadenai.com/resources/what-is-aeo',
          description:
            'Answer engines respond to questions directly rather than returning a list of links. AEO is the discipline of making your business the answer they surface. This article explains what AEO is and what the practical requirements look like for a small business.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: "Why Isn't My Business Showing Up in AI Search?",
          url: 'https://bethadenai.com/resources/why-isnt-my-business-showing-up-in-ai-search',
          description:
            'The six most common reasons businesses are invisible in AI-powered search results — and what each reason means for how you approach fixing it.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'How Does ChatGPT Decide Which Businesses to Recommend?',
          url: 'https://bethadenai.com/resources/how-does-chatgpt-decide-which-businesses-to-recommend',
          description:
            'AI recommendation is not random. This article explains the signals and logic that lead AI systems like ChatGPT to recommend one business over another — and what that means for how you build your digital presence.',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://bethadenai.com/about#person',
      name: 'Beth Aden',
      jobTitle: 'AI Visibility Strategist',
      worksFor: { '@id': 'https://bethadenai.com/#organization' },
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

const featuredArticles = [
  {
    slug: 'what-is-ai-visibility',
    title: 'What Is AI Visibility? A Plain-Language Guide for Business Owners',
    description:
      "AI visibility is the degree to which AI-powered systems can find your business, understand what it does, and confidently recommend it. This article explains what AI visibility means in practical terms, how it differs from traditional SEO, and why the difference matters for businesses that rely on customers finding them. If you're new to this topic, this is the right place to start.",
    category: 'AI Visibility — Foundations',
    badge: 'Start Here',
  },
  {
    slug: 'why-isnt-my-business-showing-up-in-ai-search',
    title: "Why Isn't My Business Showing Up in AI Search?",
    description:
      "If you've searched for your own business in ChatGPT, Perplexity, or Google AI Overviews and found it missing, incomplete, or inaccurate — this article explains why. It covers the six most common reasons businesses are invisible to AI search and what each one means for how you approach improving your visibility. This is the article for business owners who have already noticed the gap.",
    category: 'AI Search',
    badge: 'Most Relevant',
  },
  {
    slug: 'what-is-geo',
    title: 'What Is Generative Engine Optimization (GEO)?',
    description:
      'Generative Engine Optimization is the practice of optimizing your business\'s digital presence so that generative AI tools — ChatGPT, Perplexity, Gemini, Google AI Overviews — are more likely to include and recommend you in their responses. This article explains what GEO is, how it differs from SEO, and what the practical implications are for small businesses.',
    category: 'GEO',
    badge: 'Key Concept',
  },
]

const categories = [
  {
    name: 'AEO',
    description: 'Articles on Answer Engine Optimization — the practice of making your business the answer when AI-powered tools respond to direct questions.',
    articles: [
      {
        slug: 'what-is-aeo',
        title: 'What Is Answer Engine Optimization (AEO)?',
        description:
          'Answer engines respond to questions directly rather than returning a list of links. AEO is the discipline of making your business the answer they surface. This article explains what AEO is, how answer engines decide what to include, and what the practical requirements look like for a small business.',
        category: 'AEO',
      },
    ],
  },
  {
    name: 'AI Search Explained',
    description: 'Articles that explain how AI search systems work — written for business owners who want to understand the mechanics, not just the vocabulary.',
    articles: [
      {
        slug: 'how-does-chatgpt-decide-which-businesses-to-recommend',
        title: 'How Does ChatGPT Decide Which Businesses to Recommend?',
        description:
          'AI recommendation is not random and not purely algorithmic in the traditional sense. This article explains the signals and logic that lead AI systems like ChatGPT to recommend one business over another — and what that means for how you build your digital presence.',
        category: 'AI Search',
      },
    ],
  },
]

const usagePaths = [
  {
    condition: "If you're new to AI visibility and don't know where to start:",
    body: "Begin with \"What Is AI Visibility?\" — it's the foundational article that establishes the vocabulary and context everything else in the library builds on. From there, \"Why Isn't My Business Showing Up in AI Search?\" will give you the most direct picture of how the concepts apply to your specific situation.",
    link: null,
  },
  {
    condition: "If you already know there's a gap and you want to understand it:",
    body: "Start with \"Why Isn't My Business Showing Up in AI Search?\" — it names the six most common reasons businesses are invisible to AI and maps each reason to a concrete gap. From there, \"How Does ChatGPT Decide Which Businesses to Recommend?\" gives you the mechanism-level explanation that makes the gap fully understandable.",
    link: null,
  },
  {
    condition: "If you're familiar with SEO and want to understand how AI search is different:",
    body: "Start with \"What Is GEO?\" or \"What Is AEO?\" — these articles explain the disciplines that address AI search specifically, and they're written to map the new concepts onto the SEO framework you already understand.",
    link: null,
  },
  {
    condition: "If you've read enough and you want to know where your business actually stands:",
    body: "The library explains the concepts. The AI Visibility Audit evaluates your specific business — documenting exactly what AI systems currently find when they look at you, and what's costing you recommendations. That's a different kind of answer than any article can provide.",
    link: { text: '→ Learn about the AI Visibility Audit', href: '/services/ai-visibility-audit' },
    highlight: true,
  },
]

const faqItems: FAQItem[] = [
  {
    question: 'Who writes the articles in the AI Visibility Library?',
    answer:
      "Every article in the library is written by Beth Aden — the founder and principal of Beth Aden AI. The library is not a content production operation. Articles are published when there's something accurate and useful to say on a topic, not on a production schedule. That approach means the library grows more slowly than some, but every article reflects Beth's actual knowledge and practice rather than content created to fill a calendar.",
  },
  {
    question: 'Is the library free to use?',
    answer:
      "Yes, entirely. The AI Visibility Library is a public resource — no email required, no paywall, no content upgrades that hold the useful part back. The articles are complete and free to read. If the library is useful and you decide you want Beth's help evaluating your specific business, that conversation starts with an inquiry.",
  },
  {
    question: 'How is the library different from general AI content I can find elsewhere?',
    answer:
      "Most AI content aimed at business owners is either too general to act on or too technical to translate into business decisions. The AI Visibility Library is written from the perspective of a working AI visibility strategist who also runs businesses — the articles are practical, specific, and calibrated to the questions business owners actually ask. The goal isn't to cover everything there is to say about AI. It's to provide clear, accurate answers to the specific questions that affect whether a small business shows up in AI-powered recommendations.",
  },
  {
    question: 'How often is new content added?',
    answer:
      "New articles are published when there's something accurate and genuinely useful to add. There is no fixed publishing schedule. As the AI search landscape evolves and new questions become important for business owners to understand, the library grows. Quality and accuracy are the criteria — not frequency.",
  },
  {
    question: 'Can I share or reference articles from the library?',
    answer:
      "Yes. Articles can be shared, linked to, and referenced freely. If you're quoting directly from an article, attribution to Beth Aden / Beth Aden AI is appreciated. The library is published to be useful — sharing it advances that purpose.",
  },
]

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ResourcesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(librarySchema) }}
      />

      {/* ── SECTION 1: Hero (no CTA — by design) ── */}
      <section className="bg-navy py-16 md:py-24">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'AI Visibility Library' },
              ]}
              light
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-5">
                AI Visibility Library
              </h1>
              <p className="text-xl text-silver leading-relaxed mb-4">
                Clear, practical resources on AI visibility, GEO, AEO, and AI search for small
                businesses.
              </p>
              <p className="text-base text-silver/80 leading-relaxed">
                The AI landscape moves fast and the explanations aimed at business owners are often
                either too technical to use or too vague to act on. The AI Visibility Library is
                built to close that gap — written in plain language, grounded in practical experience,
                and focused on what actually matters for businesses trying to show up in an AI-first
                search environment.
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 shadow-[0_8px_48px_rgba(0,0,0,0.45)]">
                <div className="pb-4 mb-5 border-b border-white/[0.08]">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-1.5">
                    Start Here
                  </p>
                  <p className="font-heading font-semibold text-sm text-white leading-snug">
                    Questions This Library Answers
                  </p>
                </div>
                <div className="space-y-3 mb-5">
                  {([
                    "Why isn't AI recommending my business?",
                    'How is GEO different from traditional SEO?',
                    'How does AI decide who to suggest?',
                    'What is AEO and do I need it?',
                  ] as string[]).map((question, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[10px] font-heading font-semibold text-teal/60 mt-0.5 w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-[11px] text-silver/70 leading-snug">{question}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/[0.08]">
                  <p className="text-[11px] text-silver/40 leading-relaxed">
                    Plain language. Written by Beth Aden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: What Is This Library? ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>About This Library</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-6">
              What You&#39;ll Find Here — and Why It Was Built
            </h2>
            <div className="space-y-5">
              <p className="text-base text-graphite leading-relaxed">
                The AI Visibility Library is the educational resource of Beth Aden AI. Every
                article here is written by Beth Aden — a working AI visibility strategist, not a
                content team — and focused on one goal: helping business owners understand what&#39;s
                happening in AI search, what it means for their specific situation, and what to do
                about it.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The library covers the concepts and disciplines that determine how AI-powered
                systems find, evaluate, and recommend businesses. That includes AI visibility as a
                whole, the emerging practices of GEO (Generative Engine Optimization) and AEO
                (Answer Engine Optimization), the mechanics of how AI systems evaluate sources and
                make recommendations, and the practical steps businesses can take to improve their
                position in an AI-first search environment.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                What you won&#39;t find here: inflated claims about AI, recycled content that
                rephrases what everyone else is already saying, or articles that explain concepts
                at length without telling you what to do with the explanation.
              </p>
              <p className="text-base text-graphite leading-relaxed">
                The goal of each article is the same: leave with an accurate picture of the topic,
                a clear sense of what it means for your business, and enough context to take the
                right next step.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-silver">
              <p className="text-sm text-graphite/60 italic">
                Written by Beth Aden. Published when there&#39;s something accurate and useful to say.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 2b: Free Checklist CTA ── */}
      <section className="bg-navy py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-teal mb-3">
                Free Resource
              </p>
              <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white leading-tight mb-4">
                AI Visibility Readiness Checklist™
              </h2>
              <p className="text-base text-silver/80 leading-relaxed mb-6">
                Find out how visible your business is to ChatGPT, Google AI, Perplexity, and other
                AI-powered search systems.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '25 AI Visibility readiness checks',
                  'Scoring guide',
                  '10 common visibility mistakes',
                  'Next-step recommendations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#00B8AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm text-silver leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/ai-visibility-readiness-checklist"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
              >
                Download the Free Checklist <span aria-hidden="true">→</span>
              </Link>
            </div>
            {/* Right: visual callout card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-8 shadow-[0_8px_48px_rgba(0,0,0,0.4)]">
                <p className="text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-gold mb-4">
                  AI Visibility Readiness Checklist™
                </p>
                <div className="space-y-3">
                  {[
                    { number: '01', label: 'Entity & Identity' },
                    { number: '02', label: 'Website Clarity' },
                    { number: '03', label: 'Structured Data' },
                    { number: '04', label: 'Cross-Platform Consistency' },
                    { number: '05', label: 'Authority Signals' },
                  ].map((row) => (
                    <div key={row.number} className="flex items-center gap-4 py-2.5 border-b border-white/[0.06] last:border-0">
                      <span className="text-[10px] font-heading font-semibold text-teal/50 w-5 flex-shrink-0">{row.number}</span>
                      <span className="text-sm text-silver/70">{row.label}</span>
                      <span className="ml-auto flex-shrink-0 w-4 h-4 rounded-sm border border-teal/30 bg-teal/10" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-silver/30 mt-6">25 checks · Free download · No account required</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Featured Articles ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            New to AI Visibility? These Are the Right Starting Points.
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            If you&#39;re not sure where to begin, start with the articles below. They cover the
            foundational concepts that everything else in the library builds on — and they&#39;re
            written to be useful whether you&#39;ve been thinking about AI visibility for months or
            encountered the term for the first time today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                description={article.description}
                category={article.category}
                badge={article.badge}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 4: All Articles by Category ── */}
      <Section background="white">
        <Container>
          <SectionLabel>Browse by Topic</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            More Articles
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-12">
            Additional articles organized by topic. Use the categories below to find resources
            relevant to your current questions.
          </p>

          {/*
            FUTURE: Add interactive category filter functionality when library reaches 10+ articles.
            Each ArticleCard already uses data-category via the `category` prop — no redesign needed.
            Add category filter buttons above this grid and toggle visibility with JavaScript.
          */}

          <div className="space-y-14">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-start gap-3 mb-6">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-graphite/70 leading-relaxed max-w-xl">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.articles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      slug={article.slug}
                      title={article.title}
                      description={article.description}
                      category={article.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 5: Why AI Visibility Matters ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel light>The Shift Worth Understanding</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-8">
              Why This Matters — and Why It Matters Now
            </h2>
            <div className="space-y-5">
              <p className="text-base text-silver leading-relaxed">
                The way customers find businesses is changing. Not hypothetically — actively, right
                now, in ways that are already affecting which businesses get found and which don&#39;t.
              </p>
              <p className="text-base text-silver leading-relaxed">
                ChatGPT, Perplexity, Google AI Overviews, and a growing list of AI-powered tools
                now answer the questions people used to type into a search bar. &#34;Who&#39;s the best
                accountant near me?&#34; &#34;What&#39;s a good marketing consultant for small business?&#34; &#34;Can
                you recommend a reliable HVAC contractor?&#34; These queries used to return a list of
                links. Now they return a recommendation — a specific business, a specific name, a
                specific answer.
              </p>
              <p className="text-base text-silver leading-relaxed">
                The businesses in those answers didn&#39;t get there by accident. They got there
                because their digital presence gave AI systems the clear, consistent, credible
                information those systems need to make a confident recommendation. The businesses
                that aren&#39;t in those answers aren&#39;t absent because they&#39;re inferior. They&#39;re absent
                because AI doesn&#39;t have what it needs to recommend them.
              </p>
              <p className="text-base text-silver leading-relaxed">
                That gap is real, it&#39;s measurable, and it&#39;s fixable. But it requires understanding a
                different set of requirements than the ones that drive traditional search rankings —
                which is exactly what the AI Visibility Library is here to explain.
              </p>
            </div>
            <div className="mt-10">
              <PullStatement quote="AI doesn't recommend the loudest business. It recommends the clearest one." light />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SECTION 6: How to Use This Library ── */}
      <Section background="silver">
        <Container>
          <SectionLabel>Getting the Most Out of This Resource</SectionLabel>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mt-2 mb-4">
            How to Use the AI Visibility Library
          </h2>
          <p className="text-base text-graphite leading-relaxed max-w-2xl mb-10">
            The library is designed to be useful regardless of where you&#39;re starting from.
            Here&#39;s a practical guide based on your situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {usagePaths.map((path, i) => (
              <div
                key={i}
                className={`rounded-lg p-6 ${
                  path.highlight
                    ? 'bg-navy border border-teal/30'
                    : 'bg-cloud border border-silver shadow-sm'
                }`}
              >
                <p
                  className={`text-xs font-heading font-semibold uppercase tracking-[0.12em] mb-3 ${
                    path.highlight ? 'text-teal' : 'text-graphite/60'
                  }`}
                >
                  {path.condition}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    path.highlight ? 'text-silver' : 'text-graphite'
                  }`}
                >
                  {path.body}
                </p>
                {path.link && (
                  <div className="mt-4">
                    <Link
                      href={path.link.href}
                      className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-teal hover:gap-3 transition-all duration-200"
                    >
                      {path.link.text}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SECTION 7: FAQ ── */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-navy mb-10">
              Questions About the Library
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* ── SECTION 8: Final CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel light>Ready to Go Beyond the Reading?</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-5">
              Understanding AI Visibility Is Step One. Knowing Where Your Business Stands Is Step
              Two.
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-silver leading-relaxed">
                The articles in this library explain how AI visibility works, what GEO and AEO mean
                in practice, and why some businesses show up in AI recommendations while others
                don&#39;t. That knowledge is useful. It helps you ask better questions, evaluate your
                options, and make more informed decisions.
              </p>
              <p className="text-base text-silver leading-relaxed">
                But reading about AI visibility and knowing where your specific business stands in
                AI search are two different things. The AI Visibility Audit answers the second
                question — with a documented, detailed assessment of how AI systems currently find,
                understand, and represent your business, and a prioritized plan for what to do
                about the gaps it finds.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/services/ai-visibility-audit"
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
                → See all services
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
