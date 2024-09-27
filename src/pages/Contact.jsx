import { Box, Flex, Heading, Button, VStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email:', formData);
    // Temporarily remove EmailJS for debugging
    setFormData({ user_name: '', user_email: '', message: '' });
    form.current.reset();
  };

  return (
    <Flex justifyContent="center" alignItems="center" py={8}>
      <Box bg="gray.700" color="gray.50" borderRadius="md" boxShadow="xl" px={8} py={10} maxW="900px" w="full">
        <Heading textAlign="center" mb={8} fontSize="3xl" color="teal.300">Get in Touch</Heading>
        <Wrap spacing={10}>
          <WrapItem>
            <VStack spacing={5} alignItems="flex-start">
              <Button as="a" href="tel:+15039602857" size="lg" variant="link" color="teal.300" leftIcon={<MdPhone size="24px" />}>
                +1 503-960-2857
              </Button>
              <Button as="a" href="mailto:eduardovelez11759@gmail.com" size="lg" variant="link" color="teal.300" leftIcon={<MdEmail size="24px" />}>
                eduardovelez11759@gmail.com
              </Button>
              <Button as="a" href="https://www.google.com/search?q=Longview+Washington" target="_blank" size="lg" variant="link" color="teal.300" leftIcon={<MdLocationOn size="24px" />}>
                Longview, Washington
              </Button>
            </VStack>
          </WrapItem>

          <WrapItem>
            <Box bg="gray.50" borderRadius="lg" boxShadow="lg" p={6} w="full">
              <VStack spacing={5}>
                <form ref={form} onSubmit={sendEmail}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <BsPerson color="gray.400" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        value={formData.user_name}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="email" isRequired mt={4}>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineEmail color="gray.400" />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email"
                        value={formData.user_email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="message" isRequired mt={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="teal.400"
                    color="white"
                    mt={6}
                    w="full"
                    _hover={{ bg: 'teal.500' }}
                  >
                    Send Message
                  </Button>
                </form>
              </VStack>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Flex>
  );
};

export default Contact;
