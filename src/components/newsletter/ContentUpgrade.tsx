import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import addToMailchimp, { MailchimpResponse } from "gatsby-plugin-mailchimp";
import { Section } from "../shared";
import { navigate } from "gatsby";

interface Props {
  title: string;
  description: string;
  contentUpgrade: string;
}

const ContentUpgrade = ({ title, description, contentUpgrade }: Props) => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<MailchimpResponse | null>(null);

  const msgColor = response?.res === "success" ? "primary.highlight" : "red";

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(event);

    try {
      const response = await addToMailchimp(email);
      setResponse(response);
      setTimeout(() => setResponse(null), 3000);

      // give the content upgrade
      navigate(contentUpgrade, {});
    } catch {
      console.error("Something went wrong");
    }
  };
  return (
    <Section p={10} w={"100vw"} mx={-5} bg={"primary.background"}>
      <Box>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text fontSize={"xl"}>{description}</Text>
      </Box>
      <FormControl>
        <FormLabel display={"none"} htmlFor="email">
          La tua Email
        </FormLabel>
        <Input
          value={email}
          onChange={handleChange}
          placeholder="La tua Email"
          id="email"
          type="email"
          border={"1px solid"}
          borderColor="primary.highlight"
          focusBorderColor="green.500"
        />
        {/* <FormHelperText>Non diffonderò la tua email</FormHelperText> */}
        <Button mt={5} w={"full"} onClick={handleSubmit}>
          Invia
        </Button>
        {response && <Text color={msgColor}>{response.msg}</Text>}
      </FormControl>
    </Section>
  );
};

export default ContentUpgrade;
