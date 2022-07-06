import { Box, Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { ArticlePreviewQuery } from "../../@types";
import Articles from "../../components/articles/Articles";
import { Layout, Section, SEO } from "../../components/shared";

interface Props {
  data: ArticlePreviewQuery;
}

const index = ({ data }: Props) => {
  const articles = data.allContentfulArticle.nodes;
  return (
    <Layout>
      <SEO
        title="Finanza Personale - The Daily Bond"
        description="Esplora le nostre risorse sulla finanza personale!"
        pathName="/finanza-personale"
      />
      <Section>
        <Box>
          <Heading as={"h1"}>
            Esplora gli Articoli sulla Finanza Personale
          </Heading>
          <Text>
            Come aprire un conto corrente, come risparmiare velocemente: leggi
            le nostre guide e scarica le nostre risorse gratuite!
          </Text>
        </Box>
        <Articles title="Ultimi Articoli" articles={articles} />
      </Section>
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
