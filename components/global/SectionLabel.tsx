import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  /** Light variant for use on dark backgrounds (navy/graphite). */
  light?: boolean
}

/**
 * Small uppercase label displayed above section headings.
 * Example: "Our Process" | "Start Here" | "About This Library"
 */
export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-heading font-semibold uppercase tracking-[0.15em] mb-3',
        light ? 'text-teal' : 'text-teal',
        className
      )}
    >
      {children}
    </p>
  )
}
