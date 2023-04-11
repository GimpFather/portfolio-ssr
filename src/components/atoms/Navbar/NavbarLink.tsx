import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

type NavbarLinkProps = {
  caption: string;
  onClick: () => void;
  selected?: boolean;
  linkUrl?: string;
};

const NavbarLink = ({ caption, selected, onClick }: NavbarLinkProps) => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up("md"));

  return (
    <Grid2 xs={12} md={2} sx={{ paddingY: 1 }}>
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
        onClick={onClick}
        sx={{
          color: palette.primary.main,
          position: "relative",
          cursor: "pointer",
        }}
      >
        {selected ? (
          <motion.div
            layoutId="underline"
            style={{
              position: "absolute",
              left: isDesktop ? 0 : "33%",
              bottom: "-5px",
              width: isDesktop ? "100%" : "33%",
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
