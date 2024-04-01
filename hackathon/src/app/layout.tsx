import type { Metadata } from "next";
import { Overlock } from "next/font/google";
import "./globals.css";

const inter = Overlock({ weight: "400", style: "normal", subsets: ["latin"], preload: true, display: "swap"});

export const metadata: Metadata = {
  title: "Microgestor",
  description: "Un proyecto de gestión de negocios por MementoMori"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
