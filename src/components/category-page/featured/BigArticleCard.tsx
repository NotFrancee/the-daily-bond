import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../shared';

interface Props {
  title: string;
  createdAt: string;
  category: string;
  mainImage?: any;
}

const BigArticleCard = ({ title, createdAt, category }: Props) => {
  return (
    <Box>
      <Box position={'relative'} zIndex={-3}>
        <Box width={'full'} height="200px" bgColor={'orange'} />
      </Box>

      <ResponsiveFlex
        maxW={'90%'}
        // bgColor={'primary.background'}
        border="1px solid"
        borderColor={'primary.highlight'}
        mx="auto"
        // ml={-2}
        mt={'-6rem'}
        gap={0}
        position="relative"
        textAlign={'center'}
      >
        <Text
          fontWeight={'700'}
          casing="uppercase"
          fontSize={'0.75rem'}
          letterSpacing="0.04rem"
          textAlign={'center'}
          color={'primary.highlight'}
        >
          {category}
        </Text>
        <H3 lineHeight={1.15} fontWeight="400" fontSize={'1.375rem'}>
          {title}
        </H3>
        <Text mt={2} lineHeight={'1.15'} fontSize={'.75rem'}>
          Pubblicato il {createdAt}
        </Text>
        <Box
          w={'100%'}
          h="100%"
          zIndex={-1}
          bgColor={'primary.background'}
          pos="absolute"
          bottom={-2}
          right={2.5}
        />
      </ResponsiveFlex>
    </Box>
  );
};

export default BigArticleCard;
