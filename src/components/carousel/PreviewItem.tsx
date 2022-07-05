import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ArticlePreview } from "../../@types";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  // type: "article" | "definition";
  article: ArticlePreview;
}

// what do we need for a preview?

const PreviewItem = ({ article }: Props) => {
  // console.log("article to preview", article);
  const { title, metaDescription, category, slug } = article;
  return (
    <Flex p={5} gap={5} bgColor="white" direction="column" rounded={"md"}>
      {/* IMG */}
      <Box>
        <Link as={GatsbyLink} to={`/${category.slug}/${slug}`}>
          <Heading size={"md"} as={"h3"}>
            {title}
          </Heading>
        </Link>
        <Text fontWeight={"bold"} color={"primary.highlight"}>
          {category.title}
        </Text>
      </Box>
      <Text>{metaDescription.metaDescription}</Text>
      <Link color={"primary.highlight"} href={`/${category.slug}/${slug}`}>
        Leggi
      </Link>
    </Flex>
  );
  // switch (type) {
  //   case "article": {
  //     const { title, category, metaDescription } = article;
  //     return (
  //       <Flex p={5} gap={5} bgColor="white" direction="column">
  //         {/* IMG */}
  //         <Box>
  //           <Heading>{title}</Heading>
  //           <Text>{category}</Text>
  //         </Box>
  //         <Text>{metaDescription}</Text>
  //       </Flex>
  //     );
  //   }

  //   case "definition": {
  //     return <Text>tbcoded</Text>;
  //   }
  //   default: {
  //     return <Text>error</Text>;
  //   }
  // }
};

export default PreviewItem;
