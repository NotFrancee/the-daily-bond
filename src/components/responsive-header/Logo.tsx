import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Text } from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Text as={GatsbyLink} to="/" {...props}>
      The Daily Bond
    </Text>
  );
};

export default Logo;
