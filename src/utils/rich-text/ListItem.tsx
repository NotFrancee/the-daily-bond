import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { ListItem as ChakraListItem } from '@chakra-ui/react';

const ListItem = (node: Block | Inline, children: React.ReactNode) => {
  return <ChakraListItem>{children}</ChakraListItem>;
};

export default ListItem;
