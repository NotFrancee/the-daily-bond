import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

interface Props {
  article: {
    title: string;
    slug: string;
    category: {
      slug: string;
      title: string;
    };
    metaDescription: {
      metaDescription: string;
    };
  };
}

const Preview = ({ article }: Props) => {
  const { title, slug, category } = article;
  // const url = `${category.slug}/${slug}`;
  return (
    <Flex flexDir={"column"}>
      <Box>
        <Heading size={"sm"} to={slug} as={Link}>
          {title}
        </Heading>
      </Box>
    </Flex>
  );
};

export default Preview;
