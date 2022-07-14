import { Link, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';
import RichText from '../../../components/shared/rich-text/body/RichText';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  title: string;
  mainText: {
    raw: any;
  };
  children?: any;
  slug: string;
}

const TermBox = ({ title, mainText, slug, children, ...props }: Props) => {
  return (
    <TabPanel as={'article'} p={0} {...props}>
      <ResponsiveFlex bg={'white'} gap={0}>
        <H3 as={GatsbyLink} to={`/definizione/${slug}`}>
          {title}
        </H3>
        <RichText body={mainText} />
        <Link as={GatsbyLink} to={`/definizione/${slug}`}>
          Leggi di più
        </Link>
      </ResponsiveFlex>
    </TabPanel>
  );
};

export default TermBox;
