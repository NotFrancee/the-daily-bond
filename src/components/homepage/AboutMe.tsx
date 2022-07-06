import { Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../shared/Section";

const AboutMe = () => {
  return (
    <Section mt={10} bgColor="gray.100">
      <StaticImage
        alt="About me Icon"
        src="https://ik.imagekit.io/astrum/TheDailyBond/about-me?ik-sdk-version=javascript-1.4.3&updatedAt=1657089147250"
      />
      <Heading textAlign={"center"} as="h2">
        Chi sono
      </Heading>
      <Text>
        Ciao, mi chiamo Andrea, e sono ormai un appassionato del mondo del
        Business, della Finanza, e della Finanza Personale. Fin da quando ho
        iniziato ad appassionarmi di questi argomenti, non ho potuto non notare
        le poche conoscenze finanziarie, sia della mia famiglia che dei miei
        coetanei, qui in Italia. Il mio obiettivo è insegnare a quante più
        persone possibili i concetti economici che io stesso sto imparando, sia
        per quanto riguarda la gestione dei propri risparmi, sia per quanto
        riguarda le varie possibilità di investimento che sono nate nel terzo
        millennio. Vorrei, quindi, aumentare l’educazione finanziaria in Italia,
        che è ai livelli tra i più bassi di tutti gli stati Europei. Questo non
        va affatto bene: se qualcuno non fa qualcosa per risolvere il problema,
        sarà la nostra generazione e quella futura a scontarne i costi!
      </Text>
    </Section>
  );
};

export default AboutMe;
