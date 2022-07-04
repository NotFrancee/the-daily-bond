import { Box } from "@chakra-ui/react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface Props {
  mainImage: {
    description: string;
    publicUrl: string;
    gatsbyImage: IGatsbyImageData;
  };
}

const MainImage = ({ mainImage }: Props) => {
  const image = getImage(mainImage.gatsbyImage);

  if (!image) return null;

  return (
    <Box m={"auto"}>
      <GatsbyImage image={image} alt={mainImage.description} />
    </Box>
  );
};

export default MainImage;
