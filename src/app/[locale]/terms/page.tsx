import { getTranslations, setRequestLocale } from 'next-intl/server'

import { LegalDocument, type LegalSection } from '@/components/legal/LegalDocument'
import { parseLocale } from '@/i18n/locale'
import { buildMetadata } from '@/lib/metadata'
import { SITE_NAME } from '@/lib/site'

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
    title: `${t('title')} · ${SITE_NAME}`,
    description: meta('description'),
    path: '/terms',
  })
}

export default async function TermsPage({ params }: Props) {
  const { locale: localeParam } = await params
  const locale = parseLocale(localeParam)
  setRequestLocale(locale)

  const t = await getTranslations('Terms')

  return (
    <LegalDocument
      title={t('title')}
      updated={t('updated')}
      disclaimer={t('disclaimer')}
      sections={t.raw('sections') as LegalSection[]}
    />
  )
}
