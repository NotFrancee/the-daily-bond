import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title: string;
  description: string;
  image: string;
  article: boolean;
  pathName: string;
  updatedAt: string;
  createdAt: string;
}

const SEO = ({
  title,
  description,
  image,
  article,
  pathName,
  updatedAt,
  createdAt,
}: Props) => {
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathName}`,
    canonical: pathName ? `${site.siteMetadata.siteUrl}${pathName}` : null,
  };

  // console.log("CANONICAL URL: ", seo.canonical);

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: 'it',
      }}
      link={
        seo.canonical
          ? [
              {
                rel: 'canonical',
                href: seo.canonical,
              },
            ]
          : []
      }
    >
      {/* // SEE IF THIS HELPS */}
      {/* <link
        data-react-helmet="true"
        rel="preload"
        as="font"
        crossOrigin="anonymous"
        type="font/woff2"
        href="https://use.typekit.net/jpc3yrb.css"
      /> */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${seo.url}`,
          },
          headline: seo.title,
          description,
          image: seo.image || null,
          author: {
            '@type': 'Person',
            name: `Andrea Franceschini`,
            url: 'https://www.instagram.com/andreafranceschiniii',
          },
          publisher: {
            '@type': 'Organization',
            name: `The Daily Bond`,
            // logo: {
            //   "@type": "ImageObject",
            //   url: "https://images.ctfassets.net/z7pyyvho21dm/56G3Sy04rYABwiRJE0Qpd5/93c58230cd554417689228cab8a4f077/Screenshot_2021-04-26_132720.png?w=680&h=144&q=50&fm=webp",
            // },
          },
          datePublished: createdAt,
          dateModified: updatedAt,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  pathName: '',
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        siteUrl
        defaultImage
        twitterUsername
      }
    }
  }
`;

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         titleTemplate
//         defaultDescription: description
//         siteUrl: url
//         twitterUsername
//       }
//     }
//   }
// `
// there was also defaultImage: image before
