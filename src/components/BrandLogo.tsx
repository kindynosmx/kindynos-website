import Image from 'next/image'

import { Link } from '@/i18n/navigation'

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Kindynos">
      <Image
        src="/brand/logo-gray.png"
        alt="Kindynos"
        width={1500}
        height={455}
        sizes="180px"
        className="h-8 w-auto max-w-[10.5rem] sm:h-9 md:h-10 md:max-w-[12rem]"
        priority={priority}
      />
    </Link>
  )
}
