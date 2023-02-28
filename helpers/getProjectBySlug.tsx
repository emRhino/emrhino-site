export default function getProjectBySlug(projects, slug) {
  const project = projects.filter(
    (project) => `/projekty/${project.slug}` === slug
  );
  return project;
}
