import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Golfary - インバウンド日本ゴルフ旅行",
  description: "観光業の再構築で地方創生を行う",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "./dictionaries";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={inter.variable}>
        <Header dict={dict} lang={params.lang} />
        {children}
        <Footer dict={dict} lang={params.lang} />
      </body>
    </html>
  );
}
