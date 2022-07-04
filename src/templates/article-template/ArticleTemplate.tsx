import { Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { ArticleQuery } from "../../@types";
import Layout from "../../components/shared/Layout";
import { Section, SEO } from "../../components/shared";
import RichText from "./rich-text/RichText";
import MainImage from "./sections/MainImage";

interface Props {
  data: ArticleQuery;
}

const ArticleTemplate = ({ data }: Props) => {
  const {
    mainImage,
    title,
    category,
    body,
    updatedAt,
    seoTitle,
    metaDescription,
    slug,
  } = data.contentfulArticle;

  return (
    <Layout>
      <SEO
        article={true}
        description={metaDescription.metaDescription}
        title={seoTitle}
        pathName={`/${category.title}/${slug}`}
        image={mainImage.publicUrl}
      />
      <Section>
        <Text>{category.title}</Text>
        <Heading as={"h1"}>{title}</Heading>
        <MainImage mainImage={mainImage} />
      </Section>
      <RichText rawBody={body} pt={0} />
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
      title
      metaDescription {
        metaDescription
        id
      }
      updatedAt(formatString: "MMMM Do, YYYY")
      mainImage {
        gatsbyImage(width: 500)
        description
        publicUrl
      }
    }
  }
`;

export default ArticleTemplate;
