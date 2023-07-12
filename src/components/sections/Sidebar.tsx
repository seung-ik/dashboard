import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { RiDashboardLine, RiQuestionAnswerLine } from 'react-icons/ri';
import {
  GrTransaction,
  GrWaypoint,
  GrUserSettings,
  GrNotification,
  GrSecure,
} from 'react-icons/gr';
import { Paths } from '@pages/Router';
import NavItem from '@articles/NavItem';
import MenuButtons from '@articles/MenuButtons';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Flex direction="column" w="64" px="4" py="16" gap={3} borderRight="0.5px solid gray">
      <NavItem
        title="대시보드"
        icon={RiDashboardLine}
        active={pathname === Paths.Dashboard}
        path={Paths.Dashboard}
      />
      <MenuButtons
        currentPath={pathname}
        info={[
          {
            path: Paths.WithdrawTx,
            title: '출금 내역 관리',
          },
          {
            path: Paths.SwapTx,
            title: '스왑 내역 관리',
          },
        ]}
      >
        <NavItem title="거래내역" icon={GrTransaction} active={false} />
      </MenuButtons>
      <MenuButtons
        currentPath={pathname}
        info={[
          { path: Paths.TokenBalance, title: '토큰 리스트' },
          { path: Paths.PointBalance, title: '포인트 지급 / 회수' },
          { path: Paths.SwapToken, title: '스왑 토큰 관리' },
        ]}
      >
        <NavItem title="토큰 / 포인트 관리" icon={GrWaypoint} active={false} />
      </MenuButtons>
      <MenuButtons
        currentPath={pathname}
        info={[
          { path: Paths.User, title: '회원 리스트' },
          { path: Paths.DeletedUser, title: '탈퇴 회원 리스트' },
        ]}
      >
        <NavItem title="회원 관리" icon={GrUserSettings} active={false} />
      </MenuButtons>
      <MenuButtons
        currentPath={pathname}
        info={[
          { path: Paths.Notice, title: '공지사항' },
          { path: Paths.FAQ, title: '자주 하는 질문' },
          { path: Paths.Policy, title: '기본 정책 관리' },
        ]}
      >
        <NavItem title="고객센터" icon={RiQuestionAnswerLine} active={false} />
      </MenuButtons>
      <MenuButtons
        currentPath={pathname}
        info={[
          { path: Paths.Banner, title: '배너 관리' },
          { path: Paths.Popup, title: '팝업 관리' },
        ]}
      >
        <NavItem title="팝업 / 배너 관리" icon={GrNotification} active={false} />
      </MenuButtons>
      <NavItem
        title="관리자 계정 관리"
        icon={GrSecure}
        active={pathname === Paths.Administrator}
        path={Paths.Administrator}
      />
    </Flex>
  );
};

export default Sidebar;
