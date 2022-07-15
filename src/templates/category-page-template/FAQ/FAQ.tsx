import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { H2, ResponsiveFlex } from '../../../components/shared';
import Question from './Question';

export interface FullArticle {
  slug: string;
  category: {
    slug: string;
  };
  title: string;
}
interface IFAQ {
  question: string;
  answer: {
    raw: any;
  };
  fullArticle: FullArticle | null;
}

interface Props {
  frequentlyAskedQuestions: IFAQ[];
}

const FAQ = ({ frequentlyAskedQuestions }: Props) => {
  console.log({ frequentlyAskedQuestions });

  const accordionEls = frequentlyAskedQuestions.map(
    ({ answer, question, fullArticle }) => (
      <Question
        key={question}
        title={question}
        answer={answer}
        fullArticle={fullArticle}
      />
    ),
  );

  return (
    <ResponsiveFlex as={'section'}>
      <H2>Frequently Asked Questions</H2>
      <Accordion allowToggle>{accordionEls}</Accordion>
    </ResponsiveFlex>
  );
};

export default FAQ;
