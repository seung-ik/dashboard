import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, Text } from '@chakra-ui/react';
import { Paths } from '@pages/Router';

interface Props {
  children: React.ReactNode;
  info: { path: Paths; title: string }[];
  currentPath: string;
}
const LinkButtons: React.FC<Props> = ({ children, info, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Text onClick={() => setIsOpen((prev) => !prev)}>{children}</Text>
      {isOpen && (
        <Flex direction="column" w="100%" borderLeft="1px solid gray" ml={5} gap={1}>
          {info.map(({ path, title }, idx) => (
            <RouterLink key={`${title}-${idx}`} to={path} style={{ width: '100%' }}>
              <Menu>
                <Link w="100%">
                  <MenuButton
                    w="90%"
                    h={8}
                    bg={currentPath === path ? 'gray.100' : ''}
                    _hover={{ textDecor: 'none', backgroundColor: 'gray.100' }}
                    py={5}
                    borderRightRadius={8}
                  >
                    <Flex align="center" gap={3} pl={4}>
                      <Text>{title}</Text>
                    </Flex>
                  </MenuButton>
                </Link>
              </Menu>
            </RouterLink>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default LinkButtons;
