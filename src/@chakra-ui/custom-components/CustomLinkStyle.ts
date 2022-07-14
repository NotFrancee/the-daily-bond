import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomLinkStyle: ComponentStyleConfig = {
  baseStyle: {
    color: 'primary.highlight',
    textDecor: 'underline',
  },
  variants: {
    heading: {
      color: 'heading',
      // fontsize: '1rem'
      textDecor: 'none',
      textAlign: 'center',
    },
  },
};

export default CustomLinkStyle;
