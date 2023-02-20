import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Navigation.module.css";

export default function NavigationItem({ label, link }) {
  const router = useRouter();
  console.log(router);
  return (
    <li>
      <Link className={styles.link} href={link}>
        {label}
      </Link>
    </li>
  );
}
