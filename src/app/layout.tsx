import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { lilita } from "@/app/ui/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "mid.karma",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lilita.className} text-blue-100 overscroll-none`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
