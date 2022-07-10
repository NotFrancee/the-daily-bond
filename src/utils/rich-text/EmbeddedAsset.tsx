import { Box } from '@chakra-ui/react';
import { Block, Inline } from '@contentful/rich-text-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const EmbeddedAsset = (node: Block | Inline, children: React.ReactNode) => {
  const { description, gatsbyImageData } = node.data.target;

  return (
    <Box width={['full', '50%']} margin="auto">
      <GatsbyImage image={gatsbyImageData} alt={description} />
    </Box>
  );
};

export default EmbeddedAsset;
