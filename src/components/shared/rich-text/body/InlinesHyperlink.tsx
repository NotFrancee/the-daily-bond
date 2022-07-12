import React from 'react';
import { Block, Inline } from '@contentful/rich-text-types';
import { Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const InlinesHyperlink = (node: Block | Inline, children: React.ReactNode) => {
  const uri = node.data.uri as string;
  const external = uri.substring(0, 5) === 'https';

  if (external)
    return (
      <Link href={uri} target="_blank" rel="noopener noreferrer">
        {children}
        {/* <ExternalLinkIcon boxSize={"10px"} /> */}
      </Link>
    );

  return (
    <Link as={GatsbyLink} to={uri}>
      {children}
    </Link>
  );
};

export default InlinesHyperlink;
