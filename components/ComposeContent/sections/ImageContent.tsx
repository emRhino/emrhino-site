"use client";

import styles from "../ComposeContent.module.css";
import Image from "next/image";

interface ImageContentProps {
  data: {
    source: string;
    width: number;
    height: number;
  };
}

export default function ImageContent({ data }: ImageContentProps) {
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
