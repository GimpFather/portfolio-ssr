import PageHeadTag from "@/components/atoms/PageHeadTag";
import ImageListBlock from "@/components/organisms/ImageListBlock";
import { Container } from "@mui/material";

export default function TestPage() {
  return (
    <>
      <PageHeadTag title="Test Page" desc="This is just a test site" />
      <Container maxWidth="lg">
        <ImageListBlock />
      </Container>
    </>
  );
}
