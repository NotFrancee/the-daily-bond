import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';

interface Props {
  title: string | null | undefined;
  createdAt: string | null | undefined;
  category: string | null | undefined;
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
        <Text casing={'uppercase'} variant="label">
          {category}
        </Text>
        <H3 as={'p'} lineHeight={1.15}>
          {title}
        </H3>
        <Text mt={2} lineHeight={'1.15'} fontSize={'.75rem'}>
          Pubblicato il{' '}
          <Text
            as="span"
            lineHeight={'1.15'}
            fontSize={'.75rem'}
            casing={'capitalize'}
          >
            {createdAt}
          </Text>
        </Text>
        <Box
          w="100%"
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
