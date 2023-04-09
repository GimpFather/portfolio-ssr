import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import HeaderTitleBar from "../molecules/Header/HeaderTitleBar";

const HeaderBlock = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth={isDesktop && "sm"}
      disableGutters
      sx={{ marginY: 4, paddingTop: "16px" }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <HeaderTitleBar />
      </Grid>
    </Container>
  );
};

export default HeaderBlock;
