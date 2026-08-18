import Image from 'next/image'

import { Link } from '@/i18n/navigation'

const LOGOS = {
  color: { src: '/brand/logo-gray.png', width: 1500, height: 455 },
  full: { src: '/brand/logo.png', width: 1500, height: 455 },
  white: { src: '/brand/logo-white-isotype-colored.png', width: 1500, height: 455 },
  whiteSolid: { src: '/brand/logo-white.png', width: 1500, height: 455 },
} as const

export function BrandLogo({
  variant = 'color',
  className,
}: {
  variant?: keyof typeof LOGOS
  className?: string
}) {
  const logo = LOGOS[variant]

  return (
    <Link href="/" className={className} aria-label="Kindynos">
      <Image src={logo.src} alt="Kindynos" width={logo.width} height={logo.height} className="h-9 w-auto md:h-10" priority />
    </Link>
  )
}
