import { Heading } from "@chakra-ui/react";
import React from "react";
import Definitions from "../../components/definitions/Definitions";
import { Layout, Section, SEO } from "../../components/shared";

const index = () => {
  return (
    <Layout>
      <SEO
        title="Impara - The Daily Bond"
        description="Impara tutti i termini finanziari in modo semplice e veloce!"
      />
      <Section>
        <Heading>Impara</Heading>
        <Definitions />
      </Section>
    </Layout>
  );
};

export default index;
