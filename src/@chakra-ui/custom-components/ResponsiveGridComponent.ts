import { ComponentStyleConfig } from '@chakra-ui/react';

const ResponsiveGridComponent: ComponentStyleConfig = {
  baseStyle: {
    padding: 5,
    gap: 5,
    display: 'grid',
  },
  sizes: {},
  variants: {
    responsive: {
      gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
    },
  },
  defaultProps: {
    variant: 'responsive',
  },
};

export default ResponsiveGridComponent;
