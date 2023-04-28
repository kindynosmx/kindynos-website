'use client'

import { Box, Center, Container, Grid, GridItem, Heading, HStack } from '@chakra-ui/layout'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'

export default function Home() {
  const t = useTranslations()

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = ref.current
    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: any) => {
      mouseX = e.pageX
      mouseY = e.pageY
    }

    if (container) {
      container.addEventListener('mousemove', onMouseMove)

      const handleAnimation = () => {
        const background = `radial-gradient(circle at ${mouseX + 100}px ${mouseY + 100}px, #426DA9, #702F8A)`
        container.style.background = background
        requestAnimationFrame(handleAnimation)
      }

      handleAnimation()

      return () => {
        container.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [])

  return (
    <Container ref={ref} className="container" minHeight="calc(100vh)" minWidth="calc(100vw)">
      <Center height="calc(100vh)" width="full">
        <Grid
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(7, 1fr)' }}
          height={{ base: '400px', lg: 'full' }}
          paddingX={{ base: '5', lg: '20' }}
          width="full"
        >
          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <HStack align="center" height="full" justifyContent="center" width="full">
              <Image alt="Kindynos Logo" height="228" src="/images/logo-white.png" width="750" />
            </HStack>
          </GridItem>
          <GridItem alignItems="center">
            <HStack align="center" height="full" justifyContent="center" width="full">
              <Box
                background="white"
                height={{ base: '3px', lg: '300px' }}
                rounded="lg"
                width={{ base: 'full', lg: '3px' }}
              />
            </HStack>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <HStack align="center" height="full" justifyContent={{ base: 'center', lg: 'start' }} width="full">
              <Heading color="white" size="4xl">
                {t('BUILD_SOFTWARE')}
              </Heading>
            </HStack>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  )
}
