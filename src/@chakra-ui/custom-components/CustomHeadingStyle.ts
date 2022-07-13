import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomHeadingStyle: ComponentStyleConfig = {
  baseStyle: {
    // letterSpacing: '-0.03em',
    fontWeight: '400',
  },
  variants: {
    h1: {
      fontSize: '3xl', // 1.75rem - 3xl
      lineHeight: '125%',
    },
    h2: {
      fontSize: '2xl', // 1.5rem - 2xl
      lineHeight: '1.3',
    },
    h3: {
      fontSize: '1.375rem', // 1.25 rem - xl
      lineHeight: '1.5',
    },
    h4: {
      fontSize: 'xl', // 1.25rem - xl
      lineHeight: '125%',
    },
    labelHeading: {
      fontSize: '0.875rem',
      letterSpacing: '0.07rem',
      fontWeight: '600',
      fontFamily: 'body',
    },
  },
};

export default CustomHeadingStyle;
