import { Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import React, { useEffect } from 'react';

interface Props {
  email: string;
  response: MailchimpResponse | null;
  handleChange: any;
  handleSubmit: any;
}

const LeadMagnetForm = ({
  email,
  handleChange,
  handleSubmit,
  response,
}: Props) => {
  const msgColor = response?.result === 'success' ? 'primary.highlight' : 'red';

  useEffect(() => {
    console.log('mounted form');
    return () => {
      console.log('unmounted form');
    };
  });

  return (
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
      <Button mt={5} w={'full'} onClick={handleSubmit}>
        Invia
      </Button>
      {response && (
        <Text fontWeight={'bold'} color={msgColor}>
          {response.msg}
        </Text>
      )}
    </FormControl>
  );
};

export default LeadMagnetForm;
