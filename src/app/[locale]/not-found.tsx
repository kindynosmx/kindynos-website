import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export default async function NotFoundPage() {
  const t = await getTranslations('NotFound')

  return (
    <main className="mx-auto flex max-w-xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-medium">{t('title')}</h1>
      <p className="text-muted-foreground leading-8">{t('body')}</p>
      <Button asChild>
        <Link href="/">{t('cta')}</Link>
      </Button>
    </main>
  )
}
