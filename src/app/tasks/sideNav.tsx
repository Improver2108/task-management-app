"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BsLayoutSidebar } from "react-icons/bs";
import { MouseEventHandler, ReactNode, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineInbox } from "react-icons/hi2";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { TbFilters } from "react-icons/tb";
import Modal from "../_components/Modal";
import Link from "next/link";

type SideNavbarProps = {
  onClick: MouseEventHandler<HTMLElement>;
};

const SideNavbar = ({ onClick }: SideNavbarProps) => {
  const { data: session, status } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navLinks = [
    ["Search", <CiSearch key="0" />],
    ["Inbox", <HiOutlineInbox key="0" />],
    ["Today", <IoTodayOutline key="0" />],
    ["Upcoming", <MdOutlineUpcoming key="0" />],
    ["Filters & Labels", <TbFilters key="0" />],
  ];

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (index !== 0) {
      onClick(e);
      setCurrentPage(index);
    }
  };

  return (
    <nav className="flex h-[100vh] min-h-fit w-[20em] flex-col gap-2 overflow-y-auto bg-[#fcfaf8] p-2">
      <section className="flex items-center justify-between">
        <Modal isModelOpen={showUserOptions} setModalShow={setShowUserOptions}>
          <button
            className="relative flex items-center gap-1 rounded-lg p-1 hover:bg-[#f3efec]"
            onClick={() => setShowUserOptions(!showUserOptions)}
          >
            <Image
              className="rounded-full"
              src={session?.user.image as string}
              width={26}
              height={26}
              alt="profile"
            />
            <h1 className="ml-1 text-sm">{session?.user.name}</h1>
            <MdKeyboardArrowDown className="text-gray-500" />
          </button>
          {showUserOptions && (
            <div className="absolute top-[3rem] w-[100%] rounded-lg bg-white p-1 shadow-md">
              <UserOptions />
            </div>
          )}
        </Modal>
        <button className="rounded-lg p-2 hover:bg-[#f3efec]" onClick={onClick}>
          <BsLayoutSidebar className="text-gray-500" />
        </button>
      </section>
      <button className="flex items-center gap-2 rounded-lg p-1 hover:bg-[#f3efec]">
        <HiPlusCircle className="text-2xl text-[#dc4c3e]" />
        <h1>Add Task</h1>
      </button>
      <ul className="space-y-1 p-1">
        {navLinks.map(([nav, icon], index) => (
          <Link
            href={`/tasks/${nav?.toString().toLowerCase().split(" ")[0]}`}
            className={`flex cursor-pointer items-center gap-2 rounded-lg p-1 ${index === currentPage ? "bg-amber-100" : ""}`}
            key={index}
            onClick={(e) => handlePageChange(e, index)}
          >
            {icon}
            <h2>{nav}</h2>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const UserOptions = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/", redirect: true })}>
      Logout
    </button>
  );
};

export default SideNavbar;
