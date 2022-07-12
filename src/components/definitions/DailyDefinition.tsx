import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../shared';
import { Link as GatsbyLink } from 'gatsby';

interface Props {}

const DailyDefinition = ({}: Props) => {
  return (
    <ResponsiveFlex>
      <Box>
        <Text color={'primary.highlight'} casing={'uppercase'}>
          Termine del giorno
        </Text>
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
