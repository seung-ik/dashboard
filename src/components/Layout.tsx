import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import Nav from './Nav';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelRef = React.useRef(null);

  return (
    <Flex height="100vh">
      {/* 사이드 네비게이션 */}
      <Nav />

      <Flex direction="column" flex={1}>
        {/* 헤더 */}
        <Flex bg="gray.100" height={16} align={'center'} justify="flex-end" p={4}>
          {/* <Link to="/login">로그아웃</Link> */}
          <Button colorScheme="red" onClick={onOpen}>
            Logout
          </Button>

          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Logout
                </AlertDialogHeader>

                <AlertDialogBody>로그아웃 하시겠습니까?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      onClose();
                      navigate('/login');
                    }}
                    ml={3}
                  >
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>

        {/* 컨텐츠 */}
        <Flex flex={1}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
