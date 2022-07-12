import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ResponsiveFlex from '../shared/ResponsiveFlex';
import EngineeringTeam from '../../assets/EngineeringTeam.svg';
import { navigate } from 'gatsby';

const Introduction = () => {
  const tempNavigate = () => {
    navigate('finanza-personale');
  };
  return (
    <ResponsiveFlex variant={'responsive'}>
      <ResponsiveFlex justifyContent="space-between">
        <Box>
          <Heading as={'h1'}>
            Impara a gestire le tue finanze e riprendi il controllo della tua
            vita
          </Heading>
          <Text>
            Tutte le risorse presenti sul sito sono gratuite e dritte al punto.
            Non vogliamo venderti niente, solo migliorare la tua gestione dei
            soldi per migliorare il tuo stile di vita
          </Text>
        </Box>
        <Button onClick={tempNavigate} display={['none', 'block']} w={'full'}>
          Esplora i nostri Articoli
        </Button>
      </ResponsiveFlex>
      <ResponsiveFlex alignItems="center" w={['full', '80%', '60%']}>
        <EngineeringTeam width="100%" height="100%" />
      </ResponsiveFlex>
      <Button onClick={tempNavigate} display={['block', 'none']} w={'full'}>
        Esplora i nostri Articoli
      </Button>
    </ResponsiveFlex>
  );
};

export default Introduction;
