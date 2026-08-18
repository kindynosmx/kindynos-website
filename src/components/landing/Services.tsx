import { Blocks, Code2, Compass, Cpu, Globe } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

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
    <section id="services" className="border-border scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-secondary text-sm font-medium tracking-[0.22em] uppercase">{t('eyebrow')}</p>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-medium sm:text-4xl">
          {t('title')}
        </h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-8">{t('subtitle')}</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="border-border bg-card hover:border-primary/40 rounded-xl border p-6 transition-colors"
            >
              <Icon className="text-secondary size-6" aria-hidden />
              <h3 className="font-display mt-5 text-lg font-medium">{t(`items.${key}.title`)}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{t(`items.${key}.description`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
