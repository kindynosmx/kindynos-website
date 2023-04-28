'use client'

import { HStack, Stack } from '@chakra-ui/layout'

export function Navbar() {
  return (
    <Stack margin="0 !important" width="full">
      <HStack direction="row" height="100px" justify="space-between" paddingX={{ base: 2, md: 10 }}></HStack>
    </Stack>
  )
}
