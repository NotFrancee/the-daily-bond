import { Box } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Section } from "../shared";
import Preview from "./Preview";

const query = graphql`
  query ArticlesPreviews {
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

interface Prev {
  title: string;
  slug: string;
  category: {
    slug: string;
    title: string;
  };
  metaDescription: {
    metaDescription: string;
  };
}

interface QueryRes {
  allContentfulArticle: {
    nodes: Prev[];
  };
}

interface Props {
  categorySlug: string;
}

const Articles = ({ categorySlug }: Props) => {
  console.log("this should show only the ", categorySlug);
  const data = useStaticQuery<QueryRes>(query);

  // FILTER DATA BASED ON CATEGORY PROP

  const previewEl = data.allContentfulArticle.nodes.map((art) => (
    <Preview key={art.slug} article={art} />
  ));
  return <Box pt={5}>{previewEl}</Box>;
};

export default Articles;
