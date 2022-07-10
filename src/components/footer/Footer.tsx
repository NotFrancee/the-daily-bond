import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box p={5} bg="black">
      <Heading as={'p'} size={'md'} color="white">
        The Daily Bond
      </Heading>
      <Text color={'white'} lineHeight="100%" fontSize="sm">
        Le informazioni riportate su questo sito non costituiscono consigli
        finanziari. Non sono un consulente finanziario e non sono responsabile
        dell’andamento positivo o negativo dei vostri investimenti
      </Text>
    </Box>
  );
};

export default Footer;
