import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { Container } from '@/components/global/Container'
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

  // Content files sometimes bake a literal "— Beth Aden AI" suffix into
  // metaTitle. The root layout's title template already appends that
  // suffix to every page title, so any trailing copy here is stripped
  // to avoid a duplicated "— Beth Aden AI — Beth Aden AI" title.
  const rawTitle = article.metaTitle ?? article.title
  const title = rawTitle.replace(/\s*—\s*Beth Aden AI\s*$/, '')
  const url = `https://www.bethadenai.com/resources/${article.slug}`

  return {
    title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title,
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
            item: 'https://www.bethadenai.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Selected Work',
            item: 'https://www.bethadenai.com/work',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `https://www.bethadenai.com/resources/${article.slug}`,
          },
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://www.bethadenai.com/resources/${article.slug}#article`,
        headline: article.title,
        description: article.description,
        url: `https://www.bethadenai.com/resources/${article.slug}`,
        ...(article.date && { datePublished: article.date }),
        author: { '@id': 'https://www.bethadenai.com/about#person' },
        publisher: { '@id': 'https://www.bethadenai.com/#organization' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.bethadenai.com/resources/${article.slug}`,
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
        '@id': 'https://www.bethadenai.com/about#person',
        name: 'Beth Aden',
        jobTitle: 'Strategic Operations & AI Systems Partner',
        worksFor: { '@id': 'https://www.bethadenai.com/#organization' },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.bethadenai.com/#organization',
        name: 'Beth Aden',
        url: 'https://www.bethadenai.com',
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
                { label: 'Selected Work', href: '/work' },
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
    </>
  )
}
