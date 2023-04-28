import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'cn', 'fr', 'es', 'pt', 'it', 'pol', 'ger', 'jp', 'kr'],
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
