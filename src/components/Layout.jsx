import Header from './Header';
import { Box, Container } from '@chakra-ui/react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}