import { Box } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { options } from './richTextOptions';

interface Props {
  body: any;
  pt?: number;
}

const RichText = ({ body, ...rest }: Props) => {
  const richTextEl = renderRichText(body, options);

  return (
    <Box width={['full', '50%']} mx="auto" {...rest}>
      {richTextEl}
    </Box>
  );
};

export default RichText;
