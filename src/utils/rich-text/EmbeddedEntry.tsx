import { Text } from "@chakra-ui/react";
import { RenderNode } from "@contentful/rich-text-react-renderer";
import { Block, Inline, Node } from "@contentful/rich-text-types";
import React from "react";
import ContentUpgrade from "../../components/newsletter/ContentUpgrade";
import NewsletterBanner from "../../components/newsletter/NewsletterBanner";

const EmbeddedEntry = (node: Block | Inline, children: React.ReactNode) => {
  const { type } = node.data.target;

  switch (type) {
    case "content-upgrade-banner": {
      const { heading, text, contentUpgrade } = node.data.target;

      return (
        <ContentUpgrade
          title={heading}
          description={text.text}
          contentUpgrade={contentUpgrade.publicUrl}
        />
      );
    }
    case "newsletter-banner": {
      const { heading, text } = node.data.target;

      return <NewsletterBanner title={heading} description={text.text} />;
    }
    default:
      console.log(
        "Some error occured while trying to render a block entry in the article"
      );
  }
  return <Text>ciao</Text>;
};

export default EmbeddedEntry;
