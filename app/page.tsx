import { Metadata } from "next";
import Banner from "~/components/banner";
import Brand from "~/components/brand";
import Header from "~/components/header";
import Idea from "~/components/idea";
import Navbar from "~/components/navbar";
import SignUp from "~/components/sign-up";
import Product from "~/components/product";

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
      <Brand />
      <Product />
      <Idea />
      <SignUp />
    </>
  );
}
