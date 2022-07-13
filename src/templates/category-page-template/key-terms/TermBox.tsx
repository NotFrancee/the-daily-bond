import { Link, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';
import RichText from '../../../components/shared/rich-text/body/RichText';
import { Link as GatbsyLink } from 'gatsby';

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
    <TabPanel p={0} {...props}>
      <ResponsiveFlex bg={'white'} gap={0}>
        <H3 as="p">{title}</H3>
        <RichText body={mainText} />
        <Link as={GatbsyLink} to={`/definizione/${slug}`}>
          Leggi di più
        </Link>
      </ResponsiveFlex>
    </TabPanel>
  );
};

export default TermBox;
