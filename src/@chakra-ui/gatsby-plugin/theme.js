// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
import { CustomButtonStyle } from "../custom-components";

const theme = {
  colors: {
    primary: {
      highlight: "rebeccapurple",
      background: "green.100",
    },
  },
  components: {
    Button: CustomButtonStyle,
  },
};

export default extendTheme(theme);
