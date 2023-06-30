import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@style/theme';
import Router from '@pages/Router';
import Nav from '@components/Nav';
import Layout from '@components/Layout';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Router />
    </Layout>
  </ChakraProvider>
);

// import { ColorModeSwitcher } from '@style/ColorModeSwitcher';
// <ColorModeSwitcher justifySelf="flex-end" />
