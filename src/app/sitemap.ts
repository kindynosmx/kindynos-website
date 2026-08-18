import type { MetadataRoute } from 'next'

import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'

const PAGES = ['', '/privacy', '/terms'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    PAGES.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'weekly' : 'yearly',
      priority: path === '' ? 1 : 0.3,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((code) => [code, `${SITE_URL}/${code}${path}`])),
      },
    })),
  )
}
