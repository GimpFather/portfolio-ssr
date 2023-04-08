import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="This is just a TestPage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box>
          <Typography>Test</Typography>
        </Box>
      </Container>
    </>
  );
}
