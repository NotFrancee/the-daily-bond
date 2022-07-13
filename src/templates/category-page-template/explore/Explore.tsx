import { Box } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';
import Articles from './Articles';

const Explore = () => {
  return (
    <Box>
      <ResponsiveFlex>
        <H3 fontSize={'1.5rem'} fontWeight={'400'} lineHeight={'1.3'}>
          Esplora Finanza Personale
        </H3>
      </ResponsiveFlex>
      <Articles />
    </Box>
  );
};

export default Explore;
