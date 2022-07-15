import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { ResponsiveFlex } from '../../../components/shared';
import { Link as GatsbyLink } from 'gatsby';
interface Props {
  article: CategoryPageQuery['allContentfulArticle']['edges'][0]['node'];
}

const Article = ({ article: { title, category, mainImage, slug } }: Props) => {
  return (
    <Flex flexDir="column" bgColor={'white'} as="article">
      <Image
        as={GatsbyImage}
        image={mainImage?.gatsbyImageData}
        alt={mainImage?.description || 'Article Main Image'}
        // width="100%"
        // maxW="100%"
        // w={'50px'}
        height="100px"
        // objectFit={'contain'}
      />
      <ResponsiveFlex
        pt={2}
        gap={0}
        justifyContent="space-around"
        height="calc(100% - 100px)"
      >
        <Text
          variant={'label'}
          as={GatsbyLink}
          to={`/${category?.slug}`}
          casing="uppercase"
        >
          {category?.title}
        </Text>
        <Link
          variant={'heading'}
          mt={1}
          lineHeight="1.2em"
          as={GatsbyLink}
          to={`/${category?.slug}/${slug}`}
        >
          {title}
        </Link>
      </ResponsiveFlex>
    </Flex>
  );
};

export default Article;
