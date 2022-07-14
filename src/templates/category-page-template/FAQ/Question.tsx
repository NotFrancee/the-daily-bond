import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import RichText from '../../../components/shared/rich-text/body/RichText';
import { FullArticle } from './FAQ';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  title: string;
  answer: {
    raw: any;
  };
  fullArticle: FullArticle | null;
}

const Question = ({ title, answer, fullArticle }: Props) => {
  return (
    <AccordionItem as={'article'}>
      <AccordionButton p={1}>
        <Flex align={'center'} width={'full'} justify={'space-between'}>
          <Text textAlign={'left'} fontSize={'1.25rem'} lineHeight="1.5">
            {title}
          </Text>
          <AccordionIcon />
        </Flex>
      </AccordionButton>
      <AccordionPanel>
        {/* <Text fontSize={'1.0625rem'} lineHeight="1.5">
          {answer}
        </Text> */}
        <RichText body={answer} />
        <Text mt={5} fontSize={'1.0625rem'} lineHeight="1.5">
          <Heading variant={'labelHeading'} as="span">
            LEARN MORE:{' '}
          </Heading>
          {fullArticle ? (
            <Link
              as={GatsbyLink}
              to={`/${fullArticle.category.slug}/${fullArticle.slug}`}
            >
              {fullArticle.title}
            </Link>
          ) : (
            <Text as="span">Prossimamente...</Text>
          )}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Question;
