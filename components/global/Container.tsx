import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Max-width wrapper with responsive horizontal padding.
 * Max: 1200px. Padding: 16px mobile → 24px md → 32px lg.
 */
export function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Tag>
  )
}
