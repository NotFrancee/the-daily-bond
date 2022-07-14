import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { H2, ResponsiveFlex } from '../shared';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Banner = ({ title, description, children }: Props) => {
  return (
    <ResponsiveFlex variant="banner">
      <Box>
        <H2 textAlign={'center'}>{title}</H2>
        <Text pt={1} textAlign={'center'}>
          {description}
        </Text>
      </Box>
      {children}
    </ResponsiveFlex>
  );
};

export default Banner;
