import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { ListItem } from '@chakra-ui/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import generateId from '../../../../utils/generateId';

const createSection = (
  node: Block | Inline,
  children: React.ReactNode,
  slug: string,
) => {
  const leftMargin = node.nodeType === 'heading-3' ? 5 : 0;
  const textArr = node.content as any;

  const id = generateId(textArr);

  const destination = `../${slug}#${id}`;

  // return (
  //   <AnchorLink stripHash={true} to={destination}>
  //     {children}
  //   </AnchorLink>
  // );
  return (
    <ListItem ml={leftMargin}>
      <AnchorLink stripHash to={destination}>
        {children}
      </AnchorLink>
    </ListItem>
  );
};

export default createSection;
