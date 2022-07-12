const feedQuery = `
{
  site {
    siteMetadata {
      title
      description
      siteUrl
      site_url: siteUrl
    }
  }
}
`;

const serializeQuery = `
{
  allContentfulArticle(sort: {order: DESC, fields: createdAt}) {
    nodes {
      category {
        slug
      }
      seoTitle
      metaDescription {
        metaDescription
      }
      updatedAt
      createdAt
      mainImage {
        publicUrl
      }
      slug
    }
  }
}
`;

interface RSSArticle {
  category: {
    slug: string;
  };
  slug: string;
  seoTitle: string;
  metaDescription: {
    metaDescription: string;
  };
  updatedAt: string;
  createdAt: string;
  mainImage: {
    publicUrl: string;
  };
}

interface SerializeData {
  query: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allContentfulArticle: {
      nodes: RSSArticle[];
    };
  };
}

/**
 * Processes the pages.
 * @constructor
 * @param {object} data - The URL of the Content Upgrade
 */
function serializeFeed({
  query: { site, allContentfulArticle },
}: SerializeData) {
  const { siteUrl } = site.siteMetadata;

  return allContentfulArticle.nodes.map((article) => {
    const {
      seoTitle,
      metaDescription: { metaDescription },
      createdAt,
      // updatedAt,
      slug,
      category,
    } = article;

    const url = `${siteUrl}/${category.slug}/${slug}`;

    return {
      title: seoTitle,
      description: metaDescription,
      date: createdAt,
      url,
      guid: url,
    };
  });
}

export { feedQuery, serializeFeed, serializeQuery };
