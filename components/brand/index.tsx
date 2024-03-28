import React from "react";
import { BrandData } from "~/data";

const Brand = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-center text-2xl font-normal">
          What makes our brand different
        </h1>
        <div className="grid grid-cols-4 mt-9 gap-x-[22px]">
          {BrandData.map(({ icon, id, title, text }) => {
            return (
              <div key={id} className="p-[48px] bg-[rgb(249,249,249)]">
                <div className="w-6 h-6 object-contain">{icon}</div>
                <h2 className="my-3 text-[19px] w-full font-normal">{title}</h2>
                <p className="text-base leading-6 font-normal">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brand;
