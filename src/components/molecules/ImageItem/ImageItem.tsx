import { ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import ImageItemBar from "./ImageItemBar";
import { globals } from "@/data/globals";
import Image from "next/image";
import { ImageItemProps } from "@/types/ImageItem";

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
      whileHover={{ opacity: 0.55 }}
      sx={{ padding: "4px" }}
      key={img}
      cols={cols || 1}
      rows={cols || 1}
    >
      <Image
        width={cols * globals.ROW_HEIGHT}
        height={rows * globals.ROW_HEIGHT}
        src={img}
        alt={title}
        loading="lazy"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        quality={100}
      />
      <ImageItemBar subtitle={subtitle} title={title} />
    </ImageListItem>
  );
};

export default ImageItem;
