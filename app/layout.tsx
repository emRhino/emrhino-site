import React from "react";
import { Roboto } from "@next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "normalize.css/normalize.css";
import "@/styles/globals.css";
import styles from "@/app/page.module.css";

const lato = Roboto({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
