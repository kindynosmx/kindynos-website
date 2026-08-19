const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export async function verifyTurnstileToken(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret || !token) {
    return false
  }

  const body = new URLSearchParams({ secret, response: token })
  if (ip !== 'unknown') {
    body.set('remoteip', ip)
  }

  const response = await fetch(SITEVERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) {
    return false
  }

  const result = (await response.json()) as { success?: boolean }
  return result.success === true
}
