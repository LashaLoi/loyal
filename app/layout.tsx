import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { ThemeSwitch } from "./components/theme-switch";

const unbounded = Unbounded({ subsets: ["cyrillic"] });

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
      <body className={unbounded.className}>
        {children}
        <ThemeSwitch />
      </body>
    </html>
  );
}
