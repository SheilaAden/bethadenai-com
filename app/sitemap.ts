import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'
import { selectedWork } from '@/lib/operations'

/* ─────────────────────────────────────────────
   SITEMAP.XML
   Next.js metadata route — generates /sitemap.xml at build time.

   Covers every static page plus one entry per published article
   in content/articles/. Utility pages (thank-you, api routes) are
   intentionally excluded — they have no standalone SEO/AI value
   and shouldn't be offered to crawlers as a destination.
   ───────────────────────────────────────────── */

const BASE_URL = 'https://www.bethadenai.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/resources/ai-visibility-readiness-checklist`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/products/ai-visibility-starter-kit`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/speaking`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${BASE_URL}/resources/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = selectedWork.map(({ slug }) => ({
    url: `${BASE_URL}/work/${slug}`,
  }))

  return [...staticRoutes, ...caseStudyRoutes, ...articleRoutes]
}
