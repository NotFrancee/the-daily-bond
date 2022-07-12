import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomHeadingStyle: ComponentStyleConfig = {
  baseStyle: {
    letterSpacing: '-0.03em',
  },
  variants: {
    h1: {
      fontSize: '3xl', // 1.75rem - 3xl
      lineHeight: '125%',
    },
    h2: {
      fontSize: '2xl', // 1.5rem - 2xl
      lineHeight: '125%',
    },
    h3: {
      fontSize: 'xl', // 1.25 rem - xl
      lineHeight: '125%',
    },
    h4: {
      fontSize: 'xl', // 1.25rem - xl
      lineHeight: '125%',
    },
  },
};

export default CustomHeadingStyle;
