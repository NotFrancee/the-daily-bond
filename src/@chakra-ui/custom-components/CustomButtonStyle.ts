import { ComponentStyleConfig } from "@chakra-ui/react";

const CustomButtonStyle: ComponentStyleConfig = {
  variants: {
    "primary-btn": {
      bg: "primary.highlight",
      color: "white",
      fontFamily: "heading",
      fontWeight: "bold",
    },
  },
  defaultProps: {
    variant: "primary-btn",
  },
};

export default CustomButtonStyle;
