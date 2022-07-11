import { Heading, Link } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ArticlePreview } from '../../@types';
import Carousel from '../carousel/Carousel';
import { Section } from '../shared';
interface Response {
  allContentfulArticle: {
    nodes: ArticlePreview[];
  };
}

const query = graphql`
  query ArticlePreviews {
    allContentfulArticle(limit: 3, sort: { fields: updatedAt, order: DESC }) {
      nodes {
        metaDescription {
          metaDescription
        }
        slug
        title
        category {
          title
          slug
        }
      }
    }
  }
`;

const LatestArticles = () => {
  const data = useStaticQuery<Response>(query);
  const articles = data.allContentfulArticle.nodes;

  return (
    <Section bgColor="primary.background">
      <Heading textAlign={'center'} as={'h2'}>
        Ultimi Articoli
      </Heading>
      <Carousel articles={articles} />
      <Link textAlign={'center'} href="/finanza-personale">
        Esplora Tutto
      </Link>
    </Section>
  );
};

export default LatestArticles;
