import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Text>social icons</Text>
      <Heading size={"md"}>The Daily Bond</Heading>
      <Text>
        Le informazioni riportate su questo sito non costituiscono consigli
        finanziari. Non sono un consulente finanziario e non sono responsabile
        dell’andamento positivo o negativo dei vostri investimenti
      </Text>
    </Box>
  );
};

export default Footer;
