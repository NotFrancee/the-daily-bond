import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { H2, ResponsiveFlex } from '../../shared';
import { HomepageMustReadsQuery } from '../../../../gatsby-graphql';
import Card from './Card';

const query = graphql`
  query HomepageMustReads {
    allContentfulArticle(
      filter: { mustRead: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          category {
            slug
            title
          }
          updatedAt(formatString: "DD MMMM, YYYY", locale: "it")
        }
      }
    }
  }
`;

const MustReads = () => {
  const res = useStaticQuery<HomepageMustReadsQuery>(query);

  const ArticlesEl = res.allContentfulArticle.edges.map(({ node: article }) => {
    console.log(article);

    return <Card article={article} key={article.slug} />;
  });
  return (
    <ResponsiveFlex
      textAlign={'center'}
      bgColor={'gray.lightBackground'}
      as="section"
    >
      <H2>Must Reads:</H2>

      {ArticlesEl}
    </ResponsiveFlex>
  );
};

export default MustReads;
