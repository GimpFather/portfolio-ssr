import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface HeaderTextProps extends muiTypographyVariants {
  caption: string;
  color: string;
}

const HeaderText = ({ caption, variant, color }: HeaderTextProps) => {
  return (
    <Box textAlign={"center"}>
      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ opacity: 0.75 }}
        variant={variant}
        color={color}
      >
        {caption}
      </Typography>
    </Box>
  );
};

export default HeaderText;
