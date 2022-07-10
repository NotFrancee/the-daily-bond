import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { ListItem as ChakraListItem } from '@chakra-ui/react';

const ListItem = (node: Block | Inline, children: React.ReactNode) => {
  console.log('ordered list item data', node, children);

  return <ChakraListItem>{children}</ChakraListItem>;
};

export default ListItem;
