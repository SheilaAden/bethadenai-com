import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  /** Omit href for the current (last) item — renders as plain text, not a link. */
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  /** Light variant for dark (navy/graphite) backgrounds. Adjusts text and link colors for contrast. */
  light?: boolean
}

/**
 * Breadcrumb navigation with BreadcrumbList schema.
 * Last item is always the current page — no link, no schema `item` property.
 *
 * Example:  Home  ›  Services  ›  AI Visibility Audit
 */
export function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://bethadenai.com${item.href}` }
        : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className={cn('py-3', className)}>
        <ol
          className={cn(
            'flex flex-wrap items-center gap-1.5 text-sm',
            light ? 'text-silver/70' : 'text-graphite'
          )}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className="flex items-center gap-1.5">
                {isLast || !item.href ? (
                  <span
                    className={
                      isLast
                        ? light
                          ? 'text-white font-medium'
                          : 'text-navy font-medium'
                        : light
                          ? 'text-silver/70'
                          : 'text-graphite'
                    }
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'transition-colors',
                      light
                        ? 'text-silver/70 hover:text-white'
                        : 'text-graphite hover:text-teal'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'select-none',
                      light ? 'text-silver/30' : 'text-silver'
                    )}
                  >
                    &rsaquo;
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
