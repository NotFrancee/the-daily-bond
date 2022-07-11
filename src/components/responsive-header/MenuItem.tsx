import { Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  children: any;
  isLast?: boolean;
  to: string;
}

const MenuItem = ({ children, isLast, to = '/', ...rest }: Props) => {
  return (
    <Heading
      size={'sm'}
      as={GatsbyLink}
      activeStyle={{ color: '#48BB78' }}
      to={to}
      {...rest}
    >
      {children}
    </Heading>
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
