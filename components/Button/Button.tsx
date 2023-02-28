"use client";

import { ReactNode } from "react";
import styles from "./Button.module.css";
import Link from "next/link";
import classNames from "classnames";

export default function Button({
  href,
  style,
  children,
}: {
  href: string;
  style: string;
  children: ReactNode;
}) {
  const btnClass = classNames(styles.btn, {
    [styles.primary]: style === "primary",
    [styles.secondary]: style === "secondary",
  });

  return (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  );
}
