import styles from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";

interface ProjectsListProps {
  projects: {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    labels: {
      id: string;
      label: string;
    };
  }[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  // const descSortProjects = projects.reverse();

  const renderProjects = projects.map((project, index: number) => {
    return (
      <ProjectItem key={project.id} project={project} labels={project.labels} />
    );
  });

  return <ul className={styles.projects}>{renderProjects}</ul>;
}
