import { Box, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import { useState } from "react";

type NavbarLinkProps = {
  caption: string;
  linkUrl?: string;
};

const NavbarLink = ({ caption }: NavbarLinkProps) => {
  const { palette } = useTheme();
  const [onHover, setOnHover] = useState(false);

  return (
    <Grid2 xs={2}>
      <Typography
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 40,
        }}
        whileHover={{ opacity: 0.55 }}
        onHoverStart={() => setOnHover(true)}
        onHoverEnd={() => setOnHover(false)}
        sx={{
          color: palette.primary.main,
          position: "relative",
        }}
      >
        {onHover ? (
          <motion.div
            layoutId="underline"
            style={{
              position: "absolute",
              bottom: "-5px",
              width: "100%",
              height: "2px",
              borderRadius: "4px",
              backgroundColor: palette.primary.main,
            }}
          />
        ) : null}
        {caption}
      </Typography>
    </Grid2>
  );
};

export default NavbarLink;
