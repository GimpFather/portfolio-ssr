import { ImageList, useMediaQuery, useTheme } from "@mui/material";
import { ImageItemProps } from "../../../data/itemData";
import ImageItem from "../ImageItem/ImageItem";
import { globals } from "@/data/globals";
import { PlaceholderItem } from "@/utils/api/types/PlaceholderItem";

export interface QuiltedImagesListProps {
  openModal?: (data: ImageItemProps) => void;
  imageItems: PlaceholderItem[];
}

const QuiltedImageList = ({ imageItems }: QuiltedImagesListProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList
      variant="quilted"
      cols={isDesktop ? 3 : 1}
      rowHeight={globals.ROW_HEIGHT}
      sx={{ overflow: "hidden" }}
    >
      {imageItems.map((item, key) => (
        <ImageItem
          img={`https:${item.fields.img.fields.file.url}`}
          cols={isDesktop ? item.fields.cols : 1}
          rows={isDesktop ? item.fields.row : 1}
          subtitle={item.fields.subtitle}
          title={item.fields.title}
          key={key}
        />
      ))}
    </ImageList>
  );
};

export default QuiltedImageList;
