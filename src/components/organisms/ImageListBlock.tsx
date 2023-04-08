import { ImageItemProps } from "@/data/itemData";
import { Container, Grid } from "@mui/material";
import React from "react";
import QuiltedImageList from "../molecules/QuiltedImageList";

const ImageListBlock = () => {
  const [open, setOpen] = React.useState(false);
  const [imageData, setImageData] = React.useState<ImageItemProps>();

  const handleOpenModal = (data: ImageItemProps) => {
    setOpen(true);
    setImageData(data);
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" alignItems="center">
        <QuiltedImageList openModal={handleOpenModal}></QuiltedImageList>
      </Grid>
    </Container>
  );
};

export default ImageListBlock;
