import { Lato } from "@next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "normalize.css/normalize.css";
import "@/styles/globals.css";
import styles from "@/app/page.module.css";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={lato.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={styles.app_wrapper}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
