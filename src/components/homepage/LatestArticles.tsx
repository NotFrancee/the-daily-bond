import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ArticlePreview } from "../../@types";
import Carousel from "../carousel/Carousel";
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
        title
        category {
          title
        }
      }
    }
  }
`;

const LatestArticles = () => {
  const data = useStaticQuery<Response>(query);
  console.log(data);

  const articles = data.allContentfulArticle.nodes;
  return (
    <Flex flexDirection={"column"} bgColor="primary.background" p={5}>
      <Heading>Ultimi Articoli</Heading>
      <Carousel articles={articles} />
      <Button>Esplora</Button>
    </Flex>
  );
};

export default LatestArticles;
