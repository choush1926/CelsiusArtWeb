import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-en",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif-tc",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Celsius Art | 攝氏藝術 — 跨媒材藝術創作",
  description:
    "橫跨油畫、裝置、陶藝與羊毛氈的跨媒材創作。關注物質與空間之間的臨界狀態。",
  openGraph: {
    title: "Celsius Art | 攝氏藝術",
    description: "跨媒材藝術創作 — 物質的詩意",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${cormorant.variable} ${notoSerifTC.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
