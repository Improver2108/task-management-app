'use client'
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  return (
    <nav className="border-b-[1px] lg:border-none">
      <div className="items-center grid gap-[.875rem] grid-flow-col py-4 px-6">
        <div>
          <Link href={'/'} className="flex justify-start items-center max-w-[40%]">
            <Image src="/Designer.svg" width={80} height={70} alt="logo" />
            <p className="text-3xl font-semibold">Making Wonders</p>
          </Link>
        </div>

        <div className="flex justify-end lg:hidden items-center relative">
          <button onClick={() => setIsHamburgerClicked(prev => !prev)} className="p-4 hover:bg-[#efedec] rounded-lg text-4xl">
            {isHamburgerClicked ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
          {isHamburgerClicked ? <CollapseMenu /> : null}
        </div>
      </div>
    </nav>
  );
}

const CollapseMenu = () => {
  const menu = [['Sign in', "#e8e6e5", "login"], ['Sign up', '#cf3520', "signup"]]
  return (
    <div className="absolute flex flex-col gap-3 top-20 ">
      {menu.map(([name, color, link], index) =>
        <div className={`bg-[${color}] min-w-4`} key={index}>
          <button onClick={() => signIn()}>{name}</button>
        </div>
      )}
    </div>
  )
}


export default Navbar;