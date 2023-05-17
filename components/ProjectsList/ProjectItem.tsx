import Link from "next/link";
import Image from "next/image";

import styles from "./ProjectsList.module.css";
import Labels from "../ComposeContent/sections/Labels";

interface ProjectItem {
  project: Object;
  labels: {
    id: string;
    label: string;
  };
}

export default function ProjectItem({ project }: ProjectItem) {
  const { image, slug, name, labels, short_description } = project;

  return (
    <li className={styles.project}>
      <Link href={`/projekty/${slug}`}>
        <Image
          src={`/${image.source}`}
          alt={name}
          width={image.width}
          height={image.height}
        />
        <span className={styles.details}>
          <span className={styles.title}>{name}</span>
          <span className={styles.labels}>
            <Labels data={labels} />
          </span>
          <span className={styles.excerpt}>{short_description}</span>
        </span>
      </Link>
    </li>
  );
}
