import { Block, Inline } from '@contentful/rich-text-types';
import React from 'react';
import { H1, H2, H3 } from '../../StyledHeadings';

const Heading = (node: Block | Inline, children: React.ReactNode) => {
  const headingNo = node.nodeType[node.nodeType.length - 1];

  let element: React.ReactElement;
  const textArr = node.content as any;

  const id = textArr.reduce((result: any, element: any) => {
    if (element.nodeType !== 'text') return result;

    const regExp = / /g;
    const string = element.value.replace(regExp, '-').toLowerCase();
    console.log('this and pre string', string, element.value);

    console.log('RESULT FROM THIS REDUCE ITERATION: ', result + string);
    return result + string;
  }, '');

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
        <H2 mt={5} id={id}>
          {children}
        </H2>
      );
      break;
    }
    case '3': {
      console.log('creating h3, ', id);

      element = (
        <H3 mt={3} id={id}>
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
