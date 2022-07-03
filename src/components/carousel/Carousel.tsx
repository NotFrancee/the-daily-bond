import { Flex } from "@chakra-ui/react";
import React from "react";
import PreviewItem from "./PreviewItem";

const testArticle = {
  title: "test article",
  metaDescription: "lorem ipsum dolor sit amet",
  category: "Personal Finance",
  mainImage: "",
};

interface Props {
  articles: any;
}

const Carousel = ({ articles }: Props) => {
  const ArticlesEl = articles.map((article: any) => (
    <PreviewItem type="article" article={article} />
  ));
  console.log(ArticlesEl);

  return (
    <Flex p={5} direction="column">
      <p>fix</p>
    </Flex>
  );
};

export default Carousel;
