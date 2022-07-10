import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const EntryHyperlink = (node: Block | Inline, children: React.ReactNode) => {
  console.log({ node, children });
  const { __typename } = node.data.target;

  switch (__typename) {
    case 'ContentfulArticle': {
      const { slug, category } = node.data.target;
      const url = `/${category.slug}/${slug}`;

      return (
        <Link to={url} as={GatsbyLink}>
          {children}
        </Link>
      );
    }
  }
};

export default EntryHyperlink;
