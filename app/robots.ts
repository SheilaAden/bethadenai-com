import type { MetadataRoute } from 'next'

/* ─────────────────────────────────────────────
   ROBOTS.TXT
   Next.js metadata route — generates /robots.txt at build time.

   Explicitly allows the major AI crawlers (in addition to the
   default wildcard allow) so it's unambiguous that Beth Aden AI
   wants to be crawled, read, and cited by AI answer engines —
   the exact outcome this business sells to clients.
   ───────────────────────────────────────────── */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI / answer-engine crawlers — named explicitly so there's no
      // ambiguity about intent, even though the wildcard rule above
      // already allows them.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
    ],
    sitemap: 'https://www.bethadenai.com/sitemap.xml',
    host: 'https://www.bethadenai.com',
  }
}
