import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Article {
  title: string;
  category: {
    title: string;
    slug: string;
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
  mainImage: {
    publicUrl: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}
