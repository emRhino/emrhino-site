import styles from "../ComposeContent.module.css";

export default function ListContent({ data }) {
  const renderList = data.map((line) => (
    <li className={styles.listItem} key={line}>
      {line}
    </li>
  ));
  return <ul className={styles.list}>{renderList}</ul>;
}
