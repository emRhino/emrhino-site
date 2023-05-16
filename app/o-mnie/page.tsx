import styles from "./page.module.css";
import { about_page } from "@/data";
import ComposeContent from "@/components/ComposeContent/ComposeContent";

export default function About() {
  return (
    <main className="main">
      <section className="section">
        <h1 className={styles.title}>{about_page.page_title}</h1>
        <ComposeContent sections={about_page.content} />
      </section>
    </main>
  );
}
