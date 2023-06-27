import { extendTheme } from '@chakra-ui/react';

const themes = {
  styles: {
    global: {
      'html, body': {
        // backgroundColor: 'gold',
      },
      a: {},
      h1: {},
    },
  },
};

const theme = extendTheme(themes);
export default theme;
