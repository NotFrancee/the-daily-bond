import { Box, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import { DefinitionPreviewQuery } from '../../@types';
import DailyDefinition from '../../components/definitions/DailyDefinition';
import Definitions from '../../components/definitions/Definitions';
import { Layout, ResponsiveFlex, SEO } from '../../components/shared';

interface Props {
  data: DefinitionPreviewQuery;
}

const index = ({ data }: Props) => {
  const definitions = data.allContentfulDefinition.nodes;

  return (
    <Layout>
      <SEO
        title="Impara - The Daily Bond"
        description="Impara tutti i termini finanziari in modo semplice e veloce!"
        pathName="/impara"
      />
      <ResponsiveFlex>
        <Box>
          <Heading as={'h1'}>Impara la Finanza</Heading>
          <Text>
            Impara tutti i termini finanziari con il nostro glossario. Leggi la
            nostra definizione del giorno, oppure cerca partendo da una lettera!
          </Text>
        </Box>
        {/* <DailyDefinition /> */}
        <Definitions title="Tutte le Definizioni" definitions={definitions} />
      </ResponsiveFlex>
    </Layout>
  );
};

export const query = graphql`
  query DefinitionsPreviews {
    allContentfulDefinition(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        slug
        title
        category {
          slug
        }
      }
    }
  }
`;

export default index;
