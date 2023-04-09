import { Box, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

type NavbarLinkProps = {
  caption: string;
  linkUrl?: string;
};

const NavbarLink = ({ caption }: NavbarLinkProps) => {
  const { palette } = useTheme();
  return (
    <Grid2 xs={2}>
      <Box>
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
          sx={{
            color: palette.primary.main,
          }}
        >
          {caption}
        </Typography>
      </Box>
    </Grid2>
  );
};

export default NavbarLink;
