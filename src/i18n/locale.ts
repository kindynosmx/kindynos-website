import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import { routing, type Locale } from '@/i18n/routing'

export function parseLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return locale
}
