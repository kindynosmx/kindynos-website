import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      {...props}
      className={cn(
        'border-input bg-muted/50 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 min-h-32 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/30 aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive/40',
        className,
      )}
    />
  )
}

export { Textarea }
