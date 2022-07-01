import * as React from "react";
import About from "../components/homepage/About";
import AboutMe from "../components/homepage/AboutMe";
import Introduction from "../components/homepage/Introduction";
import LatestArticles from "../components/homepage/LatestArticles";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Introduction />
      <LatestArticles />
      <About />
      <AboutMe />
    </Layout>
  );
};

export default Index;
