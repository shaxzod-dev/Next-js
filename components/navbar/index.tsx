import Link from "next/link";
import React from "react";
import { navData } from "~/data";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="flex items-center justify-center gap-x-11 py-5">
        {navData.map(({ href, id, text }) => {
          return (
            <Link
              className="text-base font-normal leading-[22px]"
              href={href}
              key={id}
            >
              {text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
