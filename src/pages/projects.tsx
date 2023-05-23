import PageHeadTag from "@/components/atoms/PageHeadTag";
import ProjectsBlock from "@/components/organisms/ProjectsBlock";
import getProjects from "@/utils/api/getProjects";
import { Project } from "@/utils/api/types/Projects";
import { Container } from "@mui/material";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

interface ProjectPageProps {
  projects: Project[];
}

export default function TestPage({ projects }: ProjectPageProps) {
  console.log(projects);
  return (
    <>
      <PageHeadTag title="Projects" desc="U can see there my projects!" />
      <Container maxWidth="lg">
        <ProjectsBlock projects={projects} />
      </Container>
    </>
  );
}
