import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const LOGOS = {
  color: { src: '/brand/logo-gray.png', width: 1500, height: 455 },
  full: { src: '/brand/logo.png', width: 1500, height: 455 },
  white: { src: '/brand/logo-white-isotype-colored.png', width: 1500, height: 455 },
  whiteSolid: { src: '/brand/logo-white.png', width: 1500, height: 455 },
} as const

export function BrandLogo({
  variant = 'color',
  className,
  priority = false,
}: {
  variant?: keyof typeof LOGOS
  className?: string
  priority?: boolean
}) {
  const logo = LOGOS[variant]

  return (
    <Link href="/" className={cn('inline-flex shrink-0', className)} aria-label="Kindynos">
      <Image
        src={logo.src}
        alt="Kindynos"
        width={logo.width}
        height={logo.height}
        sizes="180px"
        className="h-8 w-auto max-w-[10.5rem] sm:h-9 md:h-10 md:max-w-[12rem]"
        priority={priority}
      />
    </Link>
  )
}
