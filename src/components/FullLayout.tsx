import React from 'react';
import { VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const FullLayout = () => {
  return (
    <VStack h="100vh">
      <Outlet />
    </VStack>
  );
};

export default FullLayout;
