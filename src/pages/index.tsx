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
      <Head>
        <title>Index Page</title>
        <meta name="description" content="This is just a Index Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
