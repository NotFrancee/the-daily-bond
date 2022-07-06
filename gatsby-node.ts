import { GatsbyGraphQLType } from "gatsby";
import type { GatsbyNode } from "gatsby";
import { CreatePagesQuery } from "./src/@types/queries/CreatePagesQuery";

interface Redirect {
  fromPath: string;
  toPath: string;
  isPermanent?: boolean;
}
type Redirects = Redirect[];

const path = require("path");
const redirects: Redirects = require("./redirects.json");

interface Props {
  graphql: GatsbyGraphQLType;
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage, createRedirect } = actions;
  const articleTemplate = path.resolve(
    "./src/templates/article-template/ArticleTemplate.tsx"
  );
  const definitionTemplate = path.resolve(
    "./src/templates/definition-template/DefinitionTemplate.tsx"
  );

  const res = await graphql<CreatePagesQuery>(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
            category {
              slug
            }
          }
        }
      }
      allContentfulDefinition {
        edges {
          node {
            slug
            category {
              title
              slug
            }
          }
        }
      }
    }
  `);

  if (!res || !res.data) return console.error("error while fetching query ");
  const articles = res.data.allContentfulArticle.edges;
  const definitions = res.data.allContentfulDefinition.edges;

  articles.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/${edge.node.category.slug}/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  definitions.forEach((edge) => {
    createPage({
      component: definitionTemplate,
      path: `/${edge.node.category.slug}/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  redirects.forEach((redirect) => {
    const { fromPath, toPath, isPermanent } = redirect;
    createRedirect({
      fromPath,
      toPath,
      isPermanent,
    });
  });
};
