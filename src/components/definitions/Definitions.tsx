import { Box } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Section } from "../shared";
import Preview from "./Preview";

const query = graphql`
  query DefinitionsPreviews {
    allContentfulDefinition(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        slug
        title
        category {
          slug
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
  };
}

interface QueryRes {
  allContentfulDefinition: {
    nodes: Prev[];
  };
}

const Definitions = () => {
  const data = useStaticQuery<QueryRes>(query);

  const previewEl = data.allContentfulDefinition.nodes.map((def) => (
    <Preview definition={def} />
  ));
  return <Box pt={5}>{previewEl}</Box>;
};

export default Definitions;
