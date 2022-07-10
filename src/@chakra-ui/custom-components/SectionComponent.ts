import { ComponentStyleConfig } from '@chakra-ui/react';

const SectionComponent: ComponentStyleConfig = {
  baseStyle: {
    padding: 5,
    gap: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  sizes: {},
  variants: {
    responsive: {
      border: '2px solid orange',
    },
  },
  defaultProps: {},
};

export default SectionComponent;
