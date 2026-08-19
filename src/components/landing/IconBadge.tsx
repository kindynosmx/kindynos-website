import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'bg-primary/10 text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-xl',
        className,
      )}
    >
      {children}
    </span>
  )
}
