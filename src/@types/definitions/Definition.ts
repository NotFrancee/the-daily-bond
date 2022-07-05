export default interface Definition {
  title: string;
  mainText: any;
  secondaryText: any;
  slug: string;
  category: {
    slug: string;
  };
  seoTitle: string;
  metaDescription: {
    metaDescription: string;
  };
  createdAt: string;
  updatedAt: string;
}
