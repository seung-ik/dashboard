import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LinkButtons from './LinkButtons';

const Nav = () => {
  return (
    <Flex direction="column" w="64" bg="purple.200" px="4" py="16">
      <Link to="/">dashboard</Link>
      <LinkButtons
        to={[
          { path: '/transaction/withdraw', name: '출금 내역 관리' },
          { path: '/transaction/swap', name: '스왑 내역 관리' },
        ]}
      >
        거래내역
      </LinkButtons>
      <LinkButtons
        to={[
          { path: '/balance/tokens', name: '토큰 리스트' },
          { path: '/balance/point', name: '포인트 지급/회수' },
          { path: '/balance/swap/token', name: '스왑 토큰 관리' },
        ]}
      >
        토큰/포인트 관리
      </LinkButtons>
      <LinkButtons
        to={[
          { path: '/users', name: '회원 리스트' },
          { path: '/users/deleted', name: '탈퇴 회원 리스트' },
        ]}
      >
        회원 관리
      </LinkButtons>
      <LinkButtons
        to={[
          { path: '/service/notice', name: '공지사항' },
          { path: '/service/faq', name: '자주 하는 질문' },
          { path: '/service/policy', name: '기본 정책 관리' },
        ]}
      >
        고객센터
      </LinkButtons>
      <LinkButtons
        to={[
          { path: '/notification/banner', name: '배너 관리' },
          { path: '/notification/popup', name: '팝업 관리' },
        ]}
      >
        팝업/배터 관리
      </LinkButtons>

      <Link to="/administrator">관리자 계정 관리</Link>
    </Flex>
  );
};

export default Nav;
