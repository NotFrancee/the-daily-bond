import React from 'react';
import { ResponsiveFlex } from '../../../components/shared';
import BigArticleCard from './BigArticleCard';

const sample = [
  {
    title: 'Wllug Fulmore on the costs of being queer',
    createdAt: '22 Aprile 2022',
    category: 'budgeting',
    n: 1,
  },
  {
    title: 'Wllug Fulmore on the costs of being queer',
    createdAt: '22 Aprile 2022',
    category: 'budgeting',
    n: 2,
  },
  {
    title: 'Wllug Fulmore on the costs of being queer',
    createdAt: '22 Aprile 2022',
    category: 'budgeting',
    n: 3,
  },
];

const FeaturedArticles = () => {
  const el = sample.map((item) => <BigArticleCard {...item} key={item.n} />);
  return <ResponsiveFlex>{el} </ResponsiveFlex>;
};

export default FeaturedArticles;
