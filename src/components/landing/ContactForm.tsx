'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const t = useTranslations('Contact')

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t('name')}</Label>
          <Input id="name" name="name" maxLength={100} autoComplete="name" placeholder={t('namePlaceholder')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            maxLength={200}
            autoComplete="email"
            placeholder={t('emailPlaceholder')}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">
          {t('company')} <span className="text-muted-foreground font-normal">({t('companyOptional')})</span>
        </Label>
        <Input
          id="company"
          name="company"
          maxLength={120}
          autoComplete="organization"
          placeholder={t('companyPlaceholder')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea id="message" name="message" maxLength={5000} placeholder={t('messagePlaceholder')} />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {t('submit')}
      </Button>
    </form>
  )
}
