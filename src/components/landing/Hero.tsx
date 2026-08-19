import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export async function Hero() {
  const t = await getTranslations('Hero')

  return (
    <section className="brand-gradient brand-watermark relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl min-w-0 flex-col justify-center gap-6 px-4 py-16 sm:gap-8 sm:px-6 sm:py-32 lg:min-h-[78vh] lg:py-40">
        <p className="text-xs font-medium tracking-[0.18em] text-white uppercase sm:text-sm sm:tracking-[0.32em]">
          {t('eyebrow')}
        </p>
        <h1 className="font-display max-w-4xl text-3xl font-semibold break-words text-white sm:text-5xl lg:text-6xl">
          {t('title')}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-pretty text-white/90 sm:text-lg sm:leading-8">{t('subtitle')}</p>
        <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button asChild size="lg" variant="inverse" className="w-full sm:w-auto">
            <Link href={{ pathname: '/', hash: 'contact' }}>{t('cta')}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full text-white hover:bg-white/15 hover:text-white sm:w-auto"
          >
            <Link href={{ pathname: '/', hash: 'services' }}>{t('ctaSecondary')}</Link>
          </Button>
        </div>
        <p className="mt-2 text-xs font-medium tracking-[0.28em] text-white uppercase sm:mt-6 sm:text-sm sm:tracking-[0.42em]">
          {t('tagline')}
        </p>
      </div>
    </section>
  )
}
