import { Mail } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { ContactForm } from '@/components/landing/ContactForm'
import { IconBadge } from '@/components/landing/IconBadge'
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
          <a
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <IconBadge>
              <Mail className="size-5" aria-hidden />
            </IconBadge>
            <span>
              <span className="text-muted-foreground block text-sm">{t('emailCta')}</span>
              <span className="text-foreground font-medium underline-offset-4 hover:underline">{CONTACT_EMAIL}</span>
            </span>
          </a>
        </div>
        <div className="bg-card relative rounded-xl p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
