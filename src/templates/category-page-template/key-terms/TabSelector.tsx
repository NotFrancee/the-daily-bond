import { Box, Tab } from '@chakra-ui/react';
import React from 'react';

const TabSelector = ({ ...props }) => {
  return (
    <Tab {...props} _selected={{ '#circle': { bgColor: 'primary.highlight' } }}>
      <Box
        id="circle"
        width={4}
        height={4}
        borderRadius={'100%'}
        border="2px solid white"
      />
    </Tab>
  );
};

export default TabSelector;
