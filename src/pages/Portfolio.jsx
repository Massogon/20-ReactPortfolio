import { Box, Image, Link, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import gifRater from '../assets/gifrater.jpeg';
import battleship from '../assets/battleship.png';
import hannahBallroom from '../assets/hannahballroom.jpeg';

export default function Portfolio() {
  const projects = [
    {
      name: 'Gif Rater',
      image: gifRater,
      link: 'https://github.com/Massogon/gif-rater',
    },
    {
      name: 'Goat Battleship',
      image: battleship,
      link: 'https://github.com/Massogon/goat-battleship',
    },
    {
      name: 'Hannah Smith Ballroom',
      image: hannahBallroom,
      link: 'https://github.com/Massogon/hannah-smith-ballroom',
    },
  ];

  return (
    <Box p={8} bg="gray.800" borderRadius="lg" boxShadow="lg" mt={6} maxW="900px" mx="auto">
      <Heading size="2xl" color="teal.300" mb={6} textAlign="center">
        My Projects
      </Heading>
      
      {/* Grid of Projects */}
      <SimpleGrid columns={[1, 2]} spacing={8}>
        {projects.map((project) => (
          <VStack key={project.name} spacing={4} align="center">
            {/* Image as a clickable link */}
            <Link href={project.link} isExternal>
              <Image 
                src={project.image} 
                alt={project.name} 
                boxSize="250px" 
                objectFit="cover" 
                borderRadius="md" 
                boxShadow="lg" 
                _hover={{ transform: 'scale(1.05)' }}
                transition="all 0.3s ease"
              />
            </Link>
            {/* Project name as a clickable link */}
            <Link href={project.link} isExternal fontSize="lg" color="teal.300" _hover={{ color: 'teal.500' }}>
              {project.name}
            </Link>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
