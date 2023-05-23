import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import QuiltedImageList from "../molecules/QuiltedImageList/QuiltedImageList";
import { PlaceholderItem } from "@/utils/api/types/PlaceholderItem";
import { Project } from "@/utils/api/types/Projects";
import { globals } from "@/data/globals";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";

interface ProjectsBlockProps {
  projects: Project[];
}

const ProjectsBlock = ({ projects }: ProjectsBlockProps) => {
  const { breakpoints, palette } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up("md"));

  return (
    <Container maxWidth={isDesktop && "md"} disableGutters>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ marginY: "16px" }}
      >
        {projects.map((project, key) => {
          return (
            <Grid sm={12} md={4} sx={{ width: globals.ROW_HEIGHT }}>
              <Card
                component={motion.div}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 40,
                }}
                whileHover={{ opacity: 0.55 }}
                variant="outlined"
              >
                <CardMedia
                  sx={{ height: globals.ROW_HEIGHT / 2 }}
                  image={`https:${project.fields.image.fields.file.url}`}
                  title={project.fields.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color={palette.common.black}
                    component="div"
                  >
                    {project.fields.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.fields.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingX: 2 }}>
                  <Link
                    rel="noopener"
                    target="_blank"
                    variant="button"
                    underline="none"
                    href={project.fields.url}
                  >
                    Learn More
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProjectsBlock;
