import NavbarLink from "@/components/atoms/Navbar/NavbarLink";
import Grid2 from "@mui/material/Unstable_Grid2";
import { tmpCategories } from "@/data/categories";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const handleClick = (path: string, key: number) => {
    setSelected(key);
    router.push(path);
  };

  return (
    <Grid2 container textAlign="center">
      <>
        {tmpCategories.map((category, key) => {
          return (
            <NavbarLink
              caption={category.name}
              key={key}
              onClick={() => {
                handleClick(category.url, key);
              }}
              selected={selected === key}
            />
          );
        })}
      </>
    </Grid2>
  );
};

export default Navbar;
