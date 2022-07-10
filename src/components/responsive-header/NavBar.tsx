import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';

const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={5}
      p={5}
      bg={[
        'primary.highlight',
        'primary.highlight',
        'transparent',
        'transparent',
      ]}
      color={['white', 'white', 'black', 'black']}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color={['white', 'white', 'black', 'black']} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
