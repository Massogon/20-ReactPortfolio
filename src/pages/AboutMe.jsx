import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import photoofme from '../assets/photoofme.jpg';

export default function AboutMe() {
  return (
    <Box p={8} bg="gray.800" borderRadius="lg" boxShadow="lg" mt={6} maxW='800px' mx='auto'>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Image 
          src={photoofme} 
          alt="Image of Me" 
          boxSize="220px" 
          borderRadius="full" 
          boxShadow="lg"
          objectFit="cover"
          mr={5}
          mb={6}
        />
        <Box textAlign="left" mb={6}>
          <Heading as="h1" size="2xl" color="teal.300" mb={4}>
            Eduardo Mauricio Velez Murillo
          </Heading>
          <Text fontSize="lg" color="gray.200" mb={4}>
            I'm a highly motivated ambitious individual whose sole purpose is to excel in life. And I promise, I will succeed.
          </Text>
          <Text fontSize="lg" color="gray.200" mb={4}>
            When not coding, I run a towing company in Portland, OR. I also like to ride motorcycles fast.
          </Text>
          <Text fontSize="lg" color="gray.200" mb={4}>
            I enjoy pushing myself to the limit, whether it's through coding or riding. My passion for excellence drives me in everything I do. 
          </Text>
          <Text fontSize="lg" color="gray.200">
            Let me know when you want to go out riding, have a project you want me to work on, or just want to hang out.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
