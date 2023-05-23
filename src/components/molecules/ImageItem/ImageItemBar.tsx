import { IconButton, ImageListItemBar, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

type ImageItemBarProps = {
  title: string;
  subtitle: string;
  handleClick: () => void;
};

const ImageItemBar = ({ title, subtitle, handleClick }: ImageItemBarProps) => {
  const { palette } = useTheme();

  return (
    <ImageListItemBar
      sx={{ backgroundColor: palette.primary.main, marginX: "4px" }}
      title={title}
      subtitle={subtitle}
      actionIcon={
        <IconButton
          sx={{
            color: palette.common.white,
            padding: "8px",
            marginRight: "8px",
          }}
          onClick={handleClick}
          aria-label={`Informations about ${title} image.`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  );
};

export default ImageItemBar;
