import { ComponentStyleConfig } from "@chakra-ui/react";

const SectionComponent: ComponentStyleConfig = {
  baseStyle: {
    padding: 5,
    gap: 5,
    border: "1px solid red",
  },
  sizes: {},
  variants: {
    responsive: {
      border: "2px solid orange",
    },
  },
  defaultProps: {},
};

export default SectionComponent;
