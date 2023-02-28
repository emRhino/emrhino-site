import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="emRhino portfolio"
        width={200}
        height={53}
      ></Image>
    </Link>
  );
}
