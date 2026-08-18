import { getTranslations, setRequestLocale } from 'next-intl/server'

import { parseLocale } from '@/i18n/locale'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = parseLocale(localeParam)
  const t = await getTranslations({ locale, namespace: 'Terms' })
  const meta = await getTranslations({ locale, namespace: 'Metadata' })

  return buildMetadata({
    locale,
    title: `${t('title')} · Kindynos`,
    description: meta('description'),
    path: '/terms',
  })
}

export default async function TermsPage({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = parseLocale(localeParam)
  setRequestLocale(locale)

  const t = await getTranslations('Terms')
  const sections = t.raw('sections') as { title: string; body: string }[]

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-4xl font-semibold">{t('title')}</h1>
      <span className="brand-rule mt-4 block h-0.5 w-12 rounded-full" />
      <p className="text-muted-foreground mt-3 text-sm">{t('updated')}</p>
      <p className="text-muted-foreground mt-7 leading-8">{t('disclaimer')}</p>
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-medium">{section.title}</h2>
            <p className="text-muted-foreground mt-4 leading-8">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
