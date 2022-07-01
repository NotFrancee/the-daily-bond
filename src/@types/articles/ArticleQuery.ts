interface Article {
  title: string;
  category: {
    title: string;
  };
  tags: string[];
  body: any;
  slug: string;
  seoTitle: string;
  metaDescription: {
    metaDescription: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ArticleQuery {
  contentfulArticle: Article;
}
