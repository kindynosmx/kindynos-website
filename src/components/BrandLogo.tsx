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
    <Link href="/" className={cn('inline-flex', className)} aria-label="Kindynos">
      <Image
        src={logo.src}
        alt="Kindynos"
        width={logo.width}
        height={logo.height}
        sizes="180px"
        className="h-9 w-auto md:h-10"
        priority={priority}
      />
    </Link>
  )
}
