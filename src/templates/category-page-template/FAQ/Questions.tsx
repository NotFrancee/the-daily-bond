import { Accordion } from '@chakra-ui/react';
import React from 'react';
import Question from './Question';

const sampleQ = [
  {
    title: 'How should a beginner budget?',
    answer:
      'An individual’s budget will vary depending on their lifestyle, spending habits, and net income. To start a budget, you need to take a deep dive into how you spend your money, which includes gathering all of your bills and pay stubs. When you have all of your bills and pay stubs, write down all monthly expenses. Then, write down your monthly income. Subtract the expenses from how much money you make. If the number is less than zero, you are spending more money than you make and it is time to reevaluate your spending and saving habits. A beginner can use a budgeting spreadsheet, calculator, or various applications to assist in the process',
    readMore: 'LINK',
  },
  {
    title: 'How should a beginner budgt?',
    answer:
      'An individual’s budget will vary depending on their lifestyle, spending habits, and net income. To start a budget, you need to take a deep dive into how you spend your money, which includes gathering all of your bills and pay stubs. When you have all of your bills and pay stubs, write down all monthly expenses. Then, write down your monthly income. Subtract the expenses from how much money you make. If the number is less than zero, you are spending more money than you make and it is time to reevaluate your spending and saving habits. A beginner can use a budgeting spreadsheet, calculator, or various applications to assist in the process',
    readMore: 'LINK',
  },
  {
    title: 'How should a beginer budget?',
    answer:
      'An individual’s budget will vary depending on their lifestyle, spending habits, and net income. To start a budget, you need to take a deep dive into how you spend your money, which includes gathering all of your bills and pay stubs. When you have all of your bills and pay stubs, write down all monthly expenses. Then, write down your monthly income. Subtract the expenses from how much money you make. If the number is less than zero, you are spending more money than you make and it is time to reevaluate your spending and saving habits. A beginner can use a budgeting spreadsheet, calculator, or various applications to assist in the process',
    readMore: 'LINK',
  },
  {
    title: 'How sld a bginner budget?',
    answer:
      'An individual’s budget will vary depending on their lifestyle, spending habits, and net income. To start a budget, you need to take a deep dive into how you spend your money, which includes gathering all of your bills and pay stubs. When you have all of your bills and pay stubs, write down all monthly expenses. Then, write down your monthly income. Subtract the expenses from how much money you make. If the number is less than zero, you are spending more money than you make and it is time to reevaluate your spending and saving habits. A beginner can use a budgeting spreadsheet, calculator, or various applications to assist in the process',
    readMore: 'LINK',
  },
  {
    title: 'How shul a beginner budget?',
    answer:
      'An individual’s budget will vary depending on their lifestyle, spending habits, and net income. To start a budget, you need to take a deep dive into how you spend your money, which includes gathering all of your bills and pay stubs. When you have all of your bills and pay stubs, write down all monthly expenses. Then, write down your monthly income. Subtract the expenses from how much money you make. If the number is less than zero, you are spending more money than you make and it is time to reevaluate your spending and saving habits. A beginner can use a budgeting spreadsheet, calculator, or various applications to assist in the process',
    readMore: 'LINK',
  },
];

const Questions = () => {
  const items = sampleQ.map((item) => <Question key={item.title} {...item} />);
  return <Accordion allowToggle>{items}</Accordion>;
};

export default Questions;
