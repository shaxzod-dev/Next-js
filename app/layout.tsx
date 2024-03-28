import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryContextProvider from "~/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metaData: Metadata = {
  title: "Avion",
  keywords: [
    "Sofa",
    "Avion",
    "Tables",
    "Chairs",
    "Armchairs",
    "Drawers",
    "Chest of drawers",
  ],
  openGraph: {
    images: ["/Brand-img.png"],
  },
  description: "Luxury homeware for people who love timeless design quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Avion</title>
      </head>
      <body className={inter.className}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </body>
    </html>
  );
}
