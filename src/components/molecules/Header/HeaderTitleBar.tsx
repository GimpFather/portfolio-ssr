import HeaderText from "@/components/atoms/Header/HeaderText";
import { Grid, useTheme } from "@mui/material";

const HeaderTitleBar = () => {
  const { palette } = useTheme();

  return (
    <Grid justifyContent="center" alignItems="center">
      <HeaderText
        caption="Your Name"
        variant="h3"
        color={palette.primary.main}
      />
      <HeaderText
        caption="~someday u will see there a cool subtitle~"
        variant="h5"
        color={palette.primary.main}
      />
    </Grid>
  );
};

export default HeaderTitleBar;
