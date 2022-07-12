import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { H2, H3 } from '../shared';
import ResponsiveFlex from '../shared/ResponsiveFlex';

const About = () => {
  return (
    <ResponsiveFlex justifyContent="center" mt={10} maxWidth="500px" mx="auto">
      <H2 textAlign={'center'}>Perchè The Daily Bond</H2>
      <ResponsiveFlex>
        <H3 textAlign={'center'} size={'md'}>
          Finanza Personale
        </H3>
        <Text textAlign={'center'} mt={5}>
          Migliora la gestione delle tue finanza personali e inizia a
          risparmiare per il tuo futuro. Non è difficile, semplicemente non te
          lo hanno mai insegnato!
        </Text>
      </ResponsiveFlex>
      <ResponsiveFlex>
        <Heading textAlign={'center'} size={'md'} as={'h3'}>
          Investimenti
        </Heading>
        <Text textAlign={'center'} mt={5}>
          Tenere i soldi sotto il materasso non è più una soluzione: è ora di
          far fruttare il tuo denaro, e non è difficile come pensi!
        </Text>
      </ResponsiveFlex>
      <ResponsiveFlex>
        <Heading textAlign={'center'} size={'md'} as={'h3'}>
          Produttività
        </Heading>
        <Text textAlign={'center'} mt={5}>
          Diventa un maestro della produttività: abbandonare la procrastinazione
          e affrontare anche i compiti più difficili è più semplice di quello
          che pensi!
        </Text>
      </ResponsiveFlex>
    </ResponsiveFlex>
  );
};

export default About;
