import { TabList, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { H2, ResponsiveFlex } from '../../../components/shared';
import TabSelector from './TabSelector';
import TermBox from './TermBox';

interface KeyTerm {
  title: string;
  slug: string;
  mainText: {
    raw: any;
  };
}

interface Props {
  keyTerms: KeyTerm[];
}

const KeyTerms = ({ keyTerms }: Props) => {
  const tabPanelsEl = keyTerms.map(({ slug, title, mainText }) => (
    <TermBox key={slug} slug={slug} title={title} mainText={mainText} />
  ));

  const tabsEl = keyTerms.map(({ slug }) => <TabSelector key={slug} />);

  console.log({ tabPanelsEl });

  return (
    <ResponsiveFlex bgColor={'primary.background'} gap={0}>
      <H2>Key Terms</H2>
      <Tabs variant="unstyled" mt={1}>
        <TabPanels>{tabPanelsEl}</TabPanels>
        <TabList mt={3} justifyContent={'center'}>
          {tabsEl}
        </TabList>
      </Tabs>
    </ResponsiveFlex>
  );
};

export default KeyTerms;
