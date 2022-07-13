import { Box } from '@chakra-ui/react';
import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { H2, ResponsiveGrid } from '../../../components/shared';
import Card from './Card';

// const responsiveLayout: GridProps = {
//   gridTemplateColumns: ['1fr'],
// };

interface Props {
  articles: CategoryPageQuery['allContentfulArticle']['edges'];
}

const MustReads = ({ articles }: Props) => {
  const cardsEl = articles.map(({ node: article }, index) => (
    <Card
      key={article.slug}
      category={article.category?.title}
      title={article.title}
      updatedAt={article.updatedAt}
      index={index}
    />
  ));
  return (
    <Box bgColor={'gray.background'}>
      <Box p={5} pb={0}>
        <H2 variant={'labelHeading'}>
          {/* YOUR GUIDE TO SPENDING AND SAVING MONEY */}
          INIZIA QUI
        </H2>
      </Box>

      <ResponsiveGrid gap={2}>{cardsEl}</ResponsiveGrid>
    </Box>
  );
};

export default MustReads;
