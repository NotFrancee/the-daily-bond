import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../shared/Section";

const Introduction = () => {
  return (
    <Section>
      <Heading as={"h1"}>
        Impara a gestire le tue finanze e riprendi il controllo della tua vita
      </Heading>
      <Text>
        Tutte le risorse presenti sul sito sono gratuite e dritte al punto. Non
        vogliamo venderti niente, solo migliorare la tua gestione dei soldi per
        migliorare il tuo stile di vita
      </Text>
      <Image
        alt="Image of people working together"
        width={"full"}
        src="https://ik.imagekit.io/astrum/TheDailyBond/engineeringTeam"
      />
      <Button w={"full"}>Esplora i nostri Articoli</Button>
    </Section>
  );
};

export default Introduction;
