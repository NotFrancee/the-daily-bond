import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { CategoryPageQuery } from '../../../../gatsby-graphql';
import { H3, ResponsiveFlex } from '../../../components/shared';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';
interface Props {
  index: number;
  article: CategoryPageQuery['allContentfulArticle']['edges'][0]['node'];
}

const Card = ({
  article: { title, category, updatedAt, mainImage, slug },
  index,
}: Props) => {
  return (
    <Box as="article" bgColor={'white'}>
      {index < 3 && (
        <Image
          as={GatsbyImage}
          image={mainImage?.gatsbyImageData}
          alt={mainImage?.description || 'Article Image'}
          height={'220px'}
        />
      )}
      <ResponsiveFlex textAlign={'center'} gap={2}>
        <Box>
          <Text
            variant={'label'}
            as={GatsbyLink}
            to={`/${category?.slug}`}
            casing="uppercase"
          >
            {category?.title}
          </Text>
          <H3
            // as={GatsbyLink}
            lineHeight={'1.15'}
            fontWeight={'400'}
            mt={0.5}
          >
            <GatsbyLink to={`/${category?.slug}/${slug}`}>{title}</GatsbyLink>
          </H3>
        </Box>
        <Text lineHeight={'1.15'}>Aggiornato il {updatedAt}</Text>
      </ResponsiveFlex>
    </Box>
  );
};

export default Card;
