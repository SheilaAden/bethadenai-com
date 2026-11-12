import type { MetadataRoute } from 'next'
import { selectedWork } from '@/lib/operations'

/* ─────────────────────────────────────────────
   SITEMAP.XML
   Next.js metadata route — generates /sitemap.xml at build time.

   Lists current public pages and case studies. Redirected routes
   and purchase fulfillment pages are intentionally excluded.
   ───────────────────────────────────────────── */

const BASE_URL = 'https://www.bethadenai.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/speaking`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const caseStudyRoutes: MetadataRoute.Sitemap = selectedWork.map(({ slug }) => ({
    url: `${BASE_URL}/work/${slug}`,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
