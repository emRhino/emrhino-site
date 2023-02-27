export default function getProjectBySlug(projects: any, slug: any) {
  const project = projects.filter(
    (project: any) => `/projekty/${project.slug}` === slug
  );
  return project;
}
