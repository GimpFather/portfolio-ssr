import { Container, Grid } from "@mui/material";
import React from "react";
import QuiltedImageList from "../molecules/QuiltedImageList/QuiltedImageList";

const ImageListBlock = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" alignItems="center">
        <QuiltedImageList />
      </Grid>
    </Container>
  );
};

export default ImageListBlock;
