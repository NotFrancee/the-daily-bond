import { Skeleton } from '@chakra-ui/react';
import React from 'react';

const FallbackComponent = (
  <Skeleton w={'full'} height="100vh">
    Loading...
  </Skeleton>
);

export default FallbackComponent;
