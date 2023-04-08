import { ImageList } from "@mui/material";
import { ImageItemProps, itemData } from "../../../data/itemData";
import ImageItem from "../ImageItem/ImageItem";
import { globals } from "@/data/globals";

export interface QuiltedImagesListProps {
  openModal: (data: ImageItemProps) => void;
}

const QuiltedImageList = () => {
  return (
    <ImageList
      variant="quilted"
      cols={3}
      rowHeight={globals.ROW_HEIGHT}
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
