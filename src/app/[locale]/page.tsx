'use client'

import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Grid, GridItem, Heading, HStack, VStack } from '@chakra-ui/layout'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { ContactForm, Navbar } from '@/components'

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

  const [openModalForm, setOpenModalForm] = useState(false)

  const handleContactFormOpen = () => {
    setOpenModalForm(true)
  }

  return (
    <Container ref={ref} className="container" minHeight="calc(100vh)" minWidth="calc(100vw)">
      <ContactForm isOpen={openModalForm} onClose={() => setOpenModalForm(false)} />
      <Center height="calc(100vh)" width="full">
        <Navbar />
        <VStack spacing="20">
          <Grid
            gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(7, 1fr)' }}
            height={{ base: '400px', lg: 'full' }}
            paddingX={{ base: '5', lg: '20' }}
            width="full"
          >
            <GridItem colSpan={{ base: 1, lg: 3 }}>
              <HStack align="center" height="full" justifyContent="center" width="full">
                <Image alt="Kindynos Logo" height="228" src="/images/logo-white.png" width="750" priority />
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
                <Heading color="white" size={{ base: '2xl', xl: '3xl' }}>
                  {t('BUILD_SOFTWARE')}
                </Heading>
              </HStack>
            </GridItem>
          </Grid>
          <HStack justifyContent="center" width="full"></HStack>
          <Button
            _hover={{ opacity: '.6' }}
            background="white"
            marginTop="10px"
            size="lg"
            onClick={handleContactFormOpen}
          >
            <Heading color="primary" size="lg">
              {t('START')}
            </Heading>
          </Button>
        </VStack>
      </Center>
    </Container>
  )
}
