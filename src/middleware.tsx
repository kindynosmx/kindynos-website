import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'cn', 'fr', 'es', 'pt', 'it', 'pol', 'ger', 'jp', 'kr', 'rs'],
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
