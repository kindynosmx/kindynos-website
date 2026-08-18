import { setRequestLocale } from 'next-intl/server'

import { About } from '@/components/landing/About'
import { Contact } from '@/components/landing/Contact'
import { Hero } from '@/components/landing/Hero'
import { JsonLd } from '@/components/landing/JsonLd'
import { Process } from '@/components/landing/Process'
import { Services } from '@/components/landing/Services'
import { parseLocale } from '@/i18n/locale'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params
  setRequestLocale(parseLocale(localeParam))

  return (
    <main>
      <JsonLd />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
    </main>
  )
}
