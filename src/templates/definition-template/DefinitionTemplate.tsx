import { Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { ArticleQuery, DefinitionQuery } from "../../@types";
import Layout from "../../components/shared/Layout";
import { Section, SEO } from "../../components/shared";
import RichText from "../../utils/rich-text/RichText";

interface Props {
  data: DefinitionQuery;
}

const ArticleTemplate = ({ data }: Props) => {
  console.log(data);
  const {
    title,
    mainText,
    secondaryText,
    category,
    slug,
    seoTitle,
    metaDescription,
    updatedAt,
    createdAt,
  } = data.contentfulDefinition;
  return (
    <Layout>
      <SEO
        article={true}
        description={metaDescription.metaDescription}
        title={seoTitle}
        pathName={`/${category.slug}/${slug}`}
        //image={mainImage.publicUrl}
      />
      <Heading p={5} pb={0} as={"h1"}>
        {title}
      </Heading>
      <Section px={10}>
        <RichText rawBody={mainText} />
        <RichText rawBody={secondaryText} />
      </Section>
    </Layout>
  );
  // handle SEO
  // print rich text
  // design title, tags...
};

export const query = graphql`
  query DefinitionData($slug: String!) {
    contentfulDefinition(slug: { eq: $slug }) {
      createdAt
      seoTitle
      mainText {
        raw
      }
      secondaryText {
        raw
      }
      metaDescription {
        metaDescription
      }
      slug
      title
      updatedAt
      category {
        slug
      }
    }
  }
`;

export default ArticleTemplate;
