import Image from "next/image";
import styles from "./TechnologyList.module.css";

const technologies = ["react", "next", "ts", "redux", "js", "git", "sass"];

const TechnologyList = () => {
  const renderList = technologies.map((technology) => (
    <li key={technology}>
      <Image
        src={`/${technology}.png`}
        alt={technology}
        width={75}
        height={75}
      />
    </li>
  ));

  return <ul className={styles.list}>{renderList}</ul>;
};

export default TechnologyList;
