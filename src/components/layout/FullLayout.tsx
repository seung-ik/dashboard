import { Outlet } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

const FullLayout = () => {
  return (
    <VStack h="100vh">
      <Outlet />
    </VStack>
  );
};

export default FullLayout;
