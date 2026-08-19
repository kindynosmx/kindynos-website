import type { ReactNode } from 'react'

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="bg-primary/10 text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-xl">
      {children}
    </span>
  )
}
