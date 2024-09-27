import { NavLink } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

// 50: "#f1faee", //pale blue
// 200: "#a8dadc", //light blue
// 300: "#e63946", //red
// 500: "#457b9d", //medium blue
// 800: "#1d3557", //dark blue

export default function Nav() {
  const buttonStyles = {
    inactiveLink: {
      fontSize: "1.1rem",
      backgroundColor: "#a8dadc",
      color: "#1d3557",
      _hover: {
        backgroundColor: "#a8dadc",
        fontColor: "brand.800",
      },
      },
      activeLink: {
        fontSize: "1.5rem",
        backgroundColor: "#f1faee",
        color: "#e63946",
      },
  }

    return (
      <Flex as="nav" className="navbar-links" gap={5} position="relative" 
                          direction={['column', 'row']}
                          justify={['center', 'flex-end']}
                          align='left'
                          w='100%'
                          pt={[4,0]}
                          pr={[0,4]}
                          >
          <Button aria-label="About Me" as={NavLink} to="/" style={({ isActive }) => (isActive ? buttonStyles.activeLink : buttonStyles.inactiveLink)}>
            About Me
          </Button>
          <Button aria-label="Portfolio" as={NavLink} to="/portfolio" style={({ isActive }) => (isActive ? buttonStyles.activeLink : buttonStyles.inactiveLink)}>
            Portfolio
          </Button>
          <Button aria-label="Resume" as={NavLink} to="/resume" style={({ isActive }) => (isActive ? buttonStyles.activeLink : buttonStyles.inactiveLink)}>
            Resume
          </Button>
          <Button aria-label="Contact" as={NavLink} to="/contact" style={({ isActive }) => (isActive ? buttonStyles.activeLink : buttonStyles.inactiveLink)}>
            Contact
          </Button>
        </Flex>





      );
    }
    