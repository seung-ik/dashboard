import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@style/theme';
import Router from '@pages/Router';
import { RecoilRoot } from 'recoil';

export const App = () => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </RecoilRoot>
);

// import { ColorModeSwitcher } from '@style/ColorModeSwitcher';
// <ColorModeSwitcher justifySelf="flex-end" />
