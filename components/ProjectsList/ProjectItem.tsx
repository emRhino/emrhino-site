import styles from "./ProjectsList.module.css";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

interface ProjectItem {
  project: Object;
  isFirstProject?: boolean;
}

export default function ProjectItem({ project, isFirstProject }: ProjectItem) {
  const { image, slug, name } = project;

  const classes = classnames(styles.project, {
    [styles.first_prj]: isFirstProject,
  });

  return (
    <li className={classes}>
      <Link href={`/projekty/${slug}`}>
        <Image
          src={`/${image.source}`}
          alt={name}
          width={image.width}
          height={image.height}
        />
        <span>{name}</span>
      </Link>
    </li>
  );
}
