'use client'

import { Center, Heading, Text, VStack } from '@chakra-ui/layout'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()

  return (
    <Center height="calc(100vh)" width="calc(100vw)">
      <VStack>
        <Heading>{t('HELLO')}</Heading>
        <Text>{t('CONTENT')}</Text>
      </VStack>
    </Center>
  )
}
