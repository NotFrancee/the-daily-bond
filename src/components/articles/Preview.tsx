import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { ArticlePreview } from "../../@types";

interface Props {
  article: ArticlePreview;
}

const Preview = ({ article }: Props) => {
  const { title, slug, category, metaDescription } = article;

  return (
    <Flex flexDir={"column"} gap={5}>
      <Heading size={"sm"} to={slug} as={GatsbyLink}>
        {title}
      </Heading>
      <Text>{metaDescription.metaDescription}</Text>
      <Divider />
    </Flex>
  );
};

export default Preview;
