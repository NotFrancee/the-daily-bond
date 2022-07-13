import React from 'react';
import { ResponsiveGrid } from '../../shared';
import Article from './Article';

const sample = [
  {
    title: 'Can you use foodstamps online?',
    category: 'budgeting',
    n: 1,
  },
  {
    title: 'Can you use foodstamps online?',
    category: 'budgeting',
    n: 2,
  },
  {
    title: 'Can you use foodstamps online?',
    category: 'budgeting',
    n: 3,
  },
  {
    title: 'Can you use foodstamps online?',
    category: 'budgeting',
    n: 4,
  },
];

const Articles = () => {
  const els = sample.map((item) => <Article key={item.n} {...item} />);
  return (
    <ResponsiveGrid
      gridTemplateColumns={'repeat(2, 1fr)'}
      bgColor={'gray.background'}
      gap={'1rem'}
    >
      {els}
    </ResponsiveGrid>
  );
};

export default Articles;
