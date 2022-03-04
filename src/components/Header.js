import React from 'react'
import { Stack, useColorMode,Circle,Box,Text, Flex,Image, Button } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark  = colorMode === 'dark';

  const  [ isNotSmallerScreen ]  = useMediaQuery("(min-width:600px)");
 
  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf='flex-start'>
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r,cyan.400, blue.500, purple.600)" bgClip="text">Ahmad Auwal Abubakar</Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Blockchain Developer,Js FullStack Developer. Founder of VolcanicFinance Protocol,Blockchain Developer @ https://CryptoBankAfric.com, Enterpreneur.   </Text>
          <Button mt={8} colorScheme="blue" onClick={ () => window.open("https://github.com/ahmadou5")}>Hire Me</Button>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadiud='full' backgroundColor="transparent" boxShadow="lg" boxSize="300px"  src=''  />

      </Flex>

    </Stack>
  )
}

export default Header