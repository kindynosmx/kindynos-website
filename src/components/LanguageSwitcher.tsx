'use client'

import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const LABELS = {
  en: 'EN',
  es: 'ES',
} as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="inline-flex items-center gap-1" role="group" aria-label="Language">
      {routing.locales.map((code) => {
        const active = locale === code

        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            className={cn(
              'cursor-pointer rounded-md px-3 py-2 text-sm font-semibold transition-colors min-h-11 min-w-11',
              active
                ? 'bg-primary text-white'
                : 'border-border text-foreground hover:bg-muted border bg-white',
            )}
            onClick={() => router.replace(pathname, { locale: code })}
          >
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
