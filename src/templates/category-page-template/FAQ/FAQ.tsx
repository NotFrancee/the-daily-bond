import React from 'react';
import { H3, ResponsiveFlex } from '../../../components/shared';
import Questions from './Questions';

const FAQ = () => {
  return (
    <ResponsiveFlex>
      <H3 fontSize={'1.5rem'} fontWeight={'400'} lineHeight={'1.3'}>
        Frequently Asked Questions
      </H3>
      <Questions />
    </ResponsiveFlex>
  );
};

export default FAQ;
