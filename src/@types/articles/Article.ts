import { ImageDataLike } from "gatsby-plugin-image";

export interface Article {
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
  mainImage: any;
}
