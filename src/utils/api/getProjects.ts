import { contentfulClient } from "@/utils/api/clients/contentfulClient";
import { ProjectsFields } from "./types/Projects";

const getProjects = async () => {
  const response = await contentfulClient.getEntries<ProjectsFields>({
    content_type: "project",
    order: "sys.createdAt",
  });

  return response.items;
};

export default getProjects;
