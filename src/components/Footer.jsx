import { Box, Link, Flex, Icon } from '@chakra-ui/react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerStyles = {
    bg: "gray.900",
    color: "gray.300",
    py: "6", // Increased padding for better spacing with larger icons
    mt: "auto",
    width: "100%",
    bottom: "0",
  };
  const linkStyles = {
    color: "teal.300",
    _hover: {
      color: "teal.500",
    },
  };

  return (
    <Box {...footerStyles}>
      <Flex justify="center" gap={10}> {/* Increased gap between the icons */}
        <Link href="https://github.com/Massogon" isExternal {...linkStyles}>
          <Icon as={FaGithub} boxSize={12} /> {/* Icons are now larger */}
        </Link>
        <Link href="https://www.youtube.com/@massogon" isExternal {...linkStyles}>
          <Icon as={FaYoutube} boxSize={12} /> {/* Icons are now larger */}
        </Link>
      </Flex>
    </Box>
  );
}
