import { Heading } from '@chakra-ui/react';
import React from 'react';
import { ArticlePreview } from '../../@types';
import { ResponsiveFlex } from '../shared';
import Preview from './Preview';

interface Props {
  articles: ArticlePreview[];
  title: string;
}

const Articles = ({ articles, title }: Props) => {
  // console.log(articles);
  const previewEl = articles.map((article) => (
    <Preview key={article.slug} article={article} />
  ));
  return (
    <ResponsiveFlex p={0}>
      <Heading as="h2" pb={5} size="lg">
        {title}
      </Heading>
      {previewEl}
    </ResponsiveFlex>
  );
};

export default Articles;
