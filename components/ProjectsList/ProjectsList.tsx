import Link from "next/link";
import styles from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projects }) {
  const renderProjects = projects.map((project, index: number) => {
    const isFirstProject = index === 0 ? true : false;
    return (
      <ProjectItem
        key={project.id}
        project={project}
        isFirstProject={isFirstProject}
      />
    );
  });

  return <ul className={styles.projects}>{renderProjects}</ul>;
}
