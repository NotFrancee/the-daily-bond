import React from 'react';
import MustReads from './start-here/MustReads';
import Explore from './explore/Explore';
import FAQ from './FAQ/FAQ';
import FeaturedArticles from './featured/FeaturedArticles';
import Header from './header/Header';
import KeyTerms from './key-terms/KeyTerms';
import { graphql } from 'gatsby';
import { Layout, SEO } from '../../components/shared';
import { CategoryPageQuery } from '../../../gatsby-graphql';

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
