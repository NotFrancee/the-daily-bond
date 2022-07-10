import { Heading } from '@chakra-ui/react';
import React from 'react';
import { DefinitionPreview } from '../../@types/definitions';
import { Section } from '../shared';
import Preview from './Preview';

interface Props {
  title: string;
  definitions: DefinitionPreview[];
}

const Definitions = ({ title, definitions }: Props) => {
  const previewEl = definitions.map((definition) => (
    <Preview key={definition.slug} definition={definition} />
  ));
  return (
    <Section p={0}>
      <Heading as={'h2'} size="lg">
        {title}
      </Heading>
      {previewEl}
    </Section>
  );
};

export default Definitions;
