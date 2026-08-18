'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="mx-auto flex max-w-xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-medium">Something went wrong</h1>
      <p className="text-muted-foreground leading-8">Please try again. If it keeps happening, email contact@kindynos.mx.</p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </main>
  )
}
