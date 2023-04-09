import NavbarLink from "@/components/atoms/Navbar/NavbarLink";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Navbar = () => {
  return (
    <Grid2 container textAlign="center">
      <NavbarLink caption="category one" />
      <NavbarLink caption="category two" />
      <NavbarLink caption="category three" />
      <NavbarLink caption="category four" />
      <NavbarLink caption="category five" />
      <NavbarLink caption="category six" />
    </Grid2>
  );
};

export default Navbar;
