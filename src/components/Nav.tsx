import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Nav = () => {
  return (
    <div
      style={{
        border: '2px solid black',
        width: '284px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Link to="/" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Box flex={1} textAlign="left">
                dashboard
              </Box>
              <AiOutlineRight size={12} />
            </Link>
          </AccordionButton>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              거래 내역
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Stack pl={4}>
              <Link to="/transaction/swap">스왑 내역</Link>
              <Link to="/transaction/withdraw">출금 내역</Link>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Link to="/administrator" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Box flex={1} textAlign="left">
                관리자 계정 관리
              </Box>
              <AiOutlineRight size={12} />
            </Link>
          </AccordionButton>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Nav;
