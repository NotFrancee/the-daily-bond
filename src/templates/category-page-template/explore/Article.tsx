import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../../../components/shared';

interface Props {
  category: string | undefined | null;
  title: string | undefined | null;
}

const Article = ({ category, title }: Props) => {
  return (
    <Flex
      flexDir="column"
      bgColor={'white'}
      boxShadow="0.25rem 0.25rem 0 rgb(0 189 231 / 10%)"
    >
      <Box height={'120px'} width={'full'} bg="primary.background" />
      <ResponsiveFlex
        border="1px solid red"
        pt={2}
        gap={0}
        justifyContent="space-around"
        height="calc(100% - 120px)"
      >
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
    </Flex>
  );
};

export default Article;
