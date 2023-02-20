import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        Stworzone z <span className={styles.red}> ❤ </span> w Next.js
      </section>
    </footer>
  );
}
