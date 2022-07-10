import { Box, ChakraProps } from '@chakra-ui/react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface Props extends ChakraProps {
  mainImage: {
    description: string;
    publicUrl: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const MainImage = ({ mainImage, ...rest }: Props) => {
  // const image = getImage(mainImage.gatsbyImageData);

  // if (!image) return null;

  return (
    <Box width={['full', '50%']} margin="auto">
      <GatsbyImage
        image={mainImage.gatsbyImageData}
        alt={mainImage.description}
      />
    </Box>
  );
};

export default MainImage;
