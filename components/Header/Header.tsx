import styles from "./Header.module.css";
import Logo from "./Logo";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
