'use client'

import { Button } from '@chakra-ui/button'
import { Center } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import Link from 'next/link'
import React from 'react'

import { CloseIcon, GlobeIcon } from '@/assets'

const languageToCountry = {
  cn: '中文',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ger: 'Deutsch',
  it: 'Italiano',
  jp: '日本語',
  kr: '한국어',
  pol: 'Polski',
  pt: 'Português',
  rs: 'русский язык',
}

import { HStack, Stack } from '@chakra-ui/layout'

export function Navbar() {
  return (
    <Stack margin="0 !important" position="absolute" top="0" width="full">
      <HStack direction="row" height="100px" justify="end" paddingX={{ base: 2, md: 10 }}>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                _active={{ color: 'white' }}
                _hover={{ color: 'white', opacity: '0.6' }}
                as={Button}
                color="white"
                isActive={isOpen}
                paddingX="0"
                transition="all 0.2s"
              >
                <Center>{isOpen ? <CloseIcon height={7} width={7} /> : <GlobeIcon height={7} width={7} />}</Center>
              </MenuButton>
              <MenuList background="white" border="2px solid" color="primary" rounded="lg">
                {Object.keys(languageToCountry).map((locale) => {
                  return (
                    <MenuItem
                      key={locale}
                      _active={{ bg: 'primary', color: 'white' }}
                      _hover={{ bg: 'primary', color: 'white' }}
                      backgroundColor="white"
                      fontWeight={900}
                    >
                      <Link href={'/' + locale}>{languageToCountry[locale]}</Link>
                    </MenuItem>
                  )
                })}
              </MenuList>
            </>
          )}
        </Menu>
      </HStack>
    </Stack>
  )
}
