import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export async function Hero() {
  const t = await getTranslations('Hero')

  return (
    <section className="brand-gradient relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:min-h-[78vh] lg:py-40">
        <p className="text-sm font-medium tracking-[0.32em] text-white uppercase">{t('eyebrow')}</p>
        <h1 className="font-display max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{t('title')}</h1>
        <p className="max-w-2xl text-lg leading-8 text-pretty text-white/90">{t('subtitle')}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="inverse">
            <Link href={{ pathname: '/', hash: 'contact' }}>{t('cta')}</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/15 hover:text-white">
            <Link href={{ pathname: '/', hash: 'services' }}>{t('ctaSecondary')}</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm font-medium tracking-[0.42em] text-white uppercase">{t('tagline')}</p>
      </div>
    </section>
  )
}
