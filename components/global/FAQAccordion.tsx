'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/types'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

/**
 * Accessible FAQ accordion. Single item open at a time.
 *
 * SINGLE SOURCE OF TRUTH:
 * The same `items` array powers both the visible accordion and the
 * FAQPage JSON-LD schema. Never maintain two separate FAQ lists.
 *
 * Schema renders as a <script type="application/ld+json"> tag.
 */
export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQPage schema — same data, machine-readable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Visible accordion */}
      <div className={cn('divide-y divide-silver', className)} role="list">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const headingId = `faq-heading-${index}`
          const panelId = `faq-panel-${index}`

          return (
            <div key={index} className="py-5" role="listitem">
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between gap-4 text-left group"
              >
                <span className="font-heading font-semibold text-base md:text-lg text-navy group-hover:text-teal transition-colors">
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 mt-0.5 text-teal transition-transform duration-200"
                  aria-hidden="true"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="10" y1="4" x2="10" y2="16" />
                    <line x1="4" y1="10" x2="16" y2="10" />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                hidden={!isOpen}
                className="mt-4 pr-8"
              >
                <p className="text-base text-graphite leading-relaxed">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
