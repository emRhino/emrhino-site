import styles from "./page.module.css";
import { projects, projects_page } from "@/data.js";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

export default function Projekty() {
  return (
    <main className="main">
      <section className="section">
        <h1 className={styles.title}>{projects_page.page_title}</h1>
        <p className={styles.quick_desc}>{projects_page.content}</p>
        <div>
          <ProjectsList projects={projects} />
        </div>
      </section>
    </main>
  );
}
