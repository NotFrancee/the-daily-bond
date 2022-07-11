import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Heading } from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Heading as={GatsbyLink} to="/" size={'md'} {...props}>
      The Daily Bond
    </Heading>
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
