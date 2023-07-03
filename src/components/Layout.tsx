import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Flex height="100vh">
      <Nav />
      <Flex direction="column" flex={1}>
        <Flex bg="gray.100" height={16} align={'center'} justify="flex-end" p={4}>
          <Link to="/login">로그아웃</Link>
        </Flex>
        <Flex flex={1} width={'100%'}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
