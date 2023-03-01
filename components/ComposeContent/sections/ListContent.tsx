import styles from "../ComposeContent.module.css";

interface ListContentProps {
  data: string[];
}

export default function ListContent({ data }: ListContentProps) {
  const renderList = data.map((line: string) => (
    <li className={styles.listItem} key={line}>
      {line}
    </li>
  ));
  return <ul className={styles.list}>{renderList}</ul>;
}
