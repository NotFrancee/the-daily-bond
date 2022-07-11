import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import { Section } from '../shared';

interface Props {
  title: string;
  description: string;
  contentUpgrade: string;
}

const ContentUpgrade = ({ title, description, contentUpgrade }: Props) => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState<MailchimpResponse | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  const msgColor = response?.result === 'success' ? 'primary.highlight' : 'red';

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const resetResponse = () => {
    setTimeout(() => {
      setResponse(null);
    }, 3000);
  };

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();
    if (!email) {
      setResponse({ result: 'error', msg: 'Compila la Email!' });
      return resetResponse();
    }
    if (downloaded) {
      setResponse({ result: 'error', msg: 'Lo hai già scaricato!' });
      return resetResponse();
    }

    try {
      const response = await addToMailchimp(email);
      setResponse(response);

      if (response.result === 'success') {
        // give the content upgrade in a new page
        window.open(contentUpgrade);
        setDownloaded(true);
      }
    } catch {
      setResponse({ result: 'error', msg: 'Qualcosa è andato storto' });
      console.error('Something went wrong');
    }

    resetResponse();
  };

  return (
    <Section
      p={10}
      w={['100vw', 'full']}
      mx={[-5]}
      mt={5}
      bg={'primary.background'}
    >
      <Box>
        <Heading textAlign={['left', 'center']} fontSize={'2xl'}>
          {title}
        </Heading>
        <Text textAlign={['left', 'center']} fontSize={'xl'}>
          {description}
        </Text>
      </Box>
      <FormControl>
        <FormLabel display={'none'} htmlFor="email">
          La tua Email
        </FormLabel>
        <Input
          value={email}
          onChange={handleChange}
          placeholder="La tua Email"
          id="email"
          type="email"
          border={'1px solid'}
          borderColor="primary.highlight"
          focusBorderColor="green.500"
        />
        {/* <FormHelperText>Non diffonderò la tua email</FormHelperText> */}
        <Button mt={5} w={'full'} onClick={handleSubmit}>
          Invia
        </Button>
        {response && (
          <Text fontWeight={'bold'} color={msgColor}>
            {response.msg}
          </Text>
        )}
      </FormControl>
    </Section>
  );
};

export default ContentUpgrade;
