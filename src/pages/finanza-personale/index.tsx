import { Heading } from "@chakra-ui/react";
import React from "react";
import { Layout, SEO } from "../../components/shared";

const index = () => {
  return (
    <Layout>
      <SEO
        title="Finanza Personale - The Daily Bond"
        description="Esplora le nostre risorse sulla finanza personale!"
      />
      <Heading as={"h1"}>Finanza Personale</Heading>
    </Layout>
  );
};

export default index;
