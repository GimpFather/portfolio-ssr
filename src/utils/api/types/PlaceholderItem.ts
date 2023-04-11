export type PlaceholderItem = {
  fields: PlaceholderItemFields;
  metadata: {};
  sys: {};
};

export type PlaceholderItemFields = {
  cols: number;
  row: number;
  subtitle: string;
  title: string;
  img: ContentfulImageType;
};
