import { Box, GridProps } from '@chakra-ui/react';
import React from 'react';
import { H2, ResponsiveGrid } from '../../../components/shared';
import Card from './Card';

const samplearticles = [
  {
    title: 'How To St Financial Goals You Can (Actually) Achieve',
    category: 'Budgeting',
    updatedAt: '23 Aprile, 2022',
    hasImage: true,
  },
  {
    title: 'How To Set Finncial Goals You Can (Actually) Achieve',
    category: 'Budgeting',
    updatedAt: '23 Aprile, 2022',
    hasImage: true,
  },
  {
    title: 'How To Set Financial Goas You Can (Actually) Achieve',
    category: 'Budgeting',
    updatedAt: '23 Aprile, 2022',
    hasImage: false,
  },
  {
    title: 'Hw To Set Financial Goals You Can (Actually) Achieve',
    category: 'Budgeting',
    updatedAt: '23 Aprile, 2022',
    hasImage: false,
  },
];

const responsiveLayout: GridProps = {
  gridTemplateColumns: ['1fr'],
};

interface Props {
  topArticles?: any;
}

const StartHere = ({ topArticles }: Props) => {
  const cardsEl = samplearticles.map((article) => (
    <Card key={article.title} {...article} />
  ));
  return (
    <Box bgColor={'gray.background'}>
      <Box p={5} pb={0}>
        <H2
          fontSize={'0.875rem'}
          letterSpacing="0.07rem"
          fontWeight={'600'}
          mb={2}
        >
          YOUR GUIDE TO SPENDING AND SAVING MONEY
        </H2>
      </Box>

      <ResponsiveGrid gap={2}>{cardsEl}</ResponsiveGrid>
    </Box>
  );
};

export default StartHere;
