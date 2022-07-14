import { Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  children: any;
  isLast?: boolean;
  to: string;
}

const MenuItem = ({ children, isLast, to = '/', ...rest }: Props) => {
  return (
    <Text
      as={GatsbyLink}
      fontSize="0.9rem"
      activeStyle={
        {
          // color: 'green',
          // '@media screen and (minWidth: 780px)': { color: 'red' },
          // '@media screen and (maxWidth: 780px)': { color: '#ffffff' },
        }
      }
      to={to}
      {...rest}
    >
      {children}
    </Text>
  );
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
