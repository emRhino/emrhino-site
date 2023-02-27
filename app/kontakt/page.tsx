import styles from "./page.module.css";
import { contact_page } from "@/data.js";
import Link from "next/link";
import { BsLinkedin, BsEnvelope, BsFacebook, BsGithub } from "react-icons/bs";

export default function Contact() {
  const { content } = contact_page;

  const icon = (section) => {
    switch (section.id) {
      case "github":
        return <BsGithub />;
        break;
      case "fb":
        return <BsFacebook />;
        break;
      case "mail":
        return <BsEnvelope />;
        break;
      case "linkedin":
        return <BsLinkedin />;
        break;
      default:
        throw new Error("Invalid icon");
    }
  };

  const renderContactList = content[0].content.map((section) => {
    return (
      <li key={section.id}>
        <Link href={section.link}>
          {icon(section)}
          <span className={styles.label}>{section.label}</span>
        </Link>
      </li>
    );
  });

  return (
    <main className="main">
      <section className="section">
        <h1 className={styles.title}>{contact_page.page_title}</h1>
        <ul className={styles.list}>{renderContactList}</ul>
      </section>
    </main>
  );
}
