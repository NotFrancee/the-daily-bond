import { Box } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { options } from './richTextOptions';

interface Props {
  rawBody: any;
  pt?: number;
}

const RichText = ({ rawBody, ...rest }: Props) => {
  const richTextEl = renderRichText(rawBody, options);

  return (
    <Box width={['full', '50%']} mx="auto" {...rest}>
      {richTextEl}
    </Box>
  );
};

export default RichText;
