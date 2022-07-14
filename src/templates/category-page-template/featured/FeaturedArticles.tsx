import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { H2, ResponsiveFlex } from '../../../components/shared';
import BigArticleCard from './BigArticleCard';

interface Props {
  articles: CategoryPageQuery['allContentfulArticle']['edges'];
}

const FeaturedArticles = ({ articles }: Props) => {
  const articlesEl = articles.map(({ node: article }) => (
    <BigArticleCard article={article} key={article.slug} />
  ));
  return (
    <ResponsiveFlex as={'section'}>
      <H2>I Nostri Preferiti</H2>
      {articlesEl}{' '}
    </ResponsiveFlex>
  );
};

export default FeaturedArticles;
