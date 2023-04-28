import { Analytics } from '@vercel/analytics/react'
import { notFound } from 'next/navigation'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { ThemeProvider } from '@/theme'
import { defaultMetadata } from '@/utils'

export const metadata = defaultMetadata

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages: AbstractIntlMessages | undefined
  try {
    messages = (await import(`@/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html>
      <body>
        <Analytics />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
