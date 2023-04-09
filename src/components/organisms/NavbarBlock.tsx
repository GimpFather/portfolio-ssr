import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../molecules/Navbar/Navbar";

const NavbarBlock = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={isDesktop && "md"} disableGutters>
      <Navbar />
    </Container>
  );
};

export default NavbarBlock;
