import { ArticlePreview } from "../articles";

export default interface ArticlePreviewQuery {
  allContentfulArticle: {
    nodes: ArticlePreview[];
  };
}
