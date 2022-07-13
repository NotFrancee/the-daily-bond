import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../shared';

interface Props {
  hasImage: boolean;
  title: string;
  category: string;
  updatedAt: string;
}

const Card = ({ hasImage, title, category, updatedAt }: Props) => {
  return (
    <Box bgColor={'white'}>
      {hasImage && (
        <Box height={'220px'} width={'full'} bg="primary.background" />
      )}
      <ResponsiveFlex gap={2}>
        <Box>
          <Text
            fontWeight={'700'}
            casing="uppercase"
            color={'primary.highlight'}
            fontSize="0.75rem"
          >
            {category}
          </Text>
          <H3
            lineHeight={'1.15'}
            fontWeight={'400'}
            fontSize={'1.375rem'}
            mt={0.5}
          >
            {title}
          </H3>
        </Box>
        <Text fontSize={'1rem'} lineHeight={'1.15'}>
          Aggiornato il {updatedAt}
        </Text>
      </ResponsiveFlex>
    </Box>
  );
};

export default Card;
