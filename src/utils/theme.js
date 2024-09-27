import { extendTheme } from '@chakra-ui/react';
import background from '../assets/massogon.jpg';

const theme = extendTheme({
    colors: {
        brand: {
            50: "#f1faee", //pale blue
            200: "#a8dadc", //light blue
            300: "#e63946", //red
            500: "#457b9d", //medium blue
            800: "#1d3557", //dark blue
        }
    },
    styles: {
      global: (props) => ({
        'html, body': {
          
             backgroundImage: `url(${background})`,
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             height: '100vh',
             width: '100vw',
             overflowX: 'hidden',

          },
        }),
      },

    
});

export default theme