import styles from "./page.module.css";
import { about_page } from "@/data.js";

export default function About() {
  return (
    <main className="main">
      <section className="section">
        <h1 className={styles.title}>{about_page.page_title}</h1>
        <p className={styles.quick_desc}>{about_page.content}</p>
      </section>
    </main>
  );
}
