import { Text } from '@chakra-ui/react';
import React from 'react';
import { H2, H3 } from '../shared';
import ResponsiveFlex from '../shared/custom-components/ResponsiveFlex';

const sections = [
  {
    title: 'Finanza Personale',
    description: `Migliora la gestione delle tue finanza personali e inizia a risparmiare per il tuo futuro. Non è difficile, semplicemente non te lo hanno mai insegnato!`,
  },
  {
    title: 'Investimenti',
    description:
      'Tenere i soldi sotto il materasso non è più una soluzione: è ora di far fruttare il tuo denaro, e non è difficile come pensi!',
  },
  {
    title: 'Produttività',
    description:
      'Diventa un maestro della produttività: abbandonare la procrastinazione e affrontare anche i compiti più difficili è più semplice di quello che pensi!',
  },
];

const About = () => {
  const sectionsEl = sections.map(({ title, description }) => (
    <ResponsiveFlex
      py={1}
      as={'section'}
      key={title}
      textAlign={'center'}
      gap={2}
    >
      <H3>{title}</H3>
      <Text>{description}</Text>
    </ResponsiveFlex>
  ));
  return (
    <ResponsiveFlex justifyContent="center" mt={10} maxWidth="500px" mx="auto">
      <H2 textAlign={'center'}>Perchè The Daily Bond</H2>
      {sectionsEl}
    </ResponsiveFlex>
  );
};

export default About;
