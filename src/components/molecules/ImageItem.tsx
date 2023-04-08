import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";
import { ImageItemProps } from "@/data/itemData";
import { srcset } from "@/utils/srcset";
import Image from "../atoms/Image";

const ImageItem = ({ img, cols, rows, title, subtitle }: ImageItemProps) => {
  const rowHeight = 350;
  return (
    <ImageListItem
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 40,
      }}
      sx={{ padding: "4px", border: "3px solid violet" }}
      key={img}
      cols={cols || 1}
      rows={cols || 1}
    >
      {/* <Image cols={cols} img={img} rows={rows} title={title} /> */}
      <img {...srcset(img, rowHeight, rows, cols)} alt={title} loading="lazy" />
      <ImageListItemBar
        sx={{ margin: "4px", paddingX: "8px", backgroundColor: "violet" }}
        title={title}
        subtitle={subtitle}
        actionIcon={
          <IconButton
            // onClick={() => openModal(item)}
            sx={{ color: "white", padding: "8px", marginRight: "8px" }}
            aria-label={`info about ${title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default ImageItem;
