import React, { Suspense } from 'react';
import Header from './header/Header';
const MustReads = React.lazy(() => import('./must-reads/MustReads'));
const Explore = React.lazy(() => import('./explore/Explore'));
const FAQ = React.lazy(() => import('./FAQ/FAQ'));
const FeaturedArticles = React.lazy(
  () => import('./featured/FeaturedArticles'),
);
const KeyTerms = React.lazy(() => import('./key-terms/KeyTerms'));
import { graphql } from 'gatsby';
import { Layout, SEO } from '../../components/shared';
import { CategoryPageQuery } from '../../../gatsby-graphql';
import FallbackComponent from '../../components/shared/FallbackComponent';

interface Props {
  title: string;
  subtitle: string;
  data: CategoryPageQuery;
}

const CategoryPage = ({ data }: Props) => {
  console.log(data);
  const { allContentfulArticle, contentfulCategory } = data;
  if (!contentfulCategory) {
    console.error('category could not be fetched');
    return;
  }

  let articlesToRender = allContentfulArticle.edges;
  console.log({ articlesToRender });

  const mustReads = articlesToRender.filter(
    (article, index) => article.node.mustRead && index < 5,
  );

  articlesToRender = articlesToRender.filter(
    (article, index) => !(article.node.mustRead && index < 5),
  );
  const featuredArticles = articlesToRender.slice(0, 3);
  const remainingArticles = articlesToRender.slice(3, -1);

  const { title, pageDescription, keyTerms, frequentlyAskedQuestions } =
    contentfulCategory;

  console.log({ mustReads, featuredArticles, remainingArticles });

  return (
    <Layout>
      <SEO
        title={`${contentfulCategory.title} | The Daily Bond`}
        description={
          contentfulCategory.pageDescription?.pageDescription || undefined
        }
        pathName={`/${contentfulCategory.slug}`}
      />
      <Header
        title={title || 'error'}
        subtitle={pageDescription?.pageDescription || 'error'}
      />
      <Suspense fallback={FallbackComponent}>
        {Boolean(mustReads.length) && <MustReads articles={mustReads} />}
        {frequentlyAskedQuestions && (
          <FAQ frequentlyAskedQuestions={frequentlyAskedQuestions as any} />
        )}
        {keyTerms && <KeyTerms keyTerms={keyTerms as any} />}
        {Boolean(featuredArticles.length) && (
          <FeaturedArticles articles={featuredArticles} />
        )}
        {Boolean(remainingArticles.length) && (
          <Explore
            categoryTitle={title || 'error'}
            articles={remainingArticles}
          />
        )}
      </Suspense>
    </Layout>
  );
};

// metti ordine decrescente di data
export const query = graphql`
  query CategoryPage($slug: String = "") {
    allContentfulArticle(
      filter: { category: { slug: { eq: $slug } } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          category {
            title
            slug
          }
          slug
          title
          mainImage {
            gatsbyImageData(layout: CONSTRAINED, resizingBehavior: PAD)
            description
          }
          mustRead
          createdAt(formatString: "DD MMMM, YYYY", locale: "it")
          updatedAt(formatString: "DD MMMM, YYYY", locale: "it")
        }
      }
    }
    contentfulCategory(slug: { eq: $slug }) {
      pageDescription {
        pageDescription
      }
      slug
      title
      frequentlyAskedQuestions {
        answer {
          raw
        }
        question
        fullArticle {
          slug
          title
          category {
            slug
          }
        }
      }
      keyTerms {
        mainText {
          raw
        }
        slug
        title
      }
    }
  }
`;

// filter based on category slug and fetch only from that category

export default CategoryPage;
