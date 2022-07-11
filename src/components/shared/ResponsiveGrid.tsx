import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

type Props = any;

const ResponsiveGrid = (props: Props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('ResponsiveGrid', { variant });

  return <Box __css={styles} {...rest} />;
};

export default ResponsiveGrid;
