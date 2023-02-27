"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { projects } from "@/data";
import ComposeContent from "@/components/ComposeContent/ComposeContent";
import getProjectBySlug from "@/helpers/getProjectBySlug";

export default function SingleProjects() {
  const pathname = usePathname();
  const project = getProjectBySlug(projects, pathname);
  const { name, description, image } = project[0];

  return (
    <main className="main">
      <section className="section">
        <h1>{name}</h1>
        <Image
          src={`/${image.source}`}
          alt={name}
          width={image.width}
          height={image.height}
        />
        <ComposeContent sections={description} />
      </section>
    </main>
  );
}
