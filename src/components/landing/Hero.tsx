import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export async function Hero() {
  const t = await getTranslations('Hero')

  return (
    <section className="relative overflow-hidden">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="text-secondary text-sm font-medium tracking-[0.22em] uppercase">{t('eyebrow')}</p>
        <h1 className="font-display max-w-4xl text-4xl font-medium sm:text-5xl lg:text-6xl">
          {t('title')}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg leading-8 text-pretty">{t('subtitle')}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href={{ pathname: '/', hash: 'contact' }}>{t('cta')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={{ pathname: '/', hash: 'services' }}>{t('ctaSecondary')}</Link>
          </Button>
        </div>
        <p className="font-display text-primary text-base">{t('tagline')}</p>
      </div>
    </section>
  )
}
