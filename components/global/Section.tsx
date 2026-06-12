import { cn } from '@/lib/utils'

type SectionBackground = 'white' | 'silver' | 'navy' | 'graphite' | 'teal'

interface SectionProps {
  children: React.ReactNode
  className?: string
  /** Defaults to 'white'. Controls background color. */
  background?: SectionBackground
  as?: React.ElementType
  id?: string
}

const backgroundClasses: Record<SectionBackground, string> = {
  white:    'bg-cloud',
  silver:   'bg-silver',
  navy:     'bg-navy',
  graphite: 'bg-graphite',
  teal:     'bg-teal/[0.10]',
}

/**
 * Full-width section wrapper with consistent vertical padding.
 * 64px mobile, 96px desktop — matching brand spacing tokens.
 */
export function Section({
  children,
  className,
  background = 'white',
  as: Tag = 'section',
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('py-16 md:py-24', backgroundClasses[background], className)}
    >
      {children}
    </Tag>
  )
}
