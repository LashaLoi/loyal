import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitch } from "./components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOYAL",
  description: "LOYAL GENERATION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ThemeSwitch />
      </body>
    </html>
  );
}
