import { Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import { ArticleQuery } from '../../@types';
import Layout from '../../components/shared/Layout';
import { ResponsiveFlex, SEO } from '../../components/shared';
import RichText from '../../utils/rich-text/RichText';
import MainImage from './sections/MainImage';
import TableOfContents from '../../utils/table-of-contents/TableOfContents';

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
      <ResponsiveFlex>
        <Text textAlign={['left', 'center']}>{category.title}</Text>
        <Heading textAlign={['left', 'center']} as={'h1'}>
          {title}
        </Heading>
        <MainImage mainImage={mainImage} />
        <TableOfContents body={body} slug={slug} />
        <RichText body={body} pt={0} />
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
