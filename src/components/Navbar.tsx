import Link from "next/link";
import { useState } from "react";
import { BannerIcon } from "./Icons";
import { signIn } from "next-auth/react";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  return (
    <nav className="border-b-[1px] lg:border-none">
      <div className="items-center grid gap-[.875rem] grid-flow-col py-4 px-6">
        <div>
          <Link href={'/'} className="flex justify-start items-center max-w-[40%]">
            <BannerIcon width={80} height={70} />
            <p className="text-3xl font-semibold">Making Wonders</p>
          </Link>
        </div>

        <div className="flex justify-end items-center relative">
          <button onClick={() => setIsHamburgerClicked(prev => !prev)} className="p-4 hover:bg-[#efedec] rounded-lg">
            {isHamburgerClicked ? <CrossIcon /> : <HamburgerIcon />}
          </button>
          {isHamburgerClicked ? <CollapseMenu /> : null}
        </div>
      </div>
    </nav>
  );
}

const HamburgerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="2em" height="1.75em">
  <path fillRule="evenodd" d="M0 2a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 2zm0 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm0 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 14z" clipRule="evenodd">
  </path>
</svg>


const CrossIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="2em" height="1.75em">
  <path fillRule="evenodd" d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 0 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 0 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 1 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd">
  </path>
</svg>

const CollapseMenu = () => {
  const menu = [['Log in', "#e8e6e5", "login"], ['Sign up', '#cf3520', "signup"]]
  return (
    <div className="absolute flex flex-col gap-3 top-20">
      {menu.map(([name, color, link], index) =>
        <div className={`bg-[${color}] min-w-4`} key={index}>
          <button onClick={() => signIn()}>{name}</button>
        </div>
      )}
    </div>
  )
}


export default Navbar;