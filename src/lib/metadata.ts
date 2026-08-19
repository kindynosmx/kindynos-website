import type { Metadata } from 'next'

import { routing } from '@/i18n/routing'
import { FAVICON_URL, LOGO_URL, SITE_NAME, SITE_URL } from '@/lib/site'

type Locale = (typeof routing.locales)[number]

export function buildMetadata({
  locale,
  title,
  description,
  path = '',
  keywords,
}: {
  locale: Locale
  title: string
  description: string
  path?: string
  keywords?: string
}): Metadata {
  const canonical = `${SITE_URL}/${locale}${path}`
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((code) => [code, `${SITE_URL}/${code}${path}`]),
  )
  languages['x-default'] = `${SITE_URL}/en${path}`

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords?.split(',').map((keyword) => keyword.trim()),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    icons: {
      icon: FAVICON_URL,
      shortcut: FAVICON_URL,
      apple: FAVICON_URL,
    },
    manifest: '/static/manifest.json',
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: LOGO_URL, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [LOGO_URL],
    },
    alternates: {
      canonical,
      languages,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
