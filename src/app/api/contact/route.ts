import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { parseContact, validateContact, asString } from '@/lib/contact'
import { getRuntimeEnv } from '@/lib/env'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'
import { verifyTurnstileToken } from '@/lib/turnstile'

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5

const hits = new Map<string, number[]>()

function getClientIp(request: Request) {
  const cfIp = request.headers.get('cf-connecting-ip')
  if (cfIp) {
    return cfIp
  }

  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent)
    return true
  }

  recent.push(now)
  hits.set(ip, recent)
  return false
}

function jsonError(status: number, message?: string) {
  return NextResponse.json(
    {
      ok: false,
      ...(process.env.NODE_ENV === 'development' && message ? { error: message } : {}),
    },
    { status },
  )
}

export async function POST(request: Request) {
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return jsonError(429)
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return jsonError(400)
  }

  if (!body || typeof body !== 'object') {
    return jsonError(400)
  }

  const payload = body as Record<string, unknown>
  const turnstileToken = asString(payload.turnstileToken, 2048)
  const verified = await verifyTurnstileToken(turnstileToken, ip)
  if (!verified) {
    return jsonError(403)
  }

  const fields = parseContact(payload)
  if (Object.keys(validateContact(fields)).length > 0) {
    return jsonError(400)
  }

  const apiKey = await getRuntimeEnv('RESEND_API_KEY')
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set on the Worker')
    return jsonError(503)
  }

  const from = (await getRuntimeEnv('CONTACT_FROM_EMAIL'))?.trim() || `${SITE_NAME} <${CONTACT_EMAIL}>`
  const to = (await getRuntimeEnv('CONTACT_TO_EMAIL'))?.trim() || CONTACT_EMAIL

  const lines = [`Name: ${fields.name}`, `Email: ${fields.email}`]
  if (fields.company) {
    lines.push(`Company: ${fields.company}`)
  }
  lines.push('', 'Message:', fields.message)

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: fields.email,
    subject: `${SITE_NAME} inquiry — ${fields.name}`,
    text: lines.join('\n'),
  })

  if (error) {
    console.error('Resend rejected the message:', error)
    return jsonError(502, error.message)
  }

  return NextResponse.json({ ok: true })
}
