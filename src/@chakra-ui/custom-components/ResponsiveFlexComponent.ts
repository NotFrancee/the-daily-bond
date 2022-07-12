import { ComponentStyleConfig } from '@chakra-ui/react';

const ResponsiveFlexComponent: ComponentStyleConfig = {
  baseStyle: {
    padding: 5,
    gap: 5,
    display: 'flex',
    flexDir: ['column', 'row'],
  },
  sizes: {},
  variants: {
    banner: {
      flexDir: 'column',
      p: 10,
      width: ['100vw', 'full'],
      mx: -5,
      my: 5,
      bgColor: 'primary.background',
    },
  },
  defaultProps: {},
};

export default ResponsiveFlexComponent;
