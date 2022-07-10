import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { OrderedList, UnorderedList } from '@chakra-ui/react';

const List = (node: Block | Inline, children: React.ReactNode) => {
  console.log('ordered list data', node, children);
  const { nodeType } = node;

  if (nodeType === 'ordered-list') return <OrderedList>{children}</OrderedList>;

  if (nodeType === 'unordered-list')
    return <UnorderedList>{children}</UnorderedList>;
};

export default List;
