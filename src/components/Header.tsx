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
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelRef = React.useRef(null);

  return (
    <Flex bg="gray.100" height={16} align={'center'} justify="flex-end" p={4}>
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
  );
};

export default Header;
