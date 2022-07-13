import { Block, Inline } from '@contentful/rich-text-types';
import React from 'react';
import LeadMagnet from '../../../newsletter/LeadMagnet';

const EmbeddedEntry = (node: Block | Inline, children: React.ReactNode) => {
  const type = node.data.target.__typename;
  switch (type) {
    case 'ContentfulLeadMagnet': {
      const { heading, text, contentUpgrade } = node.data.target;

      return (
        <LeadMagnet
          title={heading}
          description={text.text}
          contentUpgrade={contentUpgrade?.publicUrl}
        />
      );
    }
    default: {
      console.log('an error occurred');
    }
  }
};

export default EmbeddedEntry;
