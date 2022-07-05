import { Heading } from "@chakra-ui/react";
import React from "react";
import Articles from "../../components/articles/Articles";
import { Layout, Section, SEO } from "../../components/shared";

const index = () => {
  return (
    <Layout>
      <SEO
        title="Mercati - The Daily Bond"
        description="Esplora i nostri articoli sui mercati finanziari!"
        pathName="/mercati"
      />
      <Section>
        <Heading as={"h1"}>Mercati</Heading>
        <Articles categorySlug="mercati" />
      </Section>
    </Layout>
  );
};

export default index;
