import { Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

type NavbarLinkProps = {
  caption: string;
  onClick: () => void;
  selected?: boolean;
  linkUrl?: string;
};

const NavbarLink = ({ caption, selected, onClick }: NavbarLinkProps) => {
  const { palette } = useTheme();

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
        onClick={onClick}
        sx={{
          color: palette.primary.main,
          position: "relative",
        }}
      >
        {selected ? (
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
