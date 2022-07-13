import React from 'react';
import { Text } from '@chakra-ui/react';
import { ResponsiveFlex, H1 } from '../../../components/shared';

interface Props {
  title: string;
  subtitle: string;
}
const Header = ({ title, subtitle }: Props) => {
  console.log({ title, subtitle });

  return (
    <ResponsiveFlex textAlign={'center'} gap={2}>
      <H1 mb={1} fontWeight={'400'} fontSize="1.75rem" lineHeight={'31px'}>
        {title}
      </H1>
      <Text
        mb={4}
        fontSize={'1rem'}
        lineHeight={'24px'}
        color={'gray.subHeading'}
      >
        {subtitle}
      </Text>
    </ResponsiveFlex>
  );
};

export default Header;
