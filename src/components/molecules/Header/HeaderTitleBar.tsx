import HeaderText from "@/components/atoms/Header/HeaderText";
import { Grid, useTheme } from "@mui/material";

const HeaderTitleBar = () => {
  const { palette } = useTheme();

  return (
    <Grid justifyContent="center" alignItems="center">
      <HeaderText
        caption="Julia Duda"
        variant="h3"
        color={palette.primary.main}
      />
      <HeaderText
        caption="~im trying to work with things that makes me happy~"
        variant="h5"
        color={palette.primary.main}
      />
    </Grid>
  );
};

export default HeaderTitleBar;
