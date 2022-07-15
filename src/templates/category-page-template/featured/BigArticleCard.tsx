import { Box, Image, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { H3, ResponsiveFlex } from '../../../components/shared';

interface Props {
  article: CategoryPageQuery['allContentfulArticle']['edges'][0]['node'];
}

const BigArticleCard = ({
  article: { title, category, updatedAt, mustRead, slug, createdAt, mainImage },
}: Props) => {
  return (
    <Box as="article">
      <Image
        as={GatsbyImage}
        image={mainImage?.gatsbyImageData}
        alt={mainImage?.description || 'article image'}
        width="100%"
        height="200px "
        objectFit={'contain'}
        zIndex={-3}
        position="relative"
      />

      <ResponsiveFlex
        maxW={'90%'}
        border={'2px solid'}
        borderColor={'primary.highlight'}
        mx="auto"
        mt={'-6rem'}
        gap={0}
        position="relative"
        textAlign={'center'}
        as="article"
        lineHeight={1.15}
      >
        <Text casing={'uppercase'} variant="label">
          {category?.title}
        </Text>
        <H3 as={GatsbyLink} lineHeight={1.15} to={`/${category?.slug}/${slug}`}>
          {title}
        </H3>
        <Text mt={2} lineHeight={'1.15'} fontSize={'.75rem'}>
          Pubblicato il{' '}
          <Text
            as="span"
            lineHeight={'1.15'}
            fontSize={'.75rem'}
            casing={'capitalize'}
          >
            {createdAt}
          </Text>
        </Text>
        <Box
          w="100%"
          h="100%"
          zIndex={-1}
          bgColor={'primary.background'}
          pos="absolute"
          bottom={-2}
          right={2.5}
        />
      </ResponsiveFlex>
    </Box>
  );
};

export default BigArticleCard;
