import React from 'react';
import { forwardRef, Heading, HeadingProps } from '@chakra-ui/react';

const H1 = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  return (
    <Heading
      // border={'1px solid red'}
      variant={'h1'}
      ref={ref}
      as="h1"
      {...props}
    ></Heading>
  );
});

const H2 = forwardRef<HeadingProps, 'h2'>((props, ref) => {
  return (
    <Heading
      // border={'1px solid red'}
      variant="h2"
      ref={ref}
      as="h2"
      {...props}
    ></Heading>
  );
});
const H3 = forwardRef<HeadingProps, 'h3'>((props, ref) => {
  return (
    <Heading
      // border={'1px solid red'}
      variant="h3"
      ref={ref}
      as="h3"
      {...props}
    ></Heading>
  );
});

export { H1, H2, H3 };
