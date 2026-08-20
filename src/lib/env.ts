import { getCloudflareContext } from '@opennextjs/cloudflare'

export async function getRuntimeEnv(name: string) {
  try {
    const { env } = await getCloudflareContext({ async: true })
    const fromCloudflare = (env as Record<string, unknown>)[name]
    if (typeof fromCloudflare === 'string' && fromCloudflare.length > 0) {
      return fromCloudflare
    }
  } catch {
    // `next start` and tests have no Workers context.
  }

  const fromProcess = process.env[name]
  return fromProcess && fromProcess.length > 0 ? fromProcess : undefined
}
