import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import { Footer } from '@/components/landing/Footer'
import { Navbar } from '@/components/landing/Navbar'
import { parseLocale } from '@/i18n/locale'
import { routing } from '@/i18n/routing'
import { buildMetadata } from '@/lib/metadata'

export const viewport: Viewport = {
  themeColor: '#426DA9',
  colorScheme: 'light',
}

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = parseLocale(localeParam)
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return buildMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  })
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params
  const locale = parseLocale(localeParam)

  setRequestLocale(locale)

  const t = await getTranslations('Nav')

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <Script id="typekit-css" strategy="afterInteractive">
          {`var l=document.createElement('link');l.rel='stylesheet';l.href='https://use.typekit.net/wsf0ocf.css';document.head.appendChild(l);`}
        </Script>
        <noscript>
          <link rel="stylesheet" href="https://use.typekit.net/wsf0ocf.css" />
        </noscript>
        <NextIntlClientProvider>
          <a
            href="#content"
            className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:px-3 focus:py-2"
          >
            {t('skip')}
          </a>
          <Navbar />
          <div id="content" className="flex-1">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
