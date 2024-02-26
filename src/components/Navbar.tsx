import Link from "next/link";
import svgIcon from '../../public/Designer.svg';
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsedButtonClicked, setIsCollapsedButtonClicked] = useState<boolean>(false);
  return (
    <nav className="border-b-[1px] lg:border-none">
      <div className="items-center grid gap-[.875rem] grid-flow-col py-4 px-6">
        <div>
          <Link href={'/'} className="flex justify-start items-center max-w-[40%]">
            <Image src={svgIcon} alt="Image Loading" width={80} height={70} />
            <p className="text-3xl font-semibold">Making Wonders</p>
          </Link>
        </div>

        <div className="flex justify-end items-center relative">
          <button onClick={() => setIsCollapsedButtonClicked(prev => !prev)} className="p-4 hover:bg-[#efedec] rounded-lg">
            {isCollapsedButtonClicked ? <CrossIcon /> : <CollapseIcon />}
          </button>
          {isCollapsedButtonClicked ? <CollapseMenu /> : null}
        </div>
      </div>
    </nav>
  );
}

const CollapseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="2em" height="1.75em">
  <path fillRule="evenodd" d="M0 2a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 2zm0 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm0 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 14z" clipRule="evenodd">
  </path>
</svg>


const CrossIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="2em" height="1.75em">
  <path fillRule="evenodd" d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 0 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 0 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 1 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd">
  </path>
</svg>

const CollapseMenu = () => {
  const menu = [['Log in', "#e8e6e5"], ['Sign up', '#cf3520']]
  return (
    <div className="absolute flex flex-col gap-3 top-20">
      {menu.map(([name, color]) =>
        <div className={`bg-[${color}] min-w-4`}>
          <Link href={`/`}>{name}</Link>
        </div>
      )}
    </div>
  )
}


export default Navbar;