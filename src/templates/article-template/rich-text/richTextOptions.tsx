import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Heading, Text, Link } from "@chakra-ui/react";
import React from "react";

export const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h1">{children}</Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2">{children}</Heading>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;

      return (
        <Link color={"primary.highlight"} href={uri}>
          {children}
        </Link>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <Text fontWeight="bold">{text}</Text>,
  },
};
