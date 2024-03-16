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

type SideNavbarProps = {
    onClick: MouseEventHandler<HTMLElement> | undefined
}

const SideNavbar = ({ onClick }: SideNavbarProps) => {
    const { data: session, status } = useSession();
    const [showUserOptions, setShowUserOptions] = useState(false)
    const navs = [['Search', <CiSearch key='0' />], ['Inbox', <HiOutlineInbox key='0' />], ['Today', <IoTodayOutline key='0' />], ['Upcoming', <MdOutlineUpcoming key='0' />], ['Filters & Labels', <TbFilters key='0' />]]

    return <nav className="p-2 flex flex-col gap-2 min-h-fit bg-[#fcfaf8] h-[100vh] w-[20em] overflow-y-auto">
        <section className="flex justify-between items-center">
            <button className="relative flex items-center gap-1 rounded-lg hover:bg-[#f3efec] p-1" onClick={() => setShowUserOptions(!showUserOptions)}>
                <Image className="rounded-full" src={session?.user.image as string} width={26} height={26} alt="profile" />
                <h1 className="ml-1 text-sm">{session?.user.name}</h1>
                <MdKeyboardArrowDown className="text-gray-500" />
            </button>
            <button className="hover:bg-[#f3efec] rounded-lg p-2" onClick={onClick}>
                <BsLayoutSidebar className="text-gray-500" />
            </button>
            {showUserOptions && <UserOptions />}
        </section>
        <button className="flex items-center gap-2 hover:bg-[#f3efec] p-1 rounded-lg">
            <HiPlusCircle className="text-2xl text-[#dc4c3e]" />
            <h1>Add Task</h1>
        </button>
        <ul className="p-1 space-y-1">
            {navs.map(([nav, icon], index) => <li className="flex items-center gap-2 p-1 cursor-pointer hover:bg-[#f3efec] rounded-lg" key={index}>
                {icon}
                <h2>{nav}</h2>
            </li>)}
        </ul>
    </nav>
}

const UserOptions = () => {
    return <nav className="absolute w-[100%] p-1 top-[3rem] bg-white rounded-lg shadow-md">
        <button onClick={() => signOut({ callbackUrl: '/', redirect: true })}>Logout</button>
    </nav>
}

export default SideNavbar;