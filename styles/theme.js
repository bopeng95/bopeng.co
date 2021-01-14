// import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        boxSizing: 'border-box',
      },
      body: {
        bg: mode('white', 'gray.900')(props),
      },
    }),
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
});

export default theme;
