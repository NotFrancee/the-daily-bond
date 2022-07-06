import { GatsbyGraphQLType } from "gatsby";
import type { GatsbyNode } from "gatsby";
import { CreatePagesQuery } from "./src/@types/queries/CreatePagesQuery";

const path = require("path");

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

  createRedirect({
    fromPath: "/finanza-personale/investire-senza-rischi-2021",
    toPath: "/finanza-personale/investire-senza-rischi-2022",
    // isPermanent: true,
  });
  createRedirect({
    fromPath: "/page/2/",
    toPath: "/",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/sitemap.xml",
    toPath: "/sitemap-index.xml",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/?post_type=definizione&p=505&preview=true",
    toPath: "/",
    isPermanent: true,
  });
  createRedirect({
    fromPath:
      "/finanza-personale/recensione-pancakeswap-come-usarlo-ed-i-suoi-rischi/",
    toPath: "/finanza-personale/",
    isPermanent: true,
  });
};
