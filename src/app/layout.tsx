import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Layout from "@/components/layout";
import Cursor from "@/components/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansel's Portofolio Website",
  description: "",
  icons: `${process.env.URL_PROD}/favicon.ico`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href={`${process.env.URL_PROD}/favicon.svg`} />
        <Suspense>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  );
}
