import { Metadata } from "next";
import Link from "next/link";
import Banner from "~/components/banner";
import Header from "~/components/header";
import Navbar from "~/components/navbar";

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

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
    </>
  );
}
