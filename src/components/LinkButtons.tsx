import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  to: { path: string; name: string }[];
}
const LinkButtons: React.FC<Props> = ({ children, to }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Text onClick={() => setIsOpen((prev) => !prev)}>{children}</Text>
      {isOpen && (
        <Flex direction="column" pl="4">
          {to.map(({ path, name }, idx) => (
            <Link key={`${name}-${idx}`} to={path}>
              {name}
            </Link>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default LinkButtons;
