import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {addToMailchimp} from 'gatsby-plugin-mailchimp'

interface Props {
  title: string;
  description: string;
  contentUpgrade: string;
}

const ContentUpgrade = ({ title, description, contentUpgrade }: Props) => {
  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const response = 
  };
  return;
  <Box>
    <Heading></Heading>
    <FormControl>
      <FormLabel></FormLabel>
      <Input></Input>
      <FormHelperText></FormHelperText>
      <Button onSubmit={}></Button>
    </FormControl>
  </Box>;
};

export default ContentUpgrade;
