import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StyledFlex from "../shared/StyledFlex";

const Introduction = () => {
  return (
    <Flex px={5} py={10} direction="column" gap={5}>
      <Heading>
        Impara a gestire le tue finanze e riprendi il controllo della tua vita
      </Heading>
      <Text>
        Tutte le risorse presenti sul sito sono gratuite e dritte al punto. Non
        vogliamo venderti niente, solo migliorare la tua gestione dei soldi per
        migliroare il tuo stile di vita
      </Text>
      <Button>Esplora i nostri Articoli</Button>
      {/* Image of something inspiring, cartooned */}
    </Flex>
  );
};

export default Introduction;
