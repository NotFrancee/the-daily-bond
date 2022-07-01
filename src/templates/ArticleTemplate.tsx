import { graphql } from "gatsby";
import React from "react";
import { ArticleQuery } from "../@types/articles/ArticleQuery";

interface Props {
  data: ArticleQuery;
}

const ArticleTemplate = ({ data }: Props) => {
  console.log(data);
  return <div>ArticleTemplate</div>;
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
