import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';

interface Props {
  title: string | null | undefined;
  category: string | null | undefined;
  updatedAt: string | null | undefined;
  index: number;
}

const Card = ({ index, title, category, updatedAt }: Props) => {
  return (
    <Box bgColor={'white'}>
      {index < 3 && (
        <Box height={'220px'} width={'full'} bg="primary.background" />
      )}
      <ResponsiveFlex gap={2}>
        <Box>
          <Text variant={'label'} casing="uppercase">
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
