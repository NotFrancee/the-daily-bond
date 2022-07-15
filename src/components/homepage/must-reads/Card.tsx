import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { HomepageMustReadsQuery } from '../../../../gatsby-graphql';
import { H3 } from '../../shared';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  article: HomepageMustReadsQuery['allContentfulArticle']['edges'][0]['node'];
}

const Card = ({ article: { title, category, slug, updatedAt } }: Props) => {
  const url = `/${category?.slug}/${slug}`;
  return (
    <Box
      py={3}
      textAlign="center"
      as="article"
      borderBottom={'1px solid #d4d4d4'}
    >
      <Text variant="label">{category?.title}</Text>
      <H3
        // border={'1px solid red'}
        as={GatsbyLink}
        to={url}
        fontSize="1.4375rem"
      >
        {title}
      </H3>
      <Text
        mt={1}
        // border={'1px solid red'}
        lineHeight={'1.15'}
        fontSize={'.75rem'}
      >
        Aggiornato il{' '}
        <Text
          as="span"
          lineHeight={'1.15'}
          fontSize={'.75rem'}
          casing={'capitalize'}
        >
          {updatedAt}
        </Text>
      </Text>
    </Box>
  );
};

export default Card;
