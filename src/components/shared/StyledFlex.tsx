import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const StyledFlex = ({ children }: Props) => (
  <Flex flexDirection={"column"} p={5}>
    {children}
  </Flex>
);

export default StyledFlex;
