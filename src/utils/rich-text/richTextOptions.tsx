import { Options } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import EmbeddedEntry from './EmbeddedEntry';
import EmbeddedAsset from './EmbeddedAsset';
import EntryHyperlink from './EntryHyperlink';
import InlinesHyperlink from './InlinesHyperlink';
import List from './List';
import ListItem from './ListItem';

export const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading fontSize={'1.75rem'} mt={5} as="h1">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading fontSize={'2xl'} mt={5} as="h2">
        {children}
      </Heading> // 2xl = 1.5 rem
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading size={'xl'} mt={2} as="h3">
        {children}
      </Heading> // same as paragraph
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text pt={3} fontSize={'xl'}>
        {children}
      </Text>
    ), // xl = 1.25rem
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
    // [MARKS.BOLD]: (text) => <Text fontWeight="bold">{text}</Text>,
  },
  renderText: (text) => {
    return text.split('\n').reduce((children: any, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};
