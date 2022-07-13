import { TabPanel, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveFlex } from '../../../components/shared';

interface Props {
  title: string;
  description: string;
  n: number;
  children?: any;
}

const TermBox = ({ title, description, children, ...props }: Props) => {
  return (
    <TabPanel {...props}>
      <ResponsiveFlex bg={'white'} gap={0}>
        <Text
          fontFamily={'heading'}
          fontSize="1.375rem"
          fontWeight={'400'}
          lineHeight="1.5"
        >
          {title}
        </Text>
        <Text fontSize={'1rem'} lineHeight="1.5">
          {description}
        </Text>
        <Text
          fontSize={'1rem'}
          lineHeight="1.5"
          decoration={'underline'}
          color="primary.highlight"
        >
          Learn More
        </Text>
      </ResponsiveFlex>
    </TabPanel>
  );
};

export default TermBox;
