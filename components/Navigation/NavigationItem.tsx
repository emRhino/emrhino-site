"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import classnames from "classnames";

export default function NavigationItem({ label, link }) {
  const pathname = usePathname();

  const classes = classnames(styles.link, {
    [styles.active]: pathname.includes(link),
  });

  return (
    <li>
      <Link className={classes} href={link}>
        {label}
      </Link>
    </li>
  );
}
