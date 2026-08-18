import { getTranslations } from 'next-intl/server'

const STEPS = ['discover', 'design', 'build', 'ship'] as const

export async function Process() {
  const t = await getTranslations('Process')

  return (
    <section id="process" className="border-border bg-muted/20 scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-secondary text-sm font-medium tracking-[0.22em] uppercase">{t('eyebrow')}</p>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-medium sm:text-4xl">
          {t('title')}
        </h2>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-8">{t('subtitle')}</p>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((key, index) => (
            <li key={key} className="relative">
              <span className="font-display text-primary/40 text-4xl font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-4 text-lg font-medium">{t(`steps.${key}.title`)}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-7">{t(`steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
