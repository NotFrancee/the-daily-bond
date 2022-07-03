import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      p={5}
      borderBottom="1px solid gray"
    >
      <Heading as={"p"} size={"md"}>
        The Daily Bond
      </Heading>
      <Text>Menu</Text>
    </Flex>
  );
};

export default Header;
