import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../../../components/shared';

interface Props {
  category: string;
  title: string;
}

const Article = ({ category, title }: Props) => {
  return (
    <Box bgColor={'white'}>
      <Box height={'120px'} width={'full'} bg="primary.background" />
      <ResponsiveFlex pt={2} gap={0}>
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
        <Text
          mt={1}
          textAlign={'center'}
          fontSize={'1.125rem'}
          lineHeight="1.2em"
        >
          {title}
        </Text>
      </ResponsiveFlex>
    </Box>
  );
};

export default Article;
