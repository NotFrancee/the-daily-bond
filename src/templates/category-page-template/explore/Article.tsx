import { Flex, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
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
    <LinkBox boxShadow="0.25rem 0.25rem 0 rgb(0 189 231 / 10%)">
      <Flex flexDir="column" bgColor={'white'}>
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
          <Text variant={'label'} casing="uppercase">
            {category?.title}
          </Text>
          {/* RENDILO UN LINK */}
          <Text
            mt={1}
            textAlign={'center'}
            lineHeight="1.2em"
            as={GatsbyLink}
            to={`/${category?.slug}/${slug}`}
          >
            <LinkOverlay>{title}</LinkOverlay>
          </Text>
        </ResponsiveFlex>
      </Flex>
    </LinkBox>
  );
};

export default Article;
