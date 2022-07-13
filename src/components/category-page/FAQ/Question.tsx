import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  answer: string;
  readMore: string;
}

const Question = ({ title, answer, readMore }: Props) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Flex align={'center'} width={'full'} justify={'space-between'}>
          <Text fontSize={'1.25rem'} lineHeight="1.5">
            {title}
          </Text>
          <AccordionIcon />
        </Flex>
      </AccordionButton>
      <AccordionPanel>
        <Text fontSize={'1.0625rem'} lineHeight="1.5">
          {answer}
        </Text>
        <Text fontSize={'1.0625rem'} lineHeight="1.5">
          LEARN MORE: {readMore}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Question;
