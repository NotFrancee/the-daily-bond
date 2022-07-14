import React from 'react';
import { ArticlePreview } from '../../@types';
import { ResponsiveGrid } from '../shared';
import PreviewItem from './PreviewItem';

interface Props {
  articles: ArticlePreview[];
}

const Carousel = ({ articles }: Props) => {
  const ArticlesEl = articles.map((article) => (
    <PreviewItem key={article.slug} article={article} />
  ));

  return <ResponsiveGrid py={0}>{ArticlesEl}</ResponsiveGrid>;
};

export default Carousel;
