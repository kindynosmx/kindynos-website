'use client'

import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const LABELS: Record<string, string> = {
  en: 'EN',
  es: 'ES',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={cn('border-border bg-muted/40 flex items-center rounded-full border p-0.5 text-xs', className)}>
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          className={cn(
            'rounded-full px-2.5 py-1 font-medium transition-colors',
            locale === code ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
          onClick={() => router.replace(pathname, { locale: code })}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
