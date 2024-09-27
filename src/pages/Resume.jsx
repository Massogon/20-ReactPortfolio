import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import resumeFile from '../assets/myresume.pdf';

export default function Resume() {
  return (
    <Box p={8} bg="gray.800" borderRadius="lg" boxShadow="lg" mt={6} maxW="900px" mx="auto">
      <VStack spacing={6} align="center">
        {/* Resume Heading */}
        <Heading size="2xl" color="teal.300" mb={4}>
          My Resume
        </Heading>
        
        <Text fontSize="lg" color="gray.200" textAlign="center">
          Below is a preview of my resume. Feel free to download it for a detailed look.
        </Text>
        
        {/* Resume Preview using iframe */}
        <Box w="full" h="500px" border="2px" borderColor="gray.600" borderRadius="lg" overflow="hidden">
          <iframe
            src={resumeFile}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume Preview"
          ></iframe>
        </Box>
        
        {/* Download Button */}
        <Button as="a" href={resumeFile} download="Resume.pdf" colorScheme="teal" mt={4}>
          Download Resume
        </Button>
      </VStack>
    </Box>
  );
}
