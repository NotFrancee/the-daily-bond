const sitemapQuery = `
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
`;

interface ResolvePagesArgs {
  allSitePage: any;
  allContentfulEntry: any;
}

/**
 * Processes the pages.
 * @constructor
 * @param {object} data - The URL of the Content Upgrade
 */
function resolvePagesFunc({
  allSitePage,
  allContentfulEntry,
}: ResolvePagesArgs) {
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
}

/**
 * Processes data and returns only the url received from allSiteData and the last modified time.
 * @constructor
 * @param {object} data - The URL of the Content Upgrade
 */
function serializeFunc(data: any) {
  const { path, updatedAt } = data;
  return {
    url: path,
    lastmod: updatedAt,
  };
}

export { sitemapQuery, resolvePagesFunc, serializeFunc };
