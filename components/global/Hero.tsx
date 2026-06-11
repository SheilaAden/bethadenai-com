import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { SectionLabel } from '@/components/global/SectionLabel'
import { cn } from '@/lib/utils'
import type { CTA } from '@/types'

type HeroBackground = 'navy' | 'graphite' | 'silver' | 'white'

interface HeroProps {
  /** Optional small label above the headline (e.g. "AI Visibility Strategy") */
  label?: string
  headline: string
  subheadline?: string
  body?: string
  primaryCTA?: CTA
  secondaryCTA?: CTA
  background?: HeroBackground
  /** 'large' for homepage. 'medium' for inner pages. Default: 'medium'. */
  size?: 'large' | 'medium'
  /**
   * Optional right-side visual panel (desktop only by default).
   * When provided, hero renders a two-column grid: left = text, right = content.
   * Hidden below lg breakpoint by default — set rightContentMobile to show on mobile.
   */
  rightContent?: React.ReactNode
  /** When true, rightContent is visible on mobile and stacks below left content. */
  rightContentMobile?: boolean
}

const bgClasses: Record<HeroBackground, string> = {
  navy:     'bg-navy',
  graphite: 'bg-graphite',
  silver:   'bg-silver',
  white:    'bg-cloud',
}

const textClasses: Record<HeroBackground, { headline: string; body: string }> = {
  navy:     { headline: 'text-white',  body: 'text-silver' },
  graphite: { headline: 'text-white',  body: 'text-silver' },
  silver:   { headline: 'text-navy',   body: 'text-graphite' },
  white:    { headline: 'text-navy',   body: 'text-graphite' },
}

/**
 * Full-width hero section. Used at the top of every page.
 * Background defaults to 'navy'. Size defaults to 'medium' (inner pages).
 *
 * Pass `rightContent` to render a two-column layout on desktop with a visual
 * card or panel on the right side (hidden on mobile).
 */
export function Hero({
  label,
  headline,
  subheadline,
  body,
  primaryCTA,
  secondaryCTA,
  background = 'navy',
  size = 'medium',
  rightContent,
  rightContentMobile = false,
}: HeroProps) {
  const isDark = background === 'navy' || background === 'graphite'
  const text = textClasses[background]
  const paddingClass = size === 'large' ? 'py-24 md:py-32' : 'py-16 md:py-20'

  const leftContent = (
    <>
      {label && (
        <SectionLabel light={isDark} className="mb-4">
          {label}
        </SectionLabel>
      )}

      <h1
        className={cn(
          'font-heading font-semibold leading-tight',
          'text-4xl md:text-5xl',
          text.headline
        )}
      >
        {headline}
      </h1>

      {subheadline && (
        <p
          className={cn(
            'mt-4 text-xl md:text-2xl font-heading font-medium leading-snug',
            text.body
          )}
        >
          {subheadline}
        </p>
      )}

      {body && (
        <p className={cn('mt-5 text-base md:text-lg leading-relaxed', text.body)}>
          {body}
        </p>
      )}

      {(primaryCTA || secondaryCTA) && (
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {primaryCTA && (
            <Link
              href={primaryCTA.href}
              target={primaryCTA.external ? '_blank' : undefined}
              rel={primaryCTA.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center px-6 py-3 bg-teal text-white font-heading font-semibold text-sm rounded-md hover:bg-[#009991] transition-colors"
            >
              {primaryCTA.text}
            </Link>
          )}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              target={secondaryCTA.external ? '_blank' : undefined}
              rel={secondaryCTA.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold text-sm transition-colors border',
                isDark
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-navy/30 text-navy hover:bg-navy/5'
              )}
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      )}
    </>
  )

  return (
    <section className={cn(bgClasses[background], paddingClass)}>
      <Container>
        {rightContent ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>{leftContent}</div>
            <div className={cn(rightContentMobile ? 'flex justify-center lg:justify-end' : 'hidden lg:flex justify-end')}>{rightContent}</div>
          </div>
        ) : (
          <div className="max-w-3xl">{leftContent}</div>
        )}
      </Container>
    </section>
  )
}
