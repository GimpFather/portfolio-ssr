export type Project = {
  fields: ProjectsFields;
  metadata: {};
  sys: {};
};

export type ProjectsFields = {
  title: string;
  description: string;
  url: string;
  image: ContentfulImageType;
};
