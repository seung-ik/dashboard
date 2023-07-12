import { useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import AlertButton from '@articles/AlertButton';

const Header = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate('/login');
  };

  return (
    <Flex bg="gray.100" height={16} align={'center'} justify="flex-end" p={4}>
      <AlertButton
        btnName="Logout"
        alertTitle="Logout"
        alertText="로그아웃 하시겠습니까?"
        callback={onLogoutClick}
      />
    </Flex>
  );
};

export default Header;
