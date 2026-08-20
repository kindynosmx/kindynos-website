import { routing } from './i18n/routing'
import en from './messages/en.json'

declare global {
  interface CloudflareEnv {
    RESEND_API_KEY?: string
    TURNSTILE_SECRET_KEY?: string
    CONTACT_FROM_EMAIL?: string
    CONTACT_TO_EMAIL?: string
  }
}

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof en
  }
}
