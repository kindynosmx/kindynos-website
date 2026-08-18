import { getTranslations } from 'next-intl/server'

import { ContactForm } from '@/components/landing/ContactForm'
import { CONTACT_EMAIL } from '@/lib/site'

export async function Contact() {
  const t = await getTranslations('Contact')

  return (
    <section id="contact" className="border-border scroll-mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="text-secondary text-sm font-medium tracking-[0.22em] uppercase">{t('eyebrow')}</p>
          <h2 className="font-display mt-5 text-3xl font-medium sm:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-6 max-w-md leading-8">{t('subtitle')}</p>
          <p className="text-muted-foreground mt-6 text-sm">
            {t('emailCta')}{' '}
            <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="border-border bg-card relative rounded-xl border p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
