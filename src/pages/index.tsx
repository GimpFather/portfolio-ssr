import PageHeadTag from "@/components/atoms/PageHeadTag";
import { Box, Container, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Home() {
  const { palette } = useTheme();

  return (
    <>
      <PageHeadTag title="Index Page" desc="This is just a index site" />
      <Container maxWidth="lg">
        <Box textAlign="center" padding={8}>
          <Typography variant="h6" color={palette.info.main}>
            This is simple Index Page, at some point u gonna see there something
            more!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
