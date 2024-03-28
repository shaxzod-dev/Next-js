"use client";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { IProductData } from "~/types";
import { Skeleton } from "../ui/skeleton";
import { useQuery } from "react-query";
import { fetchData } from "~/hooks/fetch-data";

const Product = () => {
  const { data, isLoading } = useQuery<IProductData[]>(["ProductData"], () =>
    fetchData({ url: "https://6605705d2ca9478ea1804f1b.mockapi.io/data" })
  );
  console.log(data);
  console.log(isLoading);

  return (
    <section className="pt-7 pb-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-x-5">
          {data?.length ? (
            data.map(({ id, title, image, price }) => {
              return (
                <div className="flex flex-col" key={id}>
                  <div className="max-w-[305px] w-full h-auto group overflow-hidden transition-shadow duration-500 hover:shadow-black hover:shadow-2xl ">
                    <Link href={`/about/${id}`}>
                      <img
                        src={image}
                        alt={title}
                        className="w-full group-hover:scale-125 transition-transform duration-500"
                      />
                    </Link>
                  </div>
                  <h2 className="mt-6 mb-2 text-[19px] w-full font-normal">
                    {title}
                  </h2>
                  <h4 className="text-lg font-normal leading-[27px]">
                    {price.toLocaleString("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </h4>
                </div>
              );
            })
          ) : (
            <div className="flex gap-x-5">
              {Array.from({ length: 4 }).map(
                (item: unknown, i: number): ReactElement => (
                  <div key={i} className="flex flex-col">
                    <Skeleton className="bg-slate-400 w-[305px] h-[375px]" />
                    <Skeleton className="bg-slate-400 w-[154px] mt-6 h-7" />
                    <Skeleton className="bg-slate-400 w-[60px] mt-2 h-7" />
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <Link
          className="py-[18px] px-8 bg-[rgb(249,249,249)] block w-max mx-auto mt-12 text-center"
          href={"/about"}
        >
          View Product
        </Link>
      </div>
    </section>
  );
};

export default Product;
