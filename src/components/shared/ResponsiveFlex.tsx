import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

type Props = any;

const ResponsiveFlex = (props: Props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('ResponsiveFlex', { variant });

  return <Box __css={styles} {...rest} />;
};

export default ResponsiveFlex;
