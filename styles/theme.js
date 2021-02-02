import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
      },
      body: {
        bg: mode('white', '#282828')(props),
      },
    }),
  },
  breakpoints: {
    lg: '70em',
    xl: '100em',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
  fonts: {
    heading: 'Lora',
    // body: 'Karla',
    body: 'Karla',
    span: 'Roboto Mono',
  },
  fontSizes: {
    sm: '0.9rem',
  },
  gray: {
    dark: '#686868',
    light: '#c0c0c0',
  },
});

export default theme;
