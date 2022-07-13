import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H1, ResponsiveFlex, SEO } from '../shared';

interface Props {
  title: string;
  subTitle: string;
}

const CategoryPage = ({ title, subTitle }: Props) => {
  return (
    <ResponsiveFlex>
      {/* <SEO />  */}
      <Box textAlign={'center'}>
        <H1>{title}</H1>
        <Text lineHeight={'base'} color={'gray.subHeading'}>
          {subTitle}
        </Text>
      </Box>
      <Text>more here</Text>
    </ResponsiveFlex>
  );
};

export default CategoryPage;
