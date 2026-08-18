import { getTranslations } from 'next-intl/server'

import { ContactForm } from '@/components/landing/ContactForm'
import { SectionEyebrow } from '@/components/landing/SectionEyebrow'
import { CONTACT_EMAIL } from '@/lib/site'

export async function Contact() {
  const t = await getTranslations('Contact')

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
        <div>
          <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
          <h2 className="font-display mt-6 text-3xl font-semibold sm:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-6 max-w-md leading-8">{t('subtitle')}</p>
          <p className="text-muted-foreground mt-6 text-sm">
            {t('emailCta')}{' '}
            <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="bg-card relative rounded-xl p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
