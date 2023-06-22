import * as React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '@style/ColorModeSwitcher';
import theme from '@style/theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        DashBoard
      </Grid>
    </Box>
  </ChakraProvider>
);
