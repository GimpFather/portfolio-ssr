import { contentfulClient } from "@/utils/api/clients/contentfulClient";
import { PlaceholderItemFields } from "./types/PlaceholderItem";

const getPlaceholderItems = async () => {
  const response = await contentfulClient.getEntries<PlaceholderItemFields>({
    content_type: "image",
    order: "sys.createdAt",
  });

  return response.items;
};

export default getPlaceholderItems;
