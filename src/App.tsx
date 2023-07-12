import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@style/theme';
import Router from '@pages/Router';
import Modal from '@components/Modal';
import { RecoilRoot } from 'recoil';

export const App = () => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Router />
      <Modal />
    </ChakraProvider>
  </RecoilRoot>
);

// import { ColorModeSwitcher } from '@style/ColorModeSwitcher';
// <ColorModeSwitcher justifySelf="flex-end" />
