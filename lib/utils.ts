/* ─────────────────────────────────────────────
   BETH ADEN AI — UTILITY HELPERS
   ───────────────────────────────────────────── */

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx for this project's needs.
 *
 * @example
 * cn("base-class", isActive && "active", undefined)
 * // → "base-class active"
 */
export function cn(
  ...classes: (string | undefined | null | false | 0)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Estimate reading time in minutes based on word count.
 * Assumes 200 words per minute (conservative for business content).
 * Minimum 1 minute.
 *
 * @example
 * estimateReadingTime("The quick brown fox...") // → 1
 */
export function estimateReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200;
  const wordCount = content
    .replace(/[#*_`~\[\]()>|-]/g, "") // strip common markdown syntax
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

/**
 * Convert a filename or title string to a URL-safe slug.
 * Lowercases, replaces spaces and underscores with hyphens,
 * strips non-alphanumeric characters.
 *
 * @example
 * toSlug("What Is AI Visibility?") // → "what-is-ai-visibility"
 * toSlug("what-is-geo.mdx")        // → "what-is-geo"
 */
export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/\.mdx?$/, "")           // strip .md / .mdx extension
    .replace(/[\s_]+/g, "-")          // spaces and underscores → hyphens
    .replace(/[^a-z0-9-]/g, "")      // remove non-alphanumeric except hyphens
    .replace(/-+/g, "-")             // collapse consecutive hyphens
    .replace(/^-|-$/g, "");          // trim leading/trailing hyphens
}

/**
 * Format an ISO date string for display.
 * Returns a human-readable string like "June 2026".
 * Returns empty string if date is undefined (articles at launch have no visible dates).
 *
 * @example
 * formatDate("2026-06-01") // → "June 2026"
 * formatDate(undefined)    // → ""
 */
export function formatDate(date: string | undefined): string {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
