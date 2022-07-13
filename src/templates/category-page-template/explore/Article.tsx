import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../../../components/shared';

interface Props {
  category: string | undefined | null;
  title: string | undefined | null;
}

const Article = ({ category, title }: Props) => {
  return (
    <Box bgColor={'white'} boxShadow="0.25rem 0.25rem 0 rgb(0 189 231 / 10%)">
      <Box height={'120px'} width={'full'} bg="primary.background" />
      <ResponsiveFlex pt={2} gap={0}>
        <Text variant={'label'} casing="uppercase">
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
