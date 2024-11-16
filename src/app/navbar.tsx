import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavbarCollapse from "./navbarCollapse";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[99] h-[6.25rem] border-b-[1px] bg-white lg:border-none">
      <div className="grid grid-flow-col items-center gap-[.875rem] px-6 py-2">
        <div>
          <Link
            href={"/"}
            className="flex max-w-[40%] items-center justify-start"
          >
            <Image src="/Designer.svg" width={80} height={70} alt="logo" />
            <p className="text-3xl font-semibold">Wonders</p>
          </Link>
        </div>

        <div className="relative flex items-center justify-end lg:hidden">
          <NavbarCollapse />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
