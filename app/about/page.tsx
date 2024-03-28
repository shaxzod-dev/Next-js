"use client";
import Link from "next/link";
import React from "react";

const About = async () => {
  return (
    <>
      <div className="container">
        <div>About page inner html</div>
        <Link className="underline text-blue-600" href={"/"}>
          Home
        </Link>
      </div>
    </>
  );
};

export default About;
