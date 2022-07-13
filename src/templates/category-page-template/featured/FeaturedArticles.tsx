import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { ResponsiveFlex } from '../../../components/shared';
import BigArticleCard from './BigArticleCard';

interface Props {
  articles: CategoryPageQuery['allContentfulArticle']['edges'];
}

const FeaturedArticles = ({ articles }: Props) => {
  const articlesEl = articles.map(({ node: article }) => (
    <BigArticleCard
      key={article.slug}
      title={article.title}
      category={article.category?.title}
      createdAt={article.createdAt}
    />
  ));
  return <ResponsiveFlex>{articlesEl} </ResponsiveFlex>;
};

export default FeaturedArticles;
