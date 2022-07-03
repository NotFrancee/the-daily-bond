import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
