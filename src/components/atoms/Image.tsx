import { ImageItemProps } from "@/data/itemData";
import { srcset } from "@/utils/srcset";

const Image = ({
  img,
  cols,
  rows,
  title,
}: Omit<ImageItemProps, "subtitle">) => {
  const rowHeight = 350;

  return (
    <img {...srcset(img, rowHeight, rows, cols)} alt={title} loading="lazy" />
  );
};

export default Image;
