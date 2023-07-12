import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Sidebar from '@sections/Sidebar';
import Header from '@sections/Header';

const Layout = () => {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Flex direction="column" flex={1}>
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
