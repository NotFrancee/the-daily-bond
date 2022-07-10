import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomButtonStyle: ComponentStyleConfig = {
  variants: {
    'primary-btn': {
      bg: 'primary.highlight',
      color: 'white',
      fontFamily: 'heading',
      fontWeight: 'bold',
      _hover: {
        border: '2px solid',
        borderColor: 'primary.highlight',
        color: 'primary.highlight',
        bg: 'transparent',
      },
    },
  },
  defaultProps: {
    variant: 'primary-btn',
  },
};

export default CustomButtonStyle;
