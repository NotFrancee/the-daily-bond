interface ArticlePreview {
  node: {
    slug: string;
    category: {
      title: string;
      slug: string;
    };
  };
}

export interface ArticlePreviewQuery {
  allContentfulArticle: {
    edges: ArticlePreview[];
  };
}
