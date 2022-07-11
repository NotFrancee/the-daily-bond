import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../shared/Section';
import ProfilePic from '../../assets/ProfilePic.svg';

const AboutMe = () => {
  return (
    <Section mt={10} bgColor="gray.100">
      <Section mx="auto" alignItems="center" w={['full', '30%']}>
        <ProfilePic width="100%" height="100%" />
      </Section>
      <Heading textAlign={'center'} as="h2">
        Chi sono
      </Heading>
      <Text width={['full', '50%']} mx="auto">
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
