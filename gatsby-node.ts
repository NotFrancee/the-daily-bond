import { GatsbyGraphQLType } from "gatsby";
import type { GatsbyNode } from "gatsby";
import { ArticlePreviewQuery } from "./src/@types/articles/ArticlePreviewQuery";

const path = require("path");

interface Props {
  graphql: GatsbyGraphQLType;
}
// Create blog pages dynamically
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/ArticleTemplate.tsx");
  const res = await graphql<ArticlePreviewQuery>(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
            category {
              title
            }
          }
        }
      }
    }
  `);

  if (!res || !res.data) return console.error("error while fetching query ");
  res.data.allContentfulArticle.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
