import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StyledFlex from "../shared/StyledFlex";

const LatestArticles = () => {
  return (
    <Flex flexDirection={"column"} bgColor="primary.background">
      <Heading>Ultimi Articoli</Heading>
      <Box>
        <Box>
          <Text>Articolo qui</Text>
        </Box>
      </Box>
      <Button>Esplora</Button>
    </Flex>
  );
};

export default LatestArticles;
