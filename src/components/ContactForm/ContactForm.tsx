import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Spinner } from '@chakra-ui/spinner'
import { Textarea } from '@chakra-ui/textarea'
import { useState } from 'react'

export function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [contact, setContact] = useState<string | undefined>(undefined)
  const [message, setMessage] = useState<string | undefined>(undefined)

  const [sent, setSent] = useState(false)

  const handleTitleChange = (title: string) => {
    setSent(false)
    if (title === '') {
      setTitle(undefined)
      return
    }
    setTitle(title)
  }

  const handleContactChange = (contact: string) => {
    setSent(false)
    if (contact === '') {
      setContact(undefined)
      return
    }
    setContact(contact)
  }

  const handleMessageChange = (msg: string) => {
    setSent(false)
    if (msg === '') {
      setMessage(undefined)
      return
    }
    setMessage(msg)
  }

  const [sendSuccess, setSendSuccess] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const handleSend = async (title?: string, contact?: string, message?: string) => {
    setSent(true)

    setLoading(true)

    const res = await fetch('/api/contact', { body: JSON.stringify({ contact, message, title }), method: 'POST' })
    console.log(res)
    setSendSuccess(res.status === 200)
    setLoading(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Pitch us your idea.</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Input color="gray" placeholder="Title." onChange={(e) => handleTitleChange(e.target.value)} />
            <Textarea
              color="gray"
              placeholder="Describe your idea."
              onChange={(e) => handleMessageChange(e.target.value)}
            />
            <Input
              color="gray"
              placeholder="Contact information."
              onChange={(e) => handleContactChange(e.target.value)}
            />
          </VStack>
        </ModalBody>

        <Button
          _hover={{ opacity: '.6' }}
          background="primary"
          isDisabled={!title || !contact || !message}
          marginTop="10px"
          rounded="none"
          size="lg"
          onClick={() => handleSend(title, contact, message)}
        >
          <Heading color="white" size="lg">
            {isLoading ? <Spinner /> : 'Send.'}
          </Heading>
        </Button>
        {sent && !isLoading && sendSuccess && (
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>Message sent successfully.</AlertTitle>
          </Alert>
        )}
        {sent && !isLoading && !sendSuccess && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Oops, your message couldn&apos;t be sent.</AlertTitle>
          </Alert>
        )}
      </ModalContent>
    </Modal>
  )
}
