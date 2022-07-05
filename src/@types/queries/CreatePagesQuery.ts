interface ArticlePreview {
  node: {
    slug: string;
    category: {
      slug: string;
    };
  };
}

interface DefinitionPreview {
  node: {
    slug: string;
    category: {
      slug: string;
    };
  };
}

export interface CreatePagesQuery {
  allContentfulArticle: {
    edges: ArticlePreview[];
  };
  allContentfulDefinition: {
    edges: DefinitionPreview[];
  };
}
