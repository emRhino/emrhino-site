import styles from "../ComposeContent.module.css";
import { getLabelClass } from "@/helpers/getLabelClass";

interface LabelsProps {
  data: {
    id: string;
    label: string;
  }[];
}

export default function Labels({ data }: LabelsProps) {
  const renderLabels = data.map((label) => {
    const classes = getLabelClass(styles, label);

    return (
      <li key="label.id" className={classes}>
        {label.label}
      </li>
    );
  });

  return <ul className={styles.labels}>{renderLabels}</ul>;
}
