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
        title="Mercati - The Daily Bond"
        description="Esplora i nostri articoli sui mercati finanziari!"
        pathName="/mercati"
      />
      <Section>
        <Box>
          <Heading as={"h1"}>
            Esplora gli Articoli sui Mercati Finanziari
          </Heading>
          <Text>
            Il mondo delle crypto, le banche centrali e molto altro: impara
            tutto sull'economia mondiale!
          </Text>
        </Box>
        <Articles title="Ultimi Articoli" articles={articles} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query MArticlePreviews {
    allContentfulArticle(
      filter: { category: { slug: { eq: "mercati" } } }
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
