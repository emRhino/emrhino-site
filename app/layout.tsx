import { Roboto } from "@next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "normalize.css/normalize.css";
import "@/styles/globals.css";
import classes from "@/app/HomePage.module.css";

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={roboto.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={classes.wrapper}>
          <header className={classes.pageHeader}>
            <Header />
          </header>
        </div>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
