import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { ArticleQuery } from "../@types";
import Layout from "../components/shared/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Section, SEO } from "../components/shared";
import { options } from "./article-template/rich-text/richTextOptions";

interface Props {
  data: ArticleQuery;
}

const ArticleTemplate = ({ data }: Props) => {
  const { title, category, body, updatedAt, seoTitle, metaDescription, slug } =
    data.contentfulArticle;

  const richTextEl = renderRichText(body);
  return (
    <Layout>
      <SEO
        article={true}
        description={metaDescription.metaDescription}
        title={seoTitle}
        pathName={`/${category.title}/${slug}`}
        // image={} fix
      />
      <Section>
        <Text>{category.title}</Text>
        <Heading as={"h1"}>{title}</Heading>
      </Section>
      <Section pt={0}>{richTextEl}</Section>
    </Layout>
  );
  // handle SEO
  // print rich text
  // design title, tags...
};

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      body {
        raw
      }
      category {
        title
      }
      createdAt(formatString: "MMMM Do, YYYY")
      seoTitle
      slug
      tags
      title
      metaDescription {
        metaDescription
        id
      }
      updatedAt(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default ArticleTemplate;
