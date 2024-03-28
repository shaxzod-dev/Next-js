import Link from "next/link";
import React from "react";

const Idea = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col h-[478px] bg-primary_color p-16 relative">
            <h1 className="text-[32px] font-normal leading-[39px] text-white">
              It started with a small idea
            </h1>
            <p className="mt-3 text-white text-lg leading-6 font-normal">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
            <Link
              className="text-white absolute bottom-12 left-14 py-[18px] px-8 bg-[rgba(249,249,249,0.15)]"
              href={"/about"}
            >
              View collection
            </Link>
          </div>
          <div className="bg-idea-armchair"></div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
