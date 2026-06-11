/* ─────────────────────────────────────────────
   BETH ADEN AI — SHARED TYPESCRIPT TYPES
   ───────────────────────────────────────────── */

/* ── FAQ ── */

export interface FAQItem {
  /** The question text. Used in both the visible accordion and FAQPage schema. */
  question: string;
  /** The answer text. Plain string; no JSX. Used in both visible accordion and schema. */
  answer: string;
}

/* ── Navigation ── */

export interface NavItem {
  label: string;
  href: string;
  /** Optional children for dropdown menus (Phase 2). */
  children?: NavItem[];
}

/* ── CTA ── */

export type CTAVariant = "primary" | "secondary" | "text";

export interface CTA {
  text: string;
  href: string;
  variant?: CTAVariant;
  /** Opens in new tab. Default false. */
  external?: boolean;
}

/* ── Services ── */

export interface ServiceCard {
  title: string;
  /** One or two sentence description for hub and homepage cards. */
  description: string;
  href: string;
  /**
   * Optional badge label (e.g. "Most Popular", "Start Here").
   * Displayed as a small tag above the title.
   */
  badge?: string;
}

/* ── Articles ── */

/**
 * Frontmatter fields parsed from MDX files by gray-matter.
 * Every field here corresponds to a YAML key in the article's frontmatter block.
 */
export interface ArticleFrontmatter {
  title: string;
  /** Meta description — used in <meta name="description"> and OG tags. */
  description: string;
  /** Display category — e.g. "AI Visibility — Foundations", "GEO", "AEO", "AI Search" */
  category: string;
  author: string;
  /**
   * ISO 8601 date string (e.g. "2026-06-01").
   * Optional at launch — dates added to article cards in Phase 2.
   */
  date?: string;
  /**
   * Publication status. Only "published" articles are rendered.
   * Drafts are excluded from the article listing.
   */
  status: "published" | "draft";
  /**
   * Override for the HTML <title> tag if different from `title`.
   * If omitted, `title` is used.
   */
  metaTitle?: string;
  /**
   * Optional editorial badge shown on article cards.
   * e.g. "Start Here", "Most Relevant", "Key Concept"
   */
  badge?: string;
  /**
   * Slugs of related articles — used by getRelatedArticles() in lib/articles.ts.
   * If omitted, falls back to same-category articles.
   */
  relatedSlugs?: string[];
  /**
   * FAQ items for FAQPage JSON-LD schema.
   * Also rendered in the article body prose section when present.
   */
  faqs?: Array<{ question: string; answer: string }>;
}

/**
 * Article as returned by lib/articles.ts after frontmatter is parsed
 * and computed fields (slug, readingTime) are added.
 */
export interface Article extends ArticleFrontmatter {
  /** URL slug derived from the MDX filename (e.g. "what-is-ai-visibility"). */
  slug: string;
  /** Estimated reading time in minutes, computed from word count. */
  readingTime: number;
  /** Raw MDX string, passed to next-mdx-remote for rendering. */
  content: string;
}

/* ── Schema / Structured Data ── */

/**
 * Minimal shape for a JSON-LD script tag payload.
 * Components that render schema receive a typed object;
 * lib/schema.ts handles full schema generation.
 */
export interface SchemaPayload {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
