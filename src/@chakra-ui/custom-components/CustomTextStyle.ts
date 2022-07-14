import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomTextStyle: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: '1.5',
    fontSize: '1rem',
  },
  variants: {
    label: {
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.04rem',
      textAlign: 'center',
      color: 'primary.highlight',
    },
  },
  defaultProps: {},
};

export default CustomTextStyle;
