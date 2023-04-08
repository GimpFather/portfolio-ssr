import PageHeadTag from "@/components/atoms/PageHeadTag";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function TestPage() {
  return (
    <>
      <PageHeadTag title="Test Page" desc="This is just a desc site" />
      <Container>
        <Box>
          <Typography>Test</Typography>
        </Box>
      </Container>
    </>
  );
}
