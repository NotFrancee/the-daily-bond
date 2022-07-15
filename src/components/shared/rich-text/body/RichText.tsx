import { Box, BoxProps } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { options } from './richTextOptions';

interface Props extends BoxProps {
  body: any;
}

const RichText = ({ body, ...rest }: Props) => {
  const richTextEl = renderRichText(body, options);

  return (
    <Box as={'section'} mx="auto" {...rest}>
      {richTextEl}
    </Box>
  );
};

export default RichText;
