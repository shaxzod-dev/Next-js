"use client";
import Link from "next/link";
import React from "react";
import { TypeJsonData } from "~/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const About = async () => {
  const data: TypeJsonData[] = await getData();
  console.log(data, "hii");
  return (
    <>
      <div className="container">
        <div>About page inner html</div>
        <Link className="underline text-blue-600" href={"/"}>
          Home
        </Link>
        {data.map((el) => {
          return (
            <div className="grid grid-cols-10 gap-2 ">
              <div key={el.id} className="flex  items-center">
                <p className="text-red-600">{el.id}</p>
                <p>{el.userId}</p>
                <p>{el.completed}</p>
                <p>hello</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
