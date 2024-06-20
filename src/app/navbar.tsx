"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./_components/Modal";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  return (
    <nav className="border-b-[1px] lg:border-none">
      <div className="grid grid-flow-col items-center gap-[.875rem] px-6 py-4">
        <div>
          <Link
            href={"/"}
            className="flex max-w-[40%] items-center justify-start"
          >
            <Image src="/Designer.svg" width={80} height={70} alt="logo" />
            <p className="text-3xl font-semibold">Making Wonders</p>
          </Link>
        </div>

        <div className="relative flex items-center justify-end lg:hidden">
          <button
            onClick={() => setIsHamburgerClicked((prev) => !prev)}
            className="rounded-lg p-4 text-4xl hover:bg-[#efedec]"
          >
            {isHamburgerClicked ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
          {isHamburgerClicked ? (
            <Modal
              className="absolute top-full"
              isModelOpen={isHamburgerClicked}
              setModalShow={setIsHamburgerClicked}
            >
              <CollapseMenu />
            </Modal>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

const CollapseMenu = () => {
  const menu = [
    ["Sign in", "#e8e6e5", "login"],
    ["Sign up", "#cf3520", "signup"],
  ];
  return (
    <div className="flex flex-col gap-3 ">
      {menu.map(([name, color, link], index) => (
        <div className={`bg-[${color}] min-w-4`} key={index}>
          <button onClick={() => signIn()}>{name}</button>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
