import { Box, GridProps, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

interface Props extends GridProps {
  variant?: string;
}

const ResponsiveFlex = (props: Props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('ResponsiveFlex', { variant });

  return <Box __css={styles} {...rest} />;
};

export default ResponsiveFlex;
