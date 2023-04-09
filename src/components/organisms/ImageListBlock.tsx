import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import QuiltedImageList from "../molecules/QuiltedImageList/QuiltedImageList";

const ImageListBlock = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={isDesktop && "lg"} disableGutters>
      <Grid container justifyContent="center" alignItems="center">
        <QuiltedImageList />
      </Grid>
    </Container>
  );
};

export default ImageListBlock;
