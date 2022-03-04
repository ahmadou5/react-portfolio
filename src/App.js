import { IconButton, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin,FaTelegram } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";


function App() {

  const { ColorMode, toggleColorMode } = useColorMode();

  const isDark = ColorMode === 'dark';

  return (
   <VStack p={5}>
     <Flex w="100%">
       <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Dev Ahmadou_</Heading>
       <Spacer></Spacer> 
       <IconButton ml={2} icon={<FaInstagram/>}  isRound='true'></IconButton>
       <IconButton ml={2} icon={<FaGithub/>}  isRound='true'></IconButton>
       <IconButton ml={2} icon={<FaLinkedin/>}  isRound='true'></IconButton>
       <IconButton ml={2} icon={<FaTelegram/>}  isRound='true'></IconButton>
       <IconButton ml={2}  icon={ isDark ?  <FaSun/> : <FaMoon/> } isRound='true' onClick={toggleColorMode}></IconButton>
     </Flex>
     <Header/>
     <Social />
     <Profile />
     
     
    
    
   </VStack>
  );
}

export default App;
