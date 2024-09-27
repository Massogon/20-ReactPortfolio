import { Box, Flex, Image, Link, HStack } from '@chakra-ui/react';
import evtowing from '../assets/evtowing.png'; // Import your image
import { Link as RouterLink } from 'react-router-dom'; // Import react-router-dom Link for navigation

export default function Header() {
  return (
    <Box position="relative" w="100%" bg="gray.900" p={6}>
      <Flex justify="space-between" align="center">
        {/* Left: Towing Company Image with Link */}
        <Link href="https://www.evtowingpnw.com/" isExternal>
          <Image 
            src={evtowing} 
            alt="EV Towing" 
            boxSize="100px" 
            objectFit="cover" 
            borderRadius="md" 
            boxShadow="lg" 
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.3s ease"
          />
        </Link>

        {/* Center: Larger Navigation Links */}
        <HStack spacing={20} mx="auto">
          <Link as={RouterLink} to="/" color="teal.300" fontSize="3xl" _hover={{ color: 'teal.500' }}>
            About Me
          </Link>
          <Link as={RouterLink} to="/portfolio" color="teal.300" fontSize="3xl" _hover={{ color: 'teal.500' }}>
            Portfolio
          </Link>
          <Link as={RouterLink} to="/resume" color="teal.300" fontSize="3xl" _hover={{ color: 'teal.500' }}>
            Resume
          </Link>
          <Link as={RouterLink} to="/contact" color="teal.300" fontSize="3xl" _hover={{ color: 'teal.500' }}>
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
