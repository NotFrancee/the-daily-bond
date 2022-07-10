import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Section from '../shared/Section';

const About = () => {
  return (
    <Section justifyContent="center" mt={10}>
      <Heading textAlign={'center'} as={'h2'}>
        Perchè The Daily Bond
      </Heading>
      <Section>
        <Heading textAlign={'center'} size={'md'} as={'h3'}>
          Finanza Personale
        </Heading>
        <Text textAlign={'center'} mt={5}>
          Migliora la gestione delle tue finanza personali e inizia a
          risparmiare per il tuo futuro. Non è difficile, semplicemente non te
          lo hanno mai insegnato!
        </Text>
      </Section>
      <Section>
        <Heading textAlign={'center'} size={'md'} as={'h3'}>
          Investimenti
        </Heading>
        <Text textAlign={'center'} mt={5}>
          Tenere i soldi sotto il materasso non è più una soluzione: è ora di
          far fruttare il tuo denaro, e non è difficile come pensi!
        </Text>
      </Section>
      <Section>
        <Heading textAlign={'center'} size={'md'} as={'h3'}>
          Produttività
        </Heading>
        <Text textAlign={'center'} mt={5}>
          Diventa un maestro della produttività: abbandonare la procrastinazione
          e affrontare anche i compiti più difficili è più semplice di quello
          che pensi!
        </Text>
      </Section>
    </Section>
  );
};

export default About;
