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
    <section id="process" className="bg-muted scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-16 sm:px-6 sm:py-28">
        <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold break-words sm:text-4xl">{t('title')}</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-7 text-pretty sm:leading-8">{t('subtitle')}</p>

        <ol className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="min-w-0 rounded-2xl bg-white p-5 sm:p-6">
              <IconBadge>
                <Icon className="size-5" aria-hidden />
              </IconBadge>
              <p className="text-primary mt-5 text-xs font-semibold tracking-[0.2em] uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold break-words">{t(`steps.${key}.title`)}</h3>
              <p className="text-muted-foreground mt-2 leading-7 text-pretty">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
