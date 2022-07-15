import { Box } from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface Props {
  mainImage: {
    description: string;
    publicUrl: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const MainImage = ({ mainImage }: Props) => {
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
