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
    banner: {
      p: 10,
      width: ['100vw', 'full'],
      mx: -5,
      my: 5,
      bgColor: 'primary.background',
    },
  },
  defaultProps: {},
};

export default SectionComponent;
