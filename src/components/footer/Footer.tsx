import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" p={5} bg="primary.background">
      <Heading as={'p'} size={'md'} color="white">
        The Daily Bond
      </Heading>
      <Text lineHeight="100%" fontSize="sm">
        Le informazioni riportate su questo sito non costituiscono consigli
        finanziari. Non sono un consulente finanziario e non sono responsabile
        dell’andamento positivo o negativo dei vostri investimenti
      </Text>
    </Box>
  );
};

export default Footer;
