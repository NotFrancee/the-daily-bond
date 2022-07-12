import { Options } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Text } from '@chakra-ui/react';
import React from 'react';
import EmbeddedEntry from './EmbeddedEntry';
import EmbeddedAsset from './EmbeddedAsset';
import EntryHyperlink from './EntryHyperlink';
import InlinesHyperlink from './InlinesHyperlink';
import List from './List';
import ListItem from './ListItem';
import Heading from './Heading';

export const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: Heading,
    [BLOCKS.HEADING_2]: Heading,
    [BLOCKS.HEADING_3]: Heading,
    [BLOCKS.PARAGRAPH]: (node, children) => <Text pt={3}>{children}</Text>, // xl = 1.25rem
    [BLOCKS.OL_LIST]: List,
    [BLOCKS.UL_LIST]: List,
    [BLOCKS.LIST_ITEM]: ListItem,
    [INLINES.HYPERLINK]: InlinesHyperlink,
    [INLINES.ENTRY_HYPERLINK]: EntryHyperlink,
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      console.log('STILL TO IMPLEMENT');
      return <Text>IMPLEMENT</Text>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: EmbeddedEntry,
    [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
  },
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Text as="span" fontWeight={'bold'}>
        {text}
      </Text>
    ),
    // [MARKS.BOLD]: (text) => <Text fontWeight="bold">{text}</Text>,
  },
  renderText: (text) => {
    return text.split('\n').reduce((children: any, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};
