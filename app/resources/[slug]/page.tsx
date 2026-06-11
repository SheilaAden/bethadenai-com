import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { ArticleCard } from '@/components/global/ArticleCard'
import { Container } from '@/components/global/Container'
import { Section } from '@/components/global/Section'
import { SectionLabel } from '@/components/global/SectionLabel'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { formatDate } from '@/lib/utils'

/* ─────────────────────────────────────────────
   STATIC PARAMS
   Generates one static page per published article at build time.
   ───────────────────────────────────────────── */

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const title = article.metaTitle ?? `${article.title} — Beth Aden AI`
  const url = `https://bethadenai.com/resources/${article.slug}`

  return {
    title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle ?? article.title,
      description: article.description,
      url,
      type: 'article',
      ...(article.date && { publishedTime: article.date }),
      authors: ['Beth Aden'],
    },
  }
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const relatedArticles = getRelatedArticles(slug, 3)

  /* ── Structured Data ── */
  const articleSchema = {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `https://bethadenai.com/resources/${article.slug}`,
          },
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://bethadenai.com/resources/${article.slug}#article`,
        headline: article.title,
        description: article.description,
        url: `https://bethadenai.com/resources/${article.slug}`,
        ...(article.date && { datePublished: article.date }),
        author: { '@id': 'https://bethadenai.com/about#person' },
        publisher: { '@id': 'https://bethadenai.com/#organization' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://bethadenai.com/resources/${article.slug}`,
        },
      },
      ...(article.faqs?.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: article.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
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

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Article Header ── */}
      <section className="bg-graphite py-14 md:py-20">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'AI Visibility Library', href: '/resources' },
                { label: article.title },
              ]}
              light
            />
          </div>
          <div className="max-w-3xl">
            {/* Category + badge row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-2.5 py-0.5 border border-teal/30 text-teal text-xs font-heading font-semibold rounded-full">
                {article.category}
              </span>
              {article.badge && (
                <span className="px-2.5 py-0.5 bg-gold/15 text-silver text-xs font-heading font-semibold rounded-full">
                  {article.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta: author · reading time · date */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-silver/70">
              <span>Written by {article.author}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime} min read</span>
              {article.date && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          {/*
            Prose customization targets:
            - prose-headings: Montserrat SemiBold, navy
            - prose-p: graphite, relaxed leading
            - prose-a: teal, no underline by default
            - prose-strong: navy SemiBold (bold question items in FAQ section)
            - prose-hr: silver (section dividers in article body)
          */}
          <div className="max-w-3xl mx-auto">
            <div className="
              prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-semibold prose-headings:text-navy
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:leading-snug
              prose-p:text-graphite prose-p:leading-relaxed prose-p:my-4
              prose-a:text-teal prose-a:no-underline prose-a:font-medium
              hover:prose-a:underline
              prose-strong:text-navy prose-strong:font-semibold
              prose-hr:border-silver prose-hr:my-8
              prose-li:text-graphite
            ">
              <MDXRemote source={article.content} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Articles (only rendered when related exist) ── */}
      {relatedArticles.length > 0 && (
        <Section background="silver">
          <Container>
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy mt-2 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((related) => (
                <ArticleCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  description={related.description}
                  category={related.category}
                  badge={related.badge}
                  readingTime={related.readingTime}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Final CTA ── */}
      <Section background="navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel light>Ready to Go Beyond the Reading?</SectionLabel>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mt-2 mb-5">
              Find Out Where Your Business Actually Stands in AI Search
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-silver leading-relaxed">
                The AI Visibility Audit evaluates your specific business across ChatGPT, Perplexity,
                Google AI Overviews, and other platforms — documenting what AI systems currently find
                when they look at you, and delivering a prioritized plan for what to address first.
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
                Beth reviews every inquiry personally and responds within 1&#x2013;2 business days.
              </p>
              <Link
                href="/resources"
                className="text-sm text-silver/60 hover:text-silver underline underline-offset-2 transition-colors"
              >
                &#8592; Back to AI Visibility Library
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
