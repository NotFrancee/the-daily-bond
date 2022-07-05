import { Heading } from "@chakra-ui/react";
import React from "react";
import Articles from "../../components/articles/Articles";
import { Layout, Section, SEO } from "../../components/shared";

const index = () => {
  return (
    <Layout>
      <SEO
        title="Finanza Personale - The Daily Bond"
        description="Esplora le nostre risorse sulla finanza personale!"
        pathName="/finanza-personale"
      />
      <Section>
        <Heading as={"h1"}>Finanza Personale</Heading>
        <Articles />
      </Section>
    </Layout>
  );
};

export default index;
