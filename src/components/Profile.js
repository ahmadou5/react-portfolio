import { Heading, Icon } from '@chakra-ui/react';
import React from 'react'
import { useMediaQuery, Flex, Box, Text,} from '@chakra-ui/react'
import { DiWebplatform, } from 'react-icons/di';
import { SiSolidity } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

function Profile() {

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");


  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="90%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
        <Box alignSelf="center" px="23" py="12">
          <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
            2+
          </Heading>
          <Text fontSize="2x1" color="grey.400"> Year Of Experiance </Text>
        </Box>
        <Box alignSelf="center" px="32" py="16" >
          <Text fontWeight="bold" fontSize="2x1">Blockchain  and Front-End Developer. specialised in DApp development</Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.100" }}>
              <Icon color="black" p="4" as={DiWebplatform} w="24" h="24" />
              <Text color="black" p="4" fontSize="x1" fontWeight="semibold">WebApp</Text>
            </Flex>
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0 } bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400"}} > 
              <Icon color="black" p="4" as={SiSolidity} w="24" h="24" />
              <Text color="black" p="4" fontSize="x1" fontWeight="semibold">Smart Contracts</Text>
            </Flex>
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0 } bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={ {bg: "teal.400"}}>
              <Icon color="black" p="4" as={FaEthereum} w="24" h="24" />
              <Text color="black" p="4" fontSize="x1" fontWeight="semibold">DApp</Text>
            </Flex>
          </Flex>
        </Box>
    </Flex>
  )
}

export default Profile