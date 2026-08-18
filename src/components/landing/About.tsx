import { getTranslations } from 'next-intl/server'

export async function About() {
  const t = await getTranslations('About')

  return (
    <section id="about" className="border-border scroll-mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-secondary text-sm font-medium tracking-[0.22em] uppercase">{t('eyebrow')}</p>
          <h2 className="font-display mt-5 text-3xl font-medium sm:text-4xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground mt-7 max-w-xl leading-8">{t('body')}</p>
          <p className="text-muted-foreground mt-5 max-w-xl leading-8">{t('body2')}</p>
        </div>
        <blockquote className="border-primary/30 from-primary/20 to-secondary/10 rounded-2xl border bg-gradient-to-br p-10">
          <p className="font-display text-4xl font-medium sm:text-5xl">{t('quote')}</p>
        </blockquote>
      </div>
    </section>
  )
}
