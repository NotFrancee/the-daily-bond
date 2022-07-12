import { GatsbyConfig } from 'gatsby';
console.log('ENVIRONMENT: ', process.env.NODE_ENV);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.URL || `https://www.thedailybond.com`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Daily Bond`,
    titleTemplate: '%s',
    defaultTitle: 'The Daily Bond',
    defaultImage: 'icon.png',
    defaultDescription:
      'The Daily Bond - La finanza personale in modo semplice',
    siteUrl: `https://www.thedailybond.com`,
    twitterUsername: 'frvncee_',
  },
  // More easily incorporate content into your pages through
  // automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5hh1d9m6f1kc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        query: `
          query MyQuery {
            allSitePage {
              nodes {
                path
              }
            }
            allContentfulEntry {
              nodes {
                ... on ContentfulArticle {
                  slug
                  updatedAt
                  category {
                    slug
                  }
                }
                ... on ContentfulCategory {
                  updatedAt
                  slug
                }
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage, allContentfulEntry }: any) => {
          const ctfNodes = allContentfulEntry.nodes;
          const allPages = allSitePage.nodes;

          // Returns an object that maps each page
          // url to its data (the updatedAt is the important value)
          const ctfNodeMap = ctfNodes.reduce((acc: any, node: any) => {
            const { slug, category } = node;

            // If the entry is an article, it includes the category in the slug.
            // Otherwise, it means it's a category page, and it
            // formats it accordingly with a trailing and opening backslash
            const path = category ? `/${category.slug}/${slug}` : `/${slug}/`;
            acc[path] = node;

            return acc;
          }, {});

          // Creates an object that has both the path
          // key and the updatedAt for the corresponding path
          return allPages.map((page: any) => {
            return {
              ...page,
              ...ctfNodeMap[page.path],
            };
          });
        },
        // Processes data and returns only the url received from allSiteData
        // and the last modified time
        serialize: (data: any) => {
          const { path, updatedAt } = data;
          return {
            url: path,
            lastmod: updatedAt,
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.thedailybond.com',
        sitemap: 'https://www.thedailybond.com/sitemap-index.xml',
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: 'SemrushBot-CT', allow: '/' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: [
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // string; add your MC list endpoint here; see instructions below
        endpoint:
          'https://thedailybond.us6.list-manage.com/subscribe/post?u=871722be70e4a654eaebf3dbd&amp;id=bde7442e91',
        // number; the amount of time, in milliseconds, that you
        // want to allow mailchimp to respond to your request before timing out.
        // defaults to 3500
        timeout: 3500,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-remove-console',
      options: {
        exclude: ['error', 'warn'], // <- will be removed all console calls except these
      },
    },
  ],
  // proxy: {
  //   prefix: '/proxy',
  //   url: 'https://www.thedailybond.com',
  // },
};

export default config;
