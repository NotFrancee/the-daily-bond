import { Flex, useStyleConfig } from "@chakra-ui/react";
import React from "react";

type Props = any;

const Section = (props: Props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Section", { variant });

  return <Flex __css={styles} {...rest} />;
};

export default Section;
