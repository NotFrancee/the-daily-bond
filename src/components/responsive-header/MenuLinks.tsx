import { Box, Stack, Button } from "@chakra-ui/react";
import React from "react";
import MenuItem from "./MenuItem";

interface Props {
  isOpen: boolean;
}

const MenuLinks = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/finanza-personale">Finanza Personale</MenuItem>
        <MenuItem to="/impara">Impara la Finanza</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
