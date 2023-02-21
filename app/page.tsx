import Image from "next/image";
import styles from "./HomePage.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className="group">
          <div className="left">
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
              <Button href="/cv" style="primary">
                Pobierz CV
              </Button>
              <Button href="/o-mnie" style="secondary">
                Czytaj dalej o mnie
              </Button>
            </div>
          </div>
          <div className="right">
            <Image
              src="/me.jpg"
              alt="Marcin Rynkowski"
              width={1037}
              height={692}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="group">
          <div className="left">
            <Image
              src="/me.jpg"
              alt="Marcin Rynkowski"
              width={1037}
              height={692}
            />
          </div>
          <div className="right">
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
              <Button href="/projekty" style="primary">
                Zobacz projekty
              </Button>
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
