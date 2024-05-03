import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bitWise = localFont({ src: "./Bitwise.ttf" });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celeb Info Hub",
  description: "Mainstream Movie Actresses Spice Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={bitWise.className}>{children}</body>
    </html>
  );
}
