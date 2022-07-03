import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  type: "article" | "definition";
  article?: any;
}

// what do we need for a preview?

const PreviewItem = ({ type, article }: Props) => {
  switch (type) {
    case "article": {
      const { title, category, metaDescription } = article;
      return (
        <Flex p={5} gap={5} bgColor="white" direction="column">
          {/* IMG */}
          <Box>
            <Heading>{title}</Heading>
            <Text>{category}</Text>
          </Box>
          <Text>{metaDescription}</Text>
        </Flex>
      );
    }

    case "definition": {
      return <Text>tbcoded</Text>;
    }
    default: {
      return <Text>error</Text>;
    }
  }
};

export default PreviewItem;
