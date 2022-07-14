import { Block, Inline } from '@contentful/rich-text-types';
import React from 'react';
import generateId from '../../../../utils/generateId';
import { H1, H2, H3 } from '../../custom-components/StyledHeadings';

const Heading = (node: Block | Inline, children: React.ReactNode) => {
  const headingNo = node.nodeType[node.nodeType.length - 1];

  let element: React.ReactElement;
  const textArr = node.content as any;

  const id = generateId(textArr);

  switch (headingNo) {
    case '1': {
      element = (
        <H1 mt={5} id={id}>
          {children}
        </H1>
      );
      break;
    }
    case '2': {
      element = (
        <H2 variant="h2-article" mt={5} id={id}>
          {children}
        </H2>
      );
      break;
    }
    case '3': {
      element = (
        <H3 variant="h3-article" mt={3} id={id}>
          {children}
        </H3>
      );
      break;
    }
    default: {
      console.error('Error: an heading could not be distinguished. Fix this', {
        id,
        headingNo,
      });
      element = <p>error</p>;
    }
  }

  return element;
};

export default Heading;
