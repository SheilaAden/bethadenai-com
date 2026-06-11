import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ServiceCard as ServiceCardData } from '@/types'

interface ServiceCardProps extends ServiceCardData {
  className?: string
}

/**
 * Card component for displaying a service offering.
 * Used on the Services Hub page and Homepage services section.
 */
export function ServiceCard({ title, description, href, badge, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col bg-cloud border border-silver rounded-lg p-6 md:p-8',
        'hover:border-teal/40 transition-colors',
        className
      )}
    >
      {badge && (
        <span className="self-start mb-3 px-3 py-1 bg-teal/10 text-teal text-xs font-heading font-semibold uppercase tracking-wide rounded-full">
          {badge}
        </span>
      )}

      <h3 className="font-heading font-semibold text-xl text-navy leading-snug">
        {title}
      </h3>

      <p className="mt-3 text-base text-graphite leading-relaxed flex-grow">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-teal font-heading font-semibold text-sm hover:gap-3 transition-all"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
