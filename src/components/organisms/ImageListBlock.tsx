import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import QuiltedImageList from "../molecules/QuiltedImageList/QuiltedImageList";
import { PlaceholderItem } from "@/utils/api/types/PlaceholderItem";

interface ImageListBlockProps {
  imageItems: PlaceholderItem[];
}

const ImageListBlock = ({ imageItems }: ImageListBlockProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={isDesktop && "md"} disableGutters>
      <Grid container justifyContent="center" alignItems="center">
        <QuiltedImageList imageItems={imageItems} />
      </Grid>
    </Container>
  );
};

export default ImageListBlock;
