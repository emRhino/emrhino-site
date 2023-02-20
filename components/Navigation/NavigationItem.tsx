"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function NavigationItem({ label, link }) {
  const pathname = usePathname();

  const isActive = pathname === link ? ` ${styles.active}` : "";

  return (
    <li>
      <Link className={styles.link + isActive} href={link}>
        {label}
      </Link>
    </li>
  );
}
