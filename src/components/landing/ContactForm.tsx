'use client'

import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT_LIMITS, parseContact, validateContact, type ContactField } from '@/lib/contact'

type Status = 'idle' | 'sending' | 'success' | 'error'
type FieldErrors = Partial<Record<ContactField | 'turnstile', true>>

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''
const FOCUS_ORDER = ['name', 'email', 'message'] as const

export function ContactForm() {
  const t = useTranslations('Contact')
  const locale = useLocale()
  const formRef = useRef<HTMLFormElement>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState<string>()
  const [turnstileSize, setTurnstileSize] = useState<'compact' | 'flexible'>()

  useEffect(() => {
    const media = window.matchMedia('(max-width: 419px)')
    const sync = () => setTurnstileSize(media.matches ? 'compact' : 'flexible')
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  function resetTurnstile() {
    setToken('')
    turnstileRef.current?.reset()
  }

  function clearError(field: ContactField | 'turnstile') {
    if (!errors[field]) {
      return
    }

    setErrors((current) => {
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  function readFields() {
    const form = formRef.current
    if (!form) {
      return parseContact({})
    }

    const data = new FormData(form)
    return parseContact({
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message'),
    })
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const fields = readFields()
    const nextErrors: FieldErrors = validateContact(fields)
    if (!token) {
      nextErrors.turnstile = true
    }

    setErrors(nextErrors)
    setStatus('idle')
    setServerError(undefined)

    const firstInvalid = FOCUS_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus()
      return
    }

    if (nextErrors.turnstile) {
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, turnstileToken: token }),
      })
      const result = (await response.json().catch(() => null)) as { error?: unknown } | null

      if (!response.ok) {
        throw new Error(typeof result?.error === 'string' ? result.error : 'request failed')
      }

      formRef.current?.reset()
      resetTurnstile()
      setErrors({})
      setStatus('success')
    } catch (error) {
      resetTurnstile()
      setStatus('error')
      setServerError(error instanceof Error && error.message !== 'request failed' ? error.message : undefined)
    }
  }

  const sending = status === 'sending'

  return (
    <form ref={formRef} className="min-w-0 space-y-4" noValidate onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t('name')}</Label>
          <Input
            id="name"
            name="name"
            required
            maxLength={CONTACT_LIMITS.name}
            autoComplete="name"
            disabled={sending}
            placeholder={t('namePlaceholder')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onChange={() => clearError('name')}
          />
          <FieldError id="name-error" message={errors.name ? t('errors.name') : undefined} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={CONTACT_LIMITS.email}
            autoComplete="email"
            disabled={sending}
            placeholder={t('emailPlaceholder')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={() => clearError('email')}
          />
          <FieldError id="email-error" message={errors.email ? t('errors.email') : undefined} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">
          {t('company')} <span className="text-muted-foreground font-normal">({t('companyOptional')})</span>
        </Label>
        <Input
          id="company"
          name="company"
          maxLength={CONTACT_LIMITS.company}
          autoComplete="organization"
          disabled={sending}
          placeholder={t('companyPlaceholder')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={CONTACT_LIMITS.message}
          disabled={sending}
          placeholder={t('messagePlaceholder')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={() => clearError('message')}
        />
        <FieldError id="message-error" message={errors.message ? t('errors.message') : undefined} />
      </div>
      {siteKey && turnstileSize ? (
        <div className="space-y-2">
          <Turnstile
            ref={turnstileRef}
            siteKey={siteKey}
            onSuccess={(value) => {
              setToken(value)
              clearError('turnstile')
            }}
            onExpire={() => setToken('')}
            onError={() => setToken('')}
            options={{ theme: 'light', size: turnstileSize, language: locale }}
          />
          <FieldError id="turnstile-error" message={errors.turnstile ? t('errors.turnstile') : undefined} />
        </div>
      ) : null}
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
        <Send className="size-4" aria-hidden />
        {sending ? t('sending') : t('submit')}
      </Button>
      {status === 'success' ? (
        <p role="status" className="text-sm">
          {t('success')}
        </p>
      ) : null}
      {status === 'error' ? (
        <p role="alert" className="text-sm">
          {serverError ?? t('error')}
        </p>
      ) : null}
    </form>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} role="alert" className="text-destructive text-sm">
      {message}
    </p>
  )
}
