import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  definition: {
    title: string;
    slug: string;
    category: {
      slug: string;
    };
  };
}

const Preview = ({ definition }: Props) => {
  const { title, slug, category } = definition;
  const url = `${category.slug}/${slug}`;
  return (
    <Flex flexDir={"column"}>
      <Box>
        <Heading size={"sm"} href={url} as={Link}>
          {title}
        </Heading>
      </Box>
    </Flex>
  );
};

export default Preview;
