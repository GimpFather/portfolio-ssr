import PageHeadTag from "@/components/atoms/PageHeadTag";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <PageHeadTag title="Index Page" desc="This is just a index site" />
      <Container>
        <Box sx={{ marginBottom: 10 }}>
          <Typography>This is index page</Typography>
        </Box>
        <Box>
          <Typography>Other pages:</Typography>
          <Button onClick={() => handleClick("/test-page")}>test-page</Button>
        </Box>
      </Container>
    </>
  );
}
