import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { estimateReadingTime, toSlug } from '@/lib/utils'
import type { Article, ArticleFrontmatter } from '@/types'

/* ─────────────────────────────────────────────
   BETH ADEN AI — ARTICLE READER
   Reads MDX files from content/articles/
   Called only from server components / static generation.
   ───────────────────────────────────────────── */

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

/* ── Helpers ── */

function parseArticleFile(filePath: string, slug: string): Article {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const fm = data as ArticleFrontmatter

  return {
    ...fm,
    slug,
    readingTime: estimateReadingTime(content),
    content,
  }
}

function getArticleFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs.readdirSync(ARTICLES_DIR).filter((f) => /\.mdx?$/.test(f))
}

/* ── Public API ── */

/**
 * Return metadata for all published articles.
 * Sorted by date descending; falls back to title ascending when date is absent.
 * Content string is excluded — use getArticleBySlug() when you need it.
 */
export function getAllArticles(): Omit<Article, 'content'>[] {
  return getArticleFiles()
    .map((filename) => {
      const slug = toSlug(filename)
      const filePath = path.join(ARTICLES_DIR, filename)
      const { content: _content, ...meta } = parseArticleFile(filePath, slug)  // eslint-disable-line @typescript-eslint/no-unused-vars
      return meta
    })
    .filter((a) => a.status === 'published')
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a.date) return -1
      if (b.date) return 1
      return a.title.localeCompare(b.title)
    })
}

/**
 * Return a single published article (including content) by slug.
 * Tries both .mdx and .md extensions.
 * Returns null if not found or not published.
 */
export function getArticleBySlug(slug: string): Article | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`]

  for (const filename of candidates) {
    const filePath = path.join(ARTICLES_DIR, filename)
    if (fs.existsSync(filePath)) {
      const article = parseArticleFile(filePath, slug)
      if (article.status !== 'published') return null
      return article
    }
  }

  return null
}

/**
 * Return up to `limit` related articles for a given slug.
 *
 * Priority order:
 * 1. Slugs listed in the current article's `relatedSlugs` frontmatter field
 * 2. Other articles in the same category
 * 3. Any remaining published articles
 *
 * The current article is always excluded from results.
 */
export function getRelatedArticles(
  currentSlug: string,
  limit = 3
): Omit<Article, 'content'>[] {
  const current = getArticleBySlug(currentSlug)
  const all = getAllArticles()

  // Use explicitly defined related slugs if present
  if (current?.relatedSlugs?.length) {
    const bySlug = new Map(all.map((a) => [a.slug, a]))
    const related = current.relatedSlugs
      .map((s) => bySlug.get(s))
      .filter((a): a is Omit<Article, 'content'> => a !== undefined)
      .slice(0, limit)
    if (related.length > 0) return related
  }

  // Fallback: same category first, then others
  const sameCat = all.filter(
    (a) => a.slug !== currentSlug && a.category === current?.category
  )
  const otherCat = all.filter(
    (a) => a.slug !== currentSlug && a.category !== current?.category
  )

  return [...sameCat, ...otherCat].slice(0, limit)
}
