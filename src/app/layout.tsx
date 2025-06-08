import "./globals.css";
import Header from "./components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bots de WhatsApp",
  description: "Automatiza tu negocio con bots personalizados de WhatsApp",
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
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}