import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ArticleCardProps {
  slug: string
  title: string
  description: string
  category: string
  /** Optional editorial badge (e.g. "Start Here", "Most Relevant", "Key Concept") */
  badge?: string
  readingTime?: number
  className?: string
}

/**
 * Card component for displaying a library article.
 * Used on the AI Visibility Library homepage and article-related sections.
 * Publication dates intentionally omitted at launch — added in Phase 2.
 */
export function ArticleCard({
  slug,
  title,
  description,
  category,
  badge,
  readingTime,
  className,
}: ArticleCardProps) {
  const href = `/resources/${slug}`

  return (
    <article
      className={cn(
        'flex flex-col bg-cloud border border-silver rounded-lg p-6 md:p-8',
        'hover:border-teal/40 transition-colors',
        className
      )}
    >
      {/* Badges row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-2.5 py-0.5 border border-teal/30 text-teal text-xs font-heading font-semibold rounded-full">
          {category}
        </span>
        {badge && (
          <span className="px-2.5 py-0.5 bg-gold/15 text-graphite text-xs font-heading font-semibold rounded-full">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-heading font-semibold text-lg text-navy leading-snug">
        {title}
      </h3>

      <p className="mt-3 text-base text-graphite leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-teal font-heading font-semibold text-sm hover:gap-3 transition-all"
          aria-label={`Read article: ${title}`}
        >
          Read the article
          <span aria-hidden="true">→</span>
        </Link>
        {readingTime && (
          <span className="text-xs text-graphite/60">{readingTime} min read</span>
        )}
      </div>
    </article>
  )
}
