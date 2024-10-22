import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Import the font file
import PokemonSolidTTF from '../assets/fonts/PokemonSolid.ttf';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      '@font-face': {
        fontFamily: 'Pokemon Solid',
        src: `url(${PokemonSolidTTF}) format('truetype')`,
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      body: {
        bg: mode('white', 'gray.800')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
  fonts: {
    heading: "'Pokemon Solid', sans-serif",
    body: "'Open Sans', sans-serif",
  },
});

export default theme;
