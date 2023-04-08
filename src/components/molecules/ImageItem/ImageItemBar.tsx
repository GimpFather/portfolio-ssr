import { IconButton, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ImageItemProps } from "@/data/itemData";

const ImageItemBar = ({
  title,
  subtitle,
}: Omit<ImageItemProps, "rows" | "cols" | "img">) => {
  return (
    <ImageListItemBar
      sx={{ margin: "4px", paddingX: "8px", backgroundColor: "violet" }}
      title={title}
      subtitle={subtitle}
      actionIcon={
        <IconButton
          sx={{ color: "white", padding: "8px", marginRight: "8px" }}
          aria-label={`info about ${title}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  );
};

export default ImageItemBar;
