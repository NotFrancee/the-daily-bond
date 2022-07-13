import { Box, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import { ArticlePreviewQuery } from '../../@types';
import Articles from '../../components/articles/Articles';
import CategoryPage from '../../components/category-page';
import { Layout, ResponsiveFlex, SEO } from '../../components/shared';

interface Props {
  data: ArticlePreviewQuery;
}

const info = {
  title: 'Finanza Personale',
  subTitle:
    'Se vuoi riprendere controllo delle tue finanze, devi per prima cosa imparare come gestirle. Impara quanto costa un conto corrente, come stabilire un budget, e molto altro.',
};

const index = ({ data }: Props) => {
  const articles = data.allContentfulArticle.nodes;
  return (
    <Layout>
      <SEO
        title="Finanza Personale - The Daily Bond"
        description="Esplora le nostre risorse sulla finanza personale!"
        pathName="/finanza-personale"
      />
      <CategoryPage title={info.title} subTitle={info.subTitle} />;
      {/* <ResponsiveFlex>
        <Box>
          <Heading as={'h1'}>
            Esplora gli Articoli sulla Finanza Personale
          </Heading>
          <Text>
            Come aprire un conto corrente, come risparmiare velocemente: leggi
            le nostre guide e scarica le nostre risorse gratuite!
          </Text>
        </Box>
        <Articles title="Ultimi Articoli" articles={articles} />
      </ResponsiveFlex> */}
    </Layout>
  );
};

export const query = graphql`
  query FPArticlePreviews {
    allContentfulArticle(
      filter: { category: { slug: { eq: "finanza-personale" } } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      nodes {
        slug
        title
        category {
          slug
          title
        }
        metaDescription {
          metaDescription
        }
      }
    }
  }
`;

export default index;
