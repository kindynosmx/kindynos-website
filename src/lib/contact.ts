export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  company: 120,
  message: 5000,
} as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactFields = {
  name: string
  email: string
  company: string
  message: string
}

export type ContactField = keyof ContactFields

export function asString(value: unknown, max: number) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.replace(/\0/g, '').trim().slice(0, max)
}

export function parseContact(payload: Record<string, unknown>): ContactFields {
  return {
    name: asString(payload.name, CONTACT_LIMITS.name),
    email: asString(payload.email, CONTACT_LIMITS.email).toLowerCase(),
    company: asString(payload.company, CONTACT_LIMITS.company),
    message: asString(payload.message, CONTACT_LIMITS.message),
  }
}

export function validateContact(fields: ContactFields): Partial<Record<ContactField, true>> {
  const errors: Partial<Record<ContactField, true>> = {}

  if (!fields.name) {
    errors.name = true
  }

  if (!EMAIL_PATTERN.test(fields.email)) {
    errors.email = true
  }

  if (!fields.message) {
    errors.message = true
  }

  return errors
}
