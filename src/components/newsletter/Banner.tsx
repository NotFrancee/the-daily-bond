import { Heading, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../shared';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Banner = ({ title, description, children }: Props) => {
  return (
    <ResponsiveFlex variant="banner">
      <Box>
        <Heading textAlign={['left', 'center']} fontSize={'2xl'}>
          {title}
        </Heading>
        <Text textAlign={['left', 'center']} fontSize={'xl'}>
          {description}
        </Text>
      </Box>
      {children}
    </ResponsiveFlex>
  );
};

export default Banner;
