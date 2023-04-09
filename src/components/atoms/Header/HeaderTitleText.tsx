import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const HeaderTitleText = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ opacity: 0.75 }}
        variant="h3"
        color={theme.palette.primary.main}
      >
        Julia Duda
      </Typography>
    </Box>
  );
};

export default HeaderTitleText;
