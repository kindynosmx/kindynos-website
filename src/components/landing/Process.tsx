import { getTranslations } from 'next-intl/server'

import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

const STEPS = ['discover', 'design', 'build', 'ship'] as const

export async function Process() {
  const t = await getTranslations('Process')

  return (
    <section id="process" className="bg-muted scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">{t('title')}</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-8">{t('subtitle')}</p>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((key, index) => (
            <li key={key}>
              <span className="bg-primary inline-flex size-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold">{t(`steps.${key}.title`)}</h3>
              <p className="text-muted-foreground mt-2 leading-7">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
