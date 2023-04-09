import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeaderTitleText = () => {
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
        whileHover={{ opacity: 0.55 }}
        variant="h3"
        color="violet"
      >
        Julia Duda
      </Typography>
    </Box>
  );
};

export default HeaderTitleText;
