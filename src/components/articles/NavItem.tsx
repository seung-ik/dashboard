import React from 'react';
import { Flex, Menu, MenuButton, Icon, Text, ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  icon: ComponentWithAs<'svg', IconProps> | IconType;
  active: boolean;
  path?: string;
}

const NavItem: React.FC<Props> = ({ title, icon, active = false, path }) => {
  const getItem = () => {
    return (
      <Flex>
        <Menu placement="right">
          <Flex
            backgroundColor={active ? 'gray.100' : 'none'}
            p={2}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: 'gray.100' }}
            w="100%"
            alignSelf={'center'}
          >
            <MenuButton>
              <Flex align="center" gap={3}>
                <Icon as={icon} w={6} h={6}></Icon>
                <Text fontWeight="normal" fontSize="lg">
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </Flex>
        </Menu>
      </Flex>
    );
  };

  if (path) {
    return <RouterLink to={path}>{getItem()}</RouterLink>;
  }
  return getItem();
};

export default NavItem;
