import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { SectionEyebrow } from '@/components/landing/SectionEyebrow'

export async function About() {
  const t = await getTranslations('About')

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
          <h2 className="font-display mt-6 text-3xl font-semibold sm:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-7 max-w-xl leading-8">{t('body')}</p>
          <p className="text-muted-foreground mt-5 max-w-xl leading-8">{t('body2')}</p>
        </div>
        <blockquote className="brand-gradient relative overflow-hidden rounded-2xl p-10">
          <Image
            src="/brand/isotype-white.png"
            alt=""
            width={1000}
            height={1000}
            className="pointer-events-none absolute -right-8 -bottom-10 w-48 opacity-20 select-none"
            aria-hidden
          />
          <Image src="/brand/isotype-white.png" alt="" width={80} height={80} className="relative mb-8 size-14" />
          <p className="font-display relative text-4xl font-semibold tracking-[0.12em] text-white uppercase sm:text-5xl">
            {t('quote')}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
