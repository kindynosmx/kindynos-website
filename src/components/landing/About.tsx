import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

export async function About() {
  const t = await getTranslations('About')

  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 px-4 py-16 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
          <h2 className="font-display mt-6 text-3xl font-semibold break-words sm:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-7 max-w-xl leading-7 text-pretty sm:leading-8">{t('body')}</p>
          <p className="text-muted-foreground mt-5 max-w-xl leading-7 text-pretty sm:leading-8">{t('body2')}</p>
        </div>
        <blockquote className="brand-gradient brand-watermark-card relative overflow-hidden rounded-2xl p-7 sm:p-10">
          <Image
            src="/brand/isotype-white.png"
            alt=""
            width={56}
            height={56}
            sizes="56px"
            className="relative mb-8 size-14"
            aria-hidden
          />
          <p className="font-display relative text-3xl font-semibold tracking-[0.08em] text-white uppercase sm:text-5xl sm:tracking-[0.12em]">
            {t('quote')}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
