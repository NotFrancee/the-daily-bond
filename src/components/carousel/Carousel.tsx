import React from 'react';
import { ArticlePreview } from '../../@types';
import ResponsiveGrid from '../shared/ResponsiveGrid';
import PreviewItem from './PreviewItem';

interface Props {
  articles: ArticlePreview[];
}

const Carousel = ({ articles }: Props) => {
  // console.log({ articles });
  const ArticlesEl = articles.map((article) => (
    <PreviewItem key={article.slug} article={article} />
  ));
  // console.log(ArticlesEl);

  return <ResponsiveGrid>{ArticlesEl}</ResponsiveGrid>;
};

export default Carousel;
