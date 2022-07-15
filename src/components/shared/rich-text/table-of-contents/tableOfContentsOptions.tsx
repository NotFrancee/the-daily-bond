import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import createAnchorLink from './createAnchorLink';

const tableOfContentOptions = (slug: string): Options => ({
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return createAnchorLink(node, children, slug);
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return createAnchorLink(node, children, slug);
    },
  },
});

export default tableOfContentOptions;
