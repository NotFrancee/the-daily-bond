import { Actions } from 'gatsby';
import { GatsbyNodeQuery } from '../../../gatsby-graphql';
// import { DefinitionTemplate, ArticleTemplate } from '../../templates';
const path = require('path');
const articleTemplate = path.resolve(
  './src/templates/article-template/ArticleTemplate.tsx',
);
const definitionTemplate = path.resolve(
  './src/templates/definition-template/DefinitionTemplate.tsx',
);
const categoryPageTemplate = path.resolve(
  './src/templates/category-page-template/CategoryPageTemplate.tsx',
);

type Edges =
  | GatsbyNodeQuery['allContentfulArticle']['edges']
  | GatsbyNodeQuery['allContentfulDefinition']['edges']
  | GatsbyNodeQuery['allContentfulCategory']['edges'];
/**
 * Generates the pages, given the edges and createPages.
 * @param {any} edges - The URL of the Content Upgrade
 * @param {function} createPage - Gatsby Action to crate Pages
 */
function generatePages(edges: Edges, createPage: Actions['createPage']) {
  console.log('starting to generate pages...');

  edges.forEach(({ node }) => {
    const nodeType = node.__typename;

    let path: string | undefined;
    let template: any;

    switch (nodeType) {
      case 'ContentfulArticle': {
        const { category, slug } = node;
        path = `/${category?.slug}/${slug}`;
        template = articleTemplate;
        break;
      }
      case 'ContentfulDefinition': {
        const { category, slug } = node;
        path = `/${category?.slug}/${slug}`;
        template = definitionTemplate;
        break;
      }
      case 'ContentfulCategory': {
        const { slug } = node;
        path = `/${slug}`;
        template = categoryPageTemplate;
        break;
      }
    }

    if (!path) {
      return console.error('path has not been decided');
    }

    createPage({
      component: template,
      path,
      context: {
        slug: node.slug,
      },
    });
  });
  console.log('...finished');
}

export default generatePages;
