'use client'

import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { BrandLogo } from '@/components/BrandLogo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: { pathname: '/', hash: 'services' }, key: 'services' },
  { href: { pathname: '/', hash: 'process' }, key: 'process' },
  { href: { pathname: '/', hash: 'about' }, key: 'about' },
  { href: { pathname: '/', hash: 'contact' }, key: 'contact' },
] as const

export function Navbar() {
  const t = useTranslations('Nav')
  const [open, setOpen] = useState(false)

  return (
    <header className="border-border/80 sticky top-0 z-50 border-b bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl min-w-0 items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <BrandLogo priority />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button asChild size="sm">
            <Link href={{ pathname: '/', hash: 'contact' }}>{t('cta')}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground inline-flex size-11 shrink-0 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t('closeMenu') : t('openMenu')}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div id="mobile-nav" className={cn('border-border border-t md:hidden', open ? 'block' : 'hidden')}>
        <nav
          className="mx-auto flex max-h-[calc(100dvh-4rem)] max-w-6xl flex-col gap-1 overflow-y-auto px-4 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex min-h-11 items-center rounded-md px-3 py-3 text-base"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 px-3 sm:flex-row sm:items-center sm:justify-between">
            <LanguageSwitcher />
            <Button asChild className="w-full sm:w-auto">
              <Link href={{ pathname: '/', hash: 'contact' }} onClick={() => setOpen(false)}>
                {t('cta')}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
