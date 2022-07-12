import { ListItem } from '@chakra-ui/react';
import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';

const tableOfContentOptions = (slug: string): Options => ({
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return <ListItem>{children}</ListItem>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <ListItem ml={5}>{children}</ListItem>;
    },
  },
});

export default tableOfContentOptions;
