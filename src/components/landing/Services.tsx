import { Blocks, Code2, Compass, Cpu, Globe } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { IconBadge } from '@/components/landing/IconBadge'
import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

const ITEMS = [
  { key: 'blockchain', icon: Blocks },
  { key: 'web3', icon: Cpu },
  { key: 'webapps', icon: Globe },
  { key: 'backend', icon: Code2 },
  { key: 'consulting', icon: Compass },
] as const

export async function Services() {
  const t = await getTranslations('Services')

  return (
    <section id="services" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-16 sm:px-6 sm:py-28">
        <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
        <h2 className="font-display mt-6 max-w-3xl text-3xl font-semibold break-words sm:text-4xl">{t('title')}</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-7 text-pretty sm:leading-8">{t('subtitle')}</p>

        <ol className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {ITEMS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="bg-card flex min-w-0 gap-4 rounded-2xl p-5 sm:gap-5 sm:p-6">
              <IconBadge>
                <Icon className="size-5" aria-hidden />
              </IconBadge>
              <div className="min-w-0">
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display mt-1 text-lg font-semibold break-words">{t(`items.${key}.title`)}</h3>
                <p className="text-muted-foreground mt-2 leading-7 text-pretty">{t(`items.${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
