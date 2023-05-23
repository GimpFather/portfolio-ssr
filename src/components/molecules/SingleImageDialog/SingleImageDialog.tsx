import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

type SingleImageDialog = {
  title: string;
  subtitle: string;
  openDialog: boolean;
  handleClick: () => void;
  img: string;
};

const SingleImageDialog = ({
  title,
  subtitle,
  handleClick,
  img,
  openDialog,
}: SingleImageDialog) => {
  return (
    <Dialog
      fullScreen={true}
      maxWidth={"md"}
      open={openDialog}
      onClose={handleClick}
      aria-labelledby={`Dialog with information about ${title} image.`}
    >
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{title}</Typography>
          <IconButton
            aria-label="Exit"
            onClick={handleClick}
            sx={{ padding: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography>{subtitle}</Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={img}
          alt={subtitle}
          fill
          style={{
            objectFit: "contain",
          }}
          loading="lazy"
          quality={100}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SingleImageDialog;
