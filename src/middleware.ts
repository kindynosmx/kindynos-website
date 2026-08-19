import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

// Next.js 16 prefers `proxy.ts` (Node middleware). OpenNext on Cloudflare still
// requires the Edge `middleware.ts` convention.
export default createMiddleware(routing)

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|_workers|.*\\..*).*)',
}
