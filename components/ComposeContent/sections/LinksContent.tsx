import { Fragment } from "react";
import Link from "next/link";
import styles from "../ComposeContent.module.css";

export default function LinksContent({ data }) {
  const links = data.map((link) => (
    <Fragment key={link.label}>
      <Link href={link.source} target="_blank">
        {link.label}
      </Link>
    </Fragment>
  ));

  return <div className={styles.links}>{links}</div>;
}
