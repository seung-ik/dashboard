import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@style/theme';
import Router from '@pages/Router';

export const App = () => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </RecoilRoot>
);
