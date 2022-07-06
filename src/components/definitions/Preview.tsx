import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { DefinitionPreview } from "../../@types";
import { Section } from "../shared";

interface Props {
  definition: DefinitionPreview;
}

const Preview = ({ definition }: Props) => {
  const { title, slug, category } = definition;
  const url = `/${category.slug}/${slug}`;

  return (
    <Section p={0}>
      <Box>
        <Heading size={"sm"} to={url} as={GatsbyLink}>
          {title}
        </Heading>
      </Box>
    </Section>
  );
};

export default Preview;
