"use client";

import styles from "../ComposeContent.module.css";
import Image from "next/image";

export default function ImageContent({ data }) {
  console.log(data);

  const renderImage = data.source && (
    <div className={styles.image}>
      {
        <Image
          src={`/${data.source}`}
          alt=""
          width={data.width}
          height={data.height}
        />
      }
    </div>
  );
  return <>{renderImage}</>;
}
