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
    <header className="border-border/80 sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandLogo />

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
          className="text-foreground inline-flex size-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-label={open ? t('closeMenu') : t('openMenu')}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn('border-border border-t md:hidden', open ? 'block' : 'hidden')}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between px-3">
            <LanguageSwitcher />
            <Button asChild size="sm">
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
