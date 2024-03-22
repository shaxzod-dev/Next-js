import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-banner-img w-full h-[704px] bg-no-repeat bg-contain bg-center py-[130px]">
      <div className="container">
        <div className="h-[444px] relative w-full max-w-[630px] bg-white py-12 px-14 ml-auto">
          <h3 className="text-[32px] font-normal leading-[45px] text-justify text-title_color">
            Luxury homeware for people who love timeless design quality
          </h3>
          <p className="mt-5 text-lg font-normal leading-7 text-gray-600">
            Shop the new Spring 2022 collection today
          </p>
          <Link
            className="absolute bottom-12 left-14 py-[18px] px-8 bg-[rgb(249,249,249)]"
            href={"/about"}
          >
            View collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
