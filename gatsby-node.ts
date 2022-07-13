import type { GatsbyNode } from 'gatsby';
import { GatsbyNodeQuery } from './gatsby-graphql';
import generatePages from './src/utils/gatsby-node/generatePages';

interface Redirect {
  fromPath: string;
  toPath: string;
  isPermanent?: boolean;
}
type Redirects = Redirect[];

const path = require('path');
const { copyLibFiles } = require('@builder.io/partytown/utils');
const redirects: Redirects = require('./redirects.json');

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage, createRedirect } = actions;

  const res = await graphql<GatsbyNodeQuery>(`
    query GatsbyNode {
      allContentfulArticle {
        edges {
          node {
            __typename
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
            __typename
            slug
            category {
              slug
            }
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            __typename
            slug
          }
        }
      }
    }
  `);

  console.log(res.data?.allContentfulArticle.edges);

  if (!res.data) return console.error('error while fetching query ');
  const articles = res.data.allContentfulArticle.edges;
  const definitions = res.data.allContentfulDefinition.edges;
  const categories = res.data.allContentfulCategory.edges;

  console.log('generating pages for articles ');
  generatePages(articles, createPage);
  console.log('generating pages for definitions ');
  generatePages(definitions, createPage);
  generatePages(categories, createPage);
  // generatePages(categories, createPage);

  // articles.forEach((edge) => {
  //   const { category, slug } = edge.node;
  //   if (!(category && slug)) {
  //     return console.error('category or slug not present in this node');
  //   }

  //   createPage({
  //     component: articleTemplate,
  //     path: `/${category.slug}/${slug}`,
  //     context: {
  //       slug,
  //     },
  //   });
  // });

  // definitions.forEach((edge) => {
  //   const { category, slug } = edge.node;
  //   if (!(category && slug)) {
  //     return console.error('category or slug not present in this node');
  //   }

  //   createPage({
  //     component: definitionTemplate,
  //     path: `/${category.slug}/${slug}`,
  //     context: {
  //       slug,
  //     },
  //   });
  // });

  redirects.forEach((redirect) => {
    const { fromPath, toPath, isPermanent } = redirect;
    createRedirect({
      fromPath,
      toPath,
      isPermanent,
    });
  });
};
