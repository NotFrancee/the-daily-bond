import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Text } from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Text as={GatsbyLink} to="/" {...props}>
      The Daily Bond
    </Text>
  );
  // return (
  //   <Link as={GatsbyLink} to="/">
  //     <Heading as={"p"} size={"md"}>
  //       The Daily Bond
  //     </Heading>
  //   </Link>
  // );
};

export default Logo;
