import { ComponentStyleConfig } from "@chakra-ui/react";

const CustomButtonStyle: ComponentStyleConfig = {
  variants: {
    "primary-btn": {
      bg: "primary.highlight",
      // color: "white",
      border: "1px solid red",
    },
  },
  defaultProps: {
    // variant: "primary-btn",
  },
};

export default CustomButtonStyle;
