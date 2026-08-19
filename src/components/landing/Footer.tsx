import { getTranslations } from 'next-intl/server'

import { BrandLogo } from '@/components/BrandLogo'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Link } from '@/i18n/navigation'
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/site'

export async function Footer() {
  const t = await getTranslations('Footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl min-w-0 flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm min-w-0">
          <BrandLogo />
          <p className="text-muted-foreground mt-4 text-sm leading-7 text-pretty">{t('tagline')}</p>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center">
            {t('privacy')}
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center">
            {t('terms')}
          </Link>
          <a
            href={GITHUB_URL}
            className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-1.5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon className="size-4" />
            {t('github')}
          </a>
          <a
            href={LINKEDIN_URL}
            className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-1.5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="size-4" />
            {t('linkedin')}
          </a>
        </div>
      </div>
      <div className="border-border border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-xs">
            © {year} {t('rights')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
