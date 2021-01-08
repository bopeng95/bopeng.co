import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
};

export default theme;
