import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@style/theme';
import Router from '@pages/Router';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);

// import { ColorModeSwitcher } from '@style/ColorModeSwitcher';
// <ColorModeSwitcher justifySelf="flex-end" />
