import Image from "next/image";
import styles from "./HomePage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div class="group">
          <div class="left">
            <h1 className={styles.h1}>Cześć, tutaj Marcin Rynkowski</h1>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className={styles.links}>
              <Link href="/cv">Pobierz CV</Link>
              <Link href="/o-mnie">Czytaj dalej o mnie</Link>
            </div>
          </div>
          <div class="right">Moje foto</div>
        </div>
      </section>
      <section className={styles.section}>
        <div class="group">
          <div class={styles.left}>obrazki portfolio</div>
          <div class={styles.right}>
            <h2>Portfolio</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className={styles.links}>
              <Link href="/portfolio">Zobacz wszystkie projekty</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Kontakt</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </section>
    </main>
  );
}
