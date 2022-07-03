import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import MenuIcon from "./MenuIcon";
import React from "react";

interface Props {
  toggle: any;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
