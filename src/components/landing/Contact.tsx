import { Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'

import { IconBadge } from '@/components/landing/IconBadge'
import { SectionEyebrow } from '@/components/landing/SectionEyebrow'
import { CONTACT_EMAIL } from '@/lib/site'

const ContactForm = dynamic(() => import('@/components/landing/ContactForm').then((mod) => mod.ContactForm), {
  loading: () => <div className="bg-muted/40 min-h-80 animate-pulse rounded-md" />,
})

export async function Contact() {
  const t = await getTranslations('Contact')

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 px-4 py-16 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <SectionEyebrow>{t('eyebrow')}</SectionEyebrow>
          <h2 className="font-display mt-6 text-3xl font-semibold break-words sm:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-6 max-w-md leading-7 text-pretty sm:leading-8">{t('subtitle')}</p>
          <a
            className="mt-8 inline-flex min-w-0 max-w-full items-center gap-3 rounded-xl bg-white"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <IconBadge>
              <Mail className="size-5" aria-hidden />
            </IconBadge>
            <span className="min-w-0">
              <span className="text-muted-foreground block text-sm">{t('emailCta')}</span>
              <span className="text-foreground block font-medium break-all underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </span>
            </span>
          </a>
        </div>
        <div className="bg-card relative min-w-0 rounded-xl p-4 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
