import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { cn } from '@/lib/utils'
import type { CTA } from '@/types'

type CTABlockBackground = 'navy' | 'silver' | 'white'

interface CTABlockProps {
  label?: string
  headline: string
  body?: string
  primaryCTA: CTA
  secondaryCTA?: CTA
  /** Micro-copy below the buttons (e.g. response time note). */
  microCopy?: string
  background?: CTABlockBackground
}

const bgClasses: Record<CTABlockBackground, string> = {
  navy:   'bg-navy',
  silver: 'bg-silver',
  white:  'bg-cloud',
}

const textClasses: Record<CTABlockBackground, { heading: string; body: string; micro: string }> = {
  navy:   { heading: 'text-white',    body: 'text-silver',   micro: 'text-silver/70' },
  silver: { heading: 'text-navy',     body: 'text-graphite', micro: 'text-graphite/70' },
  white:  { heading: 'text-navy',     body: 'text-graphite', micro: 'text-graphite/70' },
}

/**
 * Full-width CTA block. Used at the bottom of service pages and library pages.
 * Example: "Ready to find out where your business stands?"
 */
export function CTABlock({
  label,
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  microCopy,
  background = 'navy',
}: CTABlockProps) {
  const isDark = background === 'navy'
  const text = textClasses[background]

  return (
    <section className={cn(bgClasses[background], 'py-16 md:py-24')}>
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {label && (
            <SectionLabel light={isDark} className="mb-4">
              {label}
            </SectionLabel>
          )}

          <h2
            className={cn(
              'font-heading font-semibold text-3xl md:text-4xl leading-tight',
              text.heading
            )}
          >
            {headline}
          </h2>

          {body && (
            <p className={cn('mt-5 text-base md:text-lg leading-relaxed', text.body)}>
              {body}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              target={primaryCTA.external ? '_blank' : undefined}
              rel={primaryCTA.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
            >
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                target={secondaryCTA.external ? '_blank' : undefined}
                rel={secondaryCTA.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold text-sm transition-colors',
                  isDark
                    ? 'text-silver hover:text-white underline underline-offset-4'
                    : 'text-graphite hover:text-navy underline underline-offset-4'
                )}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>

          {microCopy && (
            <p className={cn('mt-4 text-sm', text.micro)}>{microCopy}</p>
          )}
        </div>
      </Container>
    </section>
  )
}
