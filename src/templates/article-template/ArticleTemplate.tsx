import { Box, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import { ArticleQuery } from '../../@types';
import Layout from '../../components/shared/Layout';
import { H1, ResponsiveFlex, SEO } from '../../components/shared';
import RichText from '../../components/shared/rich-text/body/RichText';
import MainImage from './sections/MainImage';
import TableOfContents from '../../components/shared/rich-text/table-of-contents/TableOfContents';

interface Props {
  data: ArticleQuery;
}

const ArticleTemplate = ({ data }: Props) => {
  console.log('ARTICLE', data.contentfulArticle);

  const {
    mainImage,
    title,
    category,
    body,
    seoTitle,
    metaDescription,
    slug,
    createdAt,
    updatedAt,
  } = data.contentfulArticle;

  // console.log({ createdAt, updatedAt });

  return (
    <Layout>
      <SEO
        article={true}
        description={metaDescription.metaDescription}
        title={seoTitle}
        pathName={`/${category.slug}/${slug}`}
        image={mainImage.publicUrl}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <ResponsiveFlex as={'article'}>
        <Box as="section" textAlign={'center'}>
          <Text textAlign={'center'}>{category.title}</Text>
          <H1 variant={'h1-article'}>{title}</H1>
          <MainImage mainImage={mainImage} />
        </Box>
        <TableOfContents body={body} slug={slug} />
        <RichText body={body} pt={0} width={['full', '50%']} />
      </ResponsiveFlex>
    </Layout>
  );
  // handle SEO
  // print rich text
  // design title, tags...
};

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      body {
        raw
        references {
          ... on ContentfulArticle {
            __typename
            contentful_id
            category {
              slug
            }
            slug
          }
          ... on ContentfulAsset {
            __typename
            contentful_id
            gatsbyImageData(width: 700)
            description
            publicUrl
          }
          ... on ContentfulLeadMagnet {
            __typename
            contentful_id
            heading
            text {
              text
              id
            }
            title
            type
            contentUpgrade {
              publicUrl
            }
          }
        }
      }
      category {
        title
        slug
      }
      createdAt
      seoTitle
      slug
      title
      metaDescription {
        metaDescription
        id
      }
      updatedAt
      mainImage {
        gatsbyImageData(width: 700)
        description
        publicUrl
      }
    }
  }
`;

export default ArticleTemplate;
