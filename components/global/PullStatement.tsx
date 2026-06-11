import { cn } from '@/lib/utils'

interface PullStatementProps {
  /** The pull quote text. No quotation marks needed — added via CSS. */
  quote: string
  className?: string
  /** Light variant for use on dark (navy/graphite) backgrounds. */
  light?: boolean
}

/**
 * Typographic pull statement — a prominent quote used to anchor sections.
 * Renders with a gold left border per brand standards.
 *
 * Example: "AI doesn't recommend the loudest business. It recommends the clearest one."
 */
export function PullStatement({ quote, className, light = false }: PullStatementProps) {
  return (
    <blockquote
      className={cn(
        'border-l-4 border-gold pl-6 py-2 my-8',
        'text-xl md:text-2xl font-heading font-semibold leading-snug',
        light ? 'text-silver' : 'text-navy',
        className
      )}
    >
      {quote}
    </blockquote>
  )
}
