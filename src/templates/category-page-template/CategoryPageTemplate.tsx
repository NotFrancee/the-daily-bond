import React from 'react';
import StartHere from './start-here/StartHere';
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

  const articlesToRender = allContentfulArticle.edges;

  if (!contentfulCategory) {
    console.error('category could not be fetched');
    return;
  }
  console.log({ articlesToRender });

  const { title, pageDescription } = contentfulCategory;

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
      <StartHere />
      <FAQ />
      <KeyTerms />
      <FeaturedArticles />
      <Explore />
    </Layout>
  );
};

// metti ordine decrescente di data
export const query = graphql`
  query CategoryPage($slug: String = "") {
    allContentfulArticle(filter: { category: { slug: { eq: $slug } } }) {
      edges {
        node {
          category {
            title
            slug
          }
          createdAt
          slug
          title
          updatedAt
        }
      }
    }
    contentfulCategory(slug: { eq: $slug }) {
      pageDescription {
        pageDescription
      }
      slug
      title
    }
  }
`;

// filter based on category slug and fetch only from that category

export default CategoryPage;
