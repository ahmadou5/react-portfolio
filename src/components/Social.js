import { HStack, Icon } from '@chakra-ui/react'
import {  FaGoogle,  FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import React from 'react'

function Social() {
  return (
     <HStack spacing="13">
        <Icon as={FaTwitter} boxSize="50"></Icon>
        <Icon as={FaLinkedin} boxSize="50"></Icon>
        <Icon as={FaGoogle} boxSize="50"></Icon>
        <Icon as={FaInstagram} boxSize="50"></Icon>
     </HStack>
  )
}

export default Social
