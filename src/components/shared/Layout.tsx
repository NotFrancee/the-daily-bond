import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../responsive-header/NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
