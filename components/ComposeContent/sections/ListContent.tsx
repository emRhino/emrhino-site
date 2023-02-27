import styles from "../ComposeContent.module.css";

export default function ListContent({ data }: { data: any }) {
  const renderList = data.map((line: any) => (
    <li className={styles.listItem} key={line}>
      {line}
    </li>
  ));
  return <ul className={styles.list}>{renderList}</ul>;
}
