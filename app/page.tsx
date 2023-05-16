import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import TechnologyList from "@/components/TechnologyList/TechnologyList";

export default function Home() {
  return (
    <main className="main">
      <section className="section">
        <div className="group">
          <div className="left">
            <h1 className={styles.h1}>Cześć, tutaj Marcin Rynkowski</h1>
            <p className={styles.text}>
              Dobrze Cię tu widzieć! Jeżeli potrzebujesz, poniżej moesz pobrać
              moje aktualnie CV lub w skrócie dowiedzieć się więcej o mnie.
            </p>
            <div className={styles.links}>
              <Button
                href="/Marcin-Rynkowski-CV-2023.pdf"
                style="primary"
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >
                Pobierz CV
              </Button>
              <Button href="/o-mnie" style="secondary">
                Czytaj dalej o mnie
              </Button>
            </div>
          </div>
          <div className="right">
            <Image
              src="/marcin.png"
              alt="Marcin Rynkowski"
              width={1037}
              height={692}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="group">
          <div className="left">
            <Image
              src="/portfolio.png"
              alt="Marcin Rynkowski"
              width={1345}
              height={842}
            />
          </div>
          <div className="right">
            <h2>Portfolio</h2>
            <p className={styles.text}>
              W tym miejscu znajdziesz kilka moich projektów. Tam gdzie to było
              możlwe umieściłem linki do Githuba lub wersji live projektu.
            </p>
            <div className={styles.links}>
              <Button href="/projekty" style="primary">
                Zobacz projekty
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Technologie</h2>
        <TechnologyList />
      </section>
    </main>
  );
}
