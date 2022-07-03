import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Section from "../shared/Section";

const Introduction = () => {
  return (
    <Section py={10}>
      <Heading>
        Impara a gestire le tue finanze e riprendi il controllo della tua vita
      </Heading>
      <Text variant={"subheading"}>
        Tutte le risorse presenti sul sito sono gratuite e dritte al punto. Non
        vogliamo venderti niente, solo migliorare la tua gestione dei soldi per
        migliroare il tuo stile di vita
      </Text>
      {/* // cambia colore mettendo quello main  */}
      <Image src="https://ik.imagekit.io/astrum/TheDailyBond/engineeringTeam" />
      <Button w={"full"}>Esplora i nostri Articoli</Button>
      {/* Image of something inspiring, cartooned */}
    </Section>
  );
};

export default Introduction;
