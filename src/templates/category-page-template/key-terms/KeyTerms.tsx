import { Box, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';
import TermBox from './TermBox';

const sampleterms = [
  {
    title: 'Emergency Fund',
    description: `An emergency fund is money that you have set aside to cover any financial emergencies or unexpected expenses that may come up. Those can include anything that you haven't planned for, such as unexpected car repairs, medical bills, unemployment or other income loss, property damage, or family emergencies.`,
    n: 1,
  },
  {
    title: 'Emergency Fund',
    description: `An emergency fund is money that you have set aside to cover any financial emergencies or unexpected expenses that may come up. Those can include anything that you haven't planned for, such as unexpected car repairs, medical bills, unemployment or other income loss, property damage, or family emergencies.`,
    n: 2,
  },
  {
    title: 'Emergency Fund',
    description: `An emergency fund is money that you have set aside to cover any financial emergencies or unexpected expenses that may come up. Those can include anything that you haven't planned for, such as unexpected car repairs, medical bills, unemployment or other income loss, property damage, or family emergencies.`,
    n: 3,
  },
  {
    title: 'Emergency Fund',
    description: `An emergency fund is money that you have set aside to cover any financial emergencies or unexpected expenses that may come up. Those can include anything that you haven't planned for, such as unexpected car repairs, medical bills, unemployment or other income loss, property damage, or family emergencies.`,
    n: 4,
  },
];

const KeyTerms = () => {
  const tabPanelsEl = sampleterms.map((term) => (
    <TermBox key={term.n} {...term} />
  ));
  const tabsEl = sampleterms.map((item) => (
    <Tab _selected={{ bg: 'red' }} key={item.n}>
      <Box w={5} borderRadius={'100%'} h={5} bgColor="white" />
    </Tab>
  ));

  console.log({ tabPanelsEl });

  return (
    <ResponsiveFlex bgColor={'primary.background'} gap={0}>
      <H3 fontSize={'1.5rem'} fontWeight="400">
        Key Terms
      </H3>
      <Tabs variant="unstyled">
        <TabPanels p={0}>{tabPanelsEl}</TabPanels>
        <TabList justifyContent={'center'}>{tabsEl}</TabList>
      </Tabs>
    </ResponsiveFlex>
  );
};

export default KeyTerms;
