import { Box } from '@chakra-ui/react';
import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { H2, ResponsiveFlex, ResponsiveGrid } from '../../../components/shared';
import Article from './Article';

interface Props {
  articles: CategoryPageQuery['allContentfulArticle']['edges'];
  categoryTitle: string;
}

const Explore = ({ articles, categoryTitle }: Props) => {
  const articlesEl = articles.map(({ node: article }) => (
    <Article key={article.slug} article={article} />
  ));

  return (
    <Box>
      <ResponsiveFlex>
        <H2>Esplora {categoryTitle}</H2>
      </ResponsiveFlex>
      <ResponsiveGrid
        gridTemplateColumns={'repeat(2, 1fr)'}
        bgColor={'gray.background'}
        gap={'1rem'}
      >
        {articlesEl}
      </ResponsiveGrid>
    </Box>
  );
};

export default Explore;
