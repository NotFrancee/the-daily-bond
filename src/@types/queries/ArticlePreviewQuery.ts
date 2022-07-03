interface ArticlePreview {
  node: {
    slug: string;
    category: {
      title: string;
    };
  };
}

export interface ArticlePreviewQuery {
  allContentfulArticle: {
    edges: ArticlePreview[];
  };
}
