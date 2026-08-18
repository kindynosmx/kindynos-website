import { getTranslations } from 'next-intl/server'

import { GitHubIcon, LinkedInIcon } from '@/components/icons'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Link } from '@/i18n/navigation'
import { GITHUB_URL, LINKEDIN_URL, SITE_NAME } from '@/lib/site'

export async function Footer() {
  const t = await getTranslations('Footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-medium">{SITE_NAME}</p>
          <p className="text-muted-foreground mt-3 text-sm leading-7">{t('tagline')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
            {t('privacy')}
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground">
            {t('terms')}
          </Link>
          <a
            href={GITHUB_URL}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon className="size-4" />
            {t('github')}
          </a>
          <a
            href={LINKEDIN_URL}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="size-4" />
            {t('linkedin')}
          </a>
        </div>
      </div>
      <div className="border-border border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-muted-foreground text-xs">
            © {year} {t('rights')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
