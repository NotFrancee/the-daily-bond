import React, { Suspense } from 'react';
// import AboutMe from '../components/homepage/AboutMe';
import Introduction from '../components/homepage/Introduction';
import MustReads from '../components/homepage/must-reads/MustReads';
import { SEO } from '../components/shared';
import FallbackComponent from '../components/shared/FallbackComponent';
import Layout from '../components/shared/Layout';
const LatestArticles = React.lazy(
  () => import('../components/homepage/LatestArticles'),
);
const About = React.lazy(() => import('../components/homepage/About'));

const Index = () => {
  return (
    <Layout>
      <SEO
        title="The Daily Bond - Homepage"
        description="Impara la finanza personale in modo semplice e migliora le tue abitudini finanziarie"
        pathName="/"
      />
      <Introduction />
      <MustReads />
      <Suspense fallback={FallbackComponent}>
        <LatestArticles />
        <About />
      </Suspense>
      {/* <AboutMe /> */}
    </Layout>
  );
};

export default Index;
