import { Fragment } from "react";
import Link from "next/link";
import styles from "../ComposeContent.module.css";

interface LinksContentProps {
  data: [
    {
      label: string;
      source: string;
    }
  ];
}

export default function LinksContent({ data }: LinksContentProps) {
  console.log(data);
  const links = data.map((link) => (
    <Fragment key={link.label}>
      <Link href={link.source} target="_blank">
        {link.label}
      </Link>
    </Fragment>
  ));

  return <div className={styles.links}>{links}</div>;
}
