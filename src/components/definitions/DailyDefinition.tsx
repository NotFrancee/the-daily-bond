import {
  Box,
  Heading,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../shared';
import { Link as GatsbyLink } from 'gatsby';

interface Props {}

const DailyDefinition = ({}: Props) => {
  return (
    <ResponsiveFlex bgColor={'primary.background'}>
      <Box>
        <Tag
          bgColor={'white'}
          fontFamily="heading"
          fontWeight={'bold'}
          color={'primary.highlight'}
        >
          TERMINE DEL GIORNO
        </Tag>
        <Heading>TER - Total Expense Ratio</Heading>
      </Box>
      <UnorderedList>
        <ListItem>item</ListItem>
        <ListItem>item</ListItem>
        <ListItem>item</ListItem>
        <ListItem>item</ListItem>
      </UnorderedList>
      <Link as={GatsbyLink} to="/">
        Leggi di più
      </Link>
    </ResponsiveFlex>
  );
};

export default DailyDefinition;
