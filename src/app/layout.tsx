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
  icons: `/favicon.svg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href={`/favicon.svg`} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
