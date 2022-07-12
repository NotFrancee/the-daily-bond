import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import tableOfContentsOptions from './tableOfContentsOptions';
import { H2 } from '../../custom-components/StyledHeadings';
import ResponsiveFlex from '../../custom-components/ResponsiveFlex';
import { UnorderedList } from '@chakra-ui/react';

interface Props {
  body: {
    raw: any;
    references: any;
  };
  slug: string;
}

const acceptedHeadings = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];

const TableOfContents = ({ body, slug }: Props) => {
  const text = JSON.parse(body.raw);
  const headings = text.content.filter((item: any) =>
    acceptedHeadings.includes(item.nodeType),
  );

  // we're recreating the document shape of a rich text
  // and we're only including the headings.
  const document: any = {
    raw: JSON.stringify({
      nodeType: 'document',
      content: headings,
      data: {},
    }),
    references: [],
  };

  const tableOfContentEl = renderRichText(
    document,
    tableOfContentsOptions(slug),
  );
  return (
    <ResponsiveFlex w="fit-content" border="1px solid black" mx="auto">
      <H2>Indice</H2>
      <UnorderedList listStyleType={'none'} listStylePosition={'inside'}>
        {tableOfContentEl}
      </UnorderedList>
    </ResponsiveFlex>
  );
};

export default TableOfContents;
