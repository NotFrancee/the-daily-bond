import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { Section } from "../../../components/shared";
import { options } from "./richTextOptions";

interface Props {
  rawBody: any;
  pt?: number;
}

const RichText = ({ rawBody, ...rest }: Props) => {
  const richTextEl = renderRichText(rawBody, options);

  return <Section {...rest}>{richTextEl}</Section>;
};

export default RichText;