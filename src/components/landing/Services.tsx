import { getTranslations } from 'next-intl/server'

import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

const ITEMS = ['blockchain', 'web3', 'webapps', 'backend', 'consulting'] as const

export async function Services() {
  const t = await getTranslations('Services')

  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">{t('title')}</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-8">{t('subtitle')}</p>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2">
          {ITEMS.map((key, index) => (
            <li key={key} className="flex gap-5">
              <span className="bg-primary mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{t(`items.${key}.title`)}</h3>
                <p className="text-muted-foreground mt-2 leading-7">{t(`items.${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
