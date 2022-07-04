import { Box } from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  mainImage: any;
}

const MainImage = ({ mainImage }: Props) => {
  const image = getImage(mainImage);

  if (!image) return null;

  return (
    <Box m={"auto"}>
      <GatsbyImage image={image} alt={mainImage.description} />
    </Box>
  );
};

export default MainImage;
