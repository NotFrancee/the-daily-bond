import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ArticlePreview } from '../../@types';
import PreviewItem from './PreviewItem';

const testArticle = {
  title: 'test article',
  metaDescription: 'lorem ipsum dolor sit amet',
  category: 'Personal Finance',
  mainImage: '',
};

interface Props {
  articles: ArticlePreview[];
}

const Carousel = ({ articles }: Props) => {
  // console.log({ articles });
  const ArticlesEl = articles.map((article) => (
    <PreviewItem key={article.slug} article={article} />
  ));
  // console.log(ArticlesEl);

  return (
    <Flex p={5} gap={5} direction="column">
      {ArticlesEl}
    </Flex>
  );
};

export default Carousel;
