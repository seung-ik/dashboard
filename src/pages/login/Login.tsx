import { useNavigate } from 'react-router-dom';
import { Flex, VStack, HStack, Button, Input } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Flex flex={1} direction="column" justify={'center'}>
      <HStack spacing={2}>
        <VStack spacing={2}>
          <Input focusBorderColor="purple.400" placeholder="Id" size="md" />
          <Input focusBorderColor="purple.400" placeholder="Password" size="md" />
        </VStack>
        <Button h="100%" w="24" colorScheme="purple" onClick={() => navigate('/')}>
          로그인
        </Button>
      </HStack>
    </Flex>
  );
};

export default Login;
