import Link from "next/link";
import React from "react";
import { Icons } from "~/assets";

const Header = () => {
  return (
    <header className="py-5 border-b-[rgba(0,0,0,0.1)] border-b-[1px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <button type="button" name="button">
            <Icons.SearchIcon />
          </button>
          <Link href={"/"} className="text-2xl font-normal leading-[30px]">
            Avion
          </Link>
          <div className="flex items-center gap-x-1">
            <button type="button" name="button">
              <Icons.CardIcon />
            </button>
            <button type="button" name="button">
              <Icons.UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
