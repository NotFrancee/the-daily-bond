import { Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../shared/Section';
import EngineeringTeam from '../../assets/EngineeringTeam.svg';

const Introduction = () => {
  return (
    <Section>
      <Heading as={'h1'}>
        Impara a gestire le tue finanze e riprendi il controllo della tua vita
      </Heading>
      <Text>
        Tutte le risorse presenti sul sito sono gratuite e dritte al punto. Non
        vogliamo venderti niente, solo migliorare la tua gestione dei soldi per
        migliorare il tuo stile di vita
      </Text>
      <Section alignItems="center" w={['full', '50%']}>
        <EngineeringTeam width="100%" height="fit-content" />
      </Section>
      <Button w={'full'}>Esplora i nostri Articoli</Button>
    </Section>
  );
};

export default Introduction;
