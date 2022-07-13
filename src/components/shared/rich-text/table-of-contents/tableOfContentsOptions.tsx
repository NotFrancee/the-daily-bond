import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import createSection from './createSection';

const tableOfContentOptions = (slug: string): Options => ({
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return createSection(node, children, slug);
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return createSection(node, children, slug);
    },
  },
});

export default tableOfContentOptions;
