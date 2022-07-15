import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { ArticlePreview } from '../../@types';
import { Link as GatsbyLink } from 'gatsby';
import { H3 } from '../shared';

interface Props {
  article: ArticlePreview;
}

const PreviewItem = ({ article }: Props) => {
  // console.log("article to preview", article);
  const { title, metaDescription, category, slug } = article;
  return (
    <Flex p={5} gap={5} bgColor="white" direction="column" rounded={'md'}>
      {/* IMG */}
      <Box>
        <H3
          textDecor={'underline'}
          color={'heading'}
          as={GatsbyLink}
          to={`/${category.slug}/${slug}`}
        >
          {title}
        </H3>
        <Text fontWeight={'bold'} color={'primary.highlight'}>
          <GatsbyLink to={`/${category.slug}/${category.title}`}>
            {category.title}
          </GatsbyLink>
        </Text>
      </Box>
      <Text>{metaDescription.metaDescription}</Text>
      <Link color={'primary.highlight'} href={`/${category.slug}/${slug}`}>
        Leggi
      </Link>
    </Flex>
  );
};

export default PreviewItem;
