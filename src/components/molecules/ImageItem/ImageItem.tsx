import { ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { ImageItemProps } from "@/data/itemData";
import { srcset } from "@/utils/srcset";
import ImageItemBar from "./ImageItemBar";
import { globals } from "@/data/globals";

const ImageItem = ({ img, cols, rows, title, subtitle }: ImageItemProps) => {
  return (
    <ImageListItem
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 40,
      }}
      sx={{ padding: "4px" }}
      key={img}
      cols={cols || 1}
      rows={cols || 1}
    >
      <img
        {...srcset(img, globals.ROW_HEIGHT, rows, cols)}
        alt={title}
        loading="lazy"
      />
      <ImageItemBar subtitle={subtitle} title={title} />
    </ImageListItem>
  );
};

export default ImageItem;
