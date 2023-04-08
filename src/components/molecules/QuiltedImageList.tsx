import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { ImageItemProps, itemData } from "../../data/itemData";
import { motion } from "framer-motion";
import ImageItem from "./ImageItem";

interface QuiltedImagesListProps {
  openModal: (data: ImageItemProps) => void;
}

const QuiltedImageList = ({ openModal }: QuiltedImagesListProps) => {
  const rowHeight = 350;

  return (
    <ImageList
      variant="quilted"
      cols={3}
      rowHeight={rowHeight}
      sx={{ overflow: "hidden" }}
    >
      {itemData.map((item, key) => (
        <ImageItem
          img={item.img}
          cols={item.cols}
          rows={item.rows}
          subtitle={item.subtitle}
          title={item.title}
          key={key}
        />
      ))}
    </ImageList>
  );
};

export default QuiltedImageList;
