import Link from "next/link";
import { navs } from "data";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem";

export default function Nav() {
  const renderNavigation = navs.map((nav) => {
    return <NavigationItem key={nav.link} label={nav.label} link={nav.link} />;
  });

  return <ul className={styles.nav}>{renderNavigation}</ul>;
}
