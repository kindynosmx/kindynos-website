'use client'

/* eslint-disable no-restricted-imports */
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

const allRoundGothic = localFont({ src: './fonts/all-round-gothic.ttf' })
const gothic = localFont({ src: './fonts/gothic.woff2' })

export const fonts = {
  body: `${gothic.style.fontFamily}, sans-serif`,
  heading: `${allRoundGothic.style.fontFamily}, sans-serif`,
}

export const theme = extendTheme({
  colors: {
    gray: '#595958',
    primary: '#702F8A',
    secondary: '#426DA9',
  },
  fonts,
  styles: {
    global: {
      body: {
        color: 'primary',
      },
    },
  },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  )
}
