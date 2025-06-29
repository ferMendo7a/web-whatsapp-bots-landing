import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "botery – Bots de WhatsApp para tu negocio",
  description: "Automatiza tu negocio con bots personalizados de WhatsApp",
  keywords: ["WhatsApp", "bots", "automatización", "negocios", "atención al cliente"],
  other: {
    "og:title": "botery – Bots de WhatsApp para tu negocio",
    "og:description": "Automatiza tu negocio con bots personalizados de WhatsApp",
    "og:type": "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}