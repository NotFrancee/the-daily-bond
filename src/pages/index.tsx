import * as React from "react";
import About from "../components/homepage/About";
import AboutMe from "../components/homepage/AboutMe";
import Introduction from "../components/homepage/Introduction";
import LatestArticles from "../components/homepage/LatestArticles";
import { SEO } from "../components/shared";
import Layout from "../components/shared/Layout";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="The Daily Bond - Homepage"
        description="Impara la finanza personale in modo semplice e migliora le tue abitudini finanziarie"
        pathName="/"
      />
      <Introduction />
      <LatestArticles />
      <About />
      <AboutMe />
    </Layout>
  );
};

export default Index;
