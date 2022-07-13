import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';
import React from 'react';
interface Props extends BoxProps {
  variant?: string;
}

const ResponsiveGrid = (props: Props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('ResponsiveGrid', { variant });

  return <Box __css={styles} {...rest} />;
};

export default ResponsiveGrid;
