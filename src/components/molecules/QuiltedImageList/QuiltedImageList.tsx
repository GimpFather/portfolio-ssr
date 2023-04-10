import { ImageList, useMediaQuery, useTheme } from "@mui/material";
import { ImageItemProps, itemData } from "../../../data/itemData";
import ImageItem from "../ImageItem/ImageItem";
import { tmpImageData } from "@/data/tmpImageData";
import { globals } from "@/data/globals";

export interface QuiltedImagesListProps {
  openModal: (data: ImageItemProps) => void;
}

const QuiltedImageList = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList
      variant="quilted"
      cols={isDesktop ? 3 : 1}
      rowHeight={globals.ROW_HEIGHT}
      sx={{ overflow: "hidden" }}
    >
      {tmpImageData.map((item, key) => (
        <ImageItem
          img={item.img}
          cols={isDesktop ? item.cols : 1}
          rows={isDesktop ? item.rows : 1}
          subtitle={item.subtitle}
          title={item.title}
          key={key}
        />
      ))}
    </ImageList>
  );
};

export default QuiltedImageList;
