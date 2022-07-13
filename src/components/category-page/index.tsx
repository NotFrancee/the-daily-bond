import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H1, ResponsiveFlex, SEO } from '../shared';
import Cards from './articles/Cards';
import Explore from './explore/Explore';
import FAQ from './FAQ/FAQ';
import KeyTerms from './key-terms/KeyTerms';

interface Props {
  title: string;
  subTitle: string;
}

const CategoryPage = ({ title, subTitle }: Props) => {
  return (
    <>
      {/* <SEO />  */}
      <ResponsiveFlex textAlign={'center'}>
        <H1 mb={1} fontWeight={'400'} fontSize="1.75rem" lineHeight={'31px'}>
          {title}
        </H1>
        <Text
          mb={4}
          fontSize={'1rem'}
          lineHeight={'24px'}
          color={'gray.subHeading'}
        >
          {subTitle}
        </Text>
      </ResponsiveFlex>
      <Cards />
      <FAQ />
      <KeyTerms />
      <Explore />
      <Text>more here</Text>
    </>
  );
};

export default CategoryPage;
