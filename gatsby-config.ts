import { GatsbyConfig, graphql } from "gatsby";
import * as dotenv from "dotenv";
dotenv.config();

const siteUrl = process.env.URL || `https://www.thedailybond.com`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Daily Bond`,
    titleTemplate: "%s",
    defaultTitle: "The Daily Bond",
    defaultImage: "icon.png",
    defaultDescription:
      "The Daily Bond - La finanza personale in modo semplice",
    siteUrl: `https://www.thedailybond.com`,
    twitterUsername: "frvncee_",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
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
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-G-1T77TES9JF", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
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

          // Returns an object that maps each page url to its data (the updatedAt is the important value)
          const ctfNodeMap = ctfNodes.reduce((acc: any, node: any) => {
            const { slug, category } = node;

            // If the entry is an article, it includes the category in the slug.
            // Otherwise, it means it's a category page, and it formats it accordingly with a trailing and opening backslash
            const path = category ? `/${category.slug}/${slug}` : `/${slug}/`;
            acc[path] = node;

            return acc;
          }, {});

          // Creates an object that has both the path key and the updatedAt for the corresponding path
          return allPages.map((page: any) => {
            return {
              ...page,
              ...ctfNodeMap[page.path],
            };
          });
        },
        // Processes data and returns only the url received from allSiteData and the last modified time
        serialize: (data: any) => {
          const { path, updatedAt } = data;
          console.log("PATH: ", path);
          return {
            url: path,
            lastmod: updatedAt,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.thedailybond.com",
        sitemap: "https://www.thedailybond.com/sitemap-index.xml",
        policy: [
          { userAgent: "*", allow: "/" },
          { userAgent: "SemrushBot-CT", allow: "/" },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "871722be70e4a654eaebf3dbd&amp;id=bde7442e91", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
  ],
};

export default config;
