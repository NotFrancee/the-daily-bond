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
      flexDir: ['column', 'row'],
    },
  },
  defaultProps: {},
};

export default SectionComponent;
