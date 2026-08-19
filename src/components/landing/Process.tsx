import { Hammer, PenLine, Rocket, Search } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { IconBadge } from '@/components/landing/IconBadge'
import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

const STEPS = [
  { key: 'discover', icon: Search },
  { key: 'design', icon: PenLine },
  { key: 'build', icon: Hammer },
  { key: 'ship', icon: Rocket },
] as const

export async function Process() {
  const t = await getTranslations('Process')

  return (
    <section id="process" className="bg-muted scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">{t('title')}</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-8">{t('subtitle')}</p>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="rounded-2xl bg-white p-6">
              <IconBadge>
                <Icon className="size-5" aria-hidden />
              </IconBadge>
              <p className="text-primary mt-5 text-xs font-semibold tracking-[0.2em] uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold">{t(`steps.${key}.title`)}</h3>
              <p className="text-muted-foreground mt-2 leading-7">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
