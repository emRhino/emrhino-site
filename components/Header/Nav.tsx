import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/projekty">Projekty</Link>
      </li>
      <li>
        <Link href="/o-mnie">O mnie</Link>
      </li>
      {/* <li><Link>Blog</Link></li> */}
    </ul>
  );
}
