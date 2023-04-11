import PageHeadTag from "@/components/atoms/PageHeadTag";
import HeaderBlock from "@/components/organisms/HeaderBlock";
import ImageListBlock from "@/components/organisms/ImageListBlock";
import NavbarBlock from "@/components/organisms/NavbarBlock";
import getPlaceholderItems from "@/utils/api/getPlaceholderImages";
import { PlaceholderItem } from "@/utils/api/types/PlaceholderItem";
import { Container } from "@mui/material";

export async function getStaticProps() {
  const placeholderItems = await getPlaceholderItems();
  return {
    props: {
      placeholderItems,
    },
  };
}

interface TestPageProps {
  placeholderItems: PlaceholderItem[];
}

export default function TestPage({ placeholderItems }: TestPageProps) {
  return (
    <>
      <PageHeadTag title="Test Page" desc="This is just a test site" />
      <Container maxWidth="lg">
        <HeaderBlock />
        <NavbarBlock />
        <ImageListBlock imageItems={placeholderItems} />
      </Container>
    </>
  );
}
