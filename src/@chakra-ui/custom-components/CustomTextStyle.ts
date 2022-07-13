import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomTextStyle: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: '175%',
  },
  variants: {
    subheading: {},
    body: {
      fontSize: 'xl',
    },
  },
  defaultProps: {
    variant: 'body',
  },
};

export default CustomTextStyle;
