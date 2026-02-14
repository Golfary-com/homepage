import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
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
    <html lang={params.lang} className={`${inter.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}>
      <body>
        <Header dict={dict} lang={params.lang} />
        {children}
        <Footer dict={dict} lang={params.lang} />
      </body>
    </html>
  );
}
