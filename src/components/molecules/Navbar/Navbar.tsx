import NavbarLink from "@/components/atoms/Navbar/NavbarLink";
import Grid2 from "@mui/material/Unstable_Grid2";
import { tmpCategories } from "@/data/categories";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Grid2 container textAlign="center">
      <>
        {tmpCategories.map((category, key) => {
          return (
            <NavbarLink
              caption={category.name}
              key={key}
              onClick={() => setSelected(key)}
              selected={selected === key}
            />
          );
        })}
      </>
    </Grid2>
  );
};

export default Navbar;
