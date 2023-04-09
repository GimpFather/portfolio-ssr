import { IconButton, ImageListItemBar, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ImageItemProps } from "@/data/itemData";
import { motion } from "framer-motion";

const ImageItemBar = ({
  title,
  subtitle,
}: Omit<ImageItemProps, "rows" | "cols" | "img">) => {
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
          aria-label={`info about ${title}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  );
};

export default ImageItemBar;
