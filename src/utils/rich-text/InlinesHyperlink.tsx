import React from "react";
import { Block, Inline, Node } from "@contentful/rich-text-types";
import { Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const InlinesHyperlink = (node: Block | Inline, children: React.ReactNode) => {
  // console.log({ node, children });
  // const { __typename } = node.data.target;

  // switch (__typename) {
  //   case "ContentfulArticle": {
  //     const { slug, category } = node.data.target;
  //     const url = `/${category.slug}/${slug}`;

  //     return (
  //       <Link to={url} as={GatsbyLink}>
  //         {children}
  //       </Link>
  //     );
  //   }
  // }
  const uri = node.data.uri as string;
  const external = uri.substring(0, 5) === "https";

  if (external)
    return (
      <Link href={uri} target="_blank" rel="noopener noreferrer">
        {children}
        {/* <ExternalLinkIcon boxSize={"10px"} /> */}
      </Link>
    );

  return (
    <Link as={GatsbyLink} to={uri}>
      {children}
    </Link>
  );
};

export default InlinesHyperlink;
