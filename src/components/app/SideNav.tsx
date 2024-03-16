import { MdKeyboardArrowDown } from "react-icons/md";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsLayoutSidebar } from "react-icons/bs";
import { MouseEventHandler, ReactNode } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineInbox } from "react-icons/hi2";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { TbFilters } from "react-icons/tb";

type SideNavbarProps = {
    onClick: MouseEventHandler<HTMLElement> | undefined
}

type SideNavListProps = {
    children: ReactNode
}

const SideNavbar = ({ onClick }: SideNavbarProps) => {
    const { data: session, status } = useSession()
    // const navs = ['Search', 'Inbox', 'Today', 'Upcoming', 'Filters & ']
    const navs = [['Search', <CiSearch />], ['Inbox', <HiOutlineInbox />], ['Today', <IoTodayOutline />], ['Upcoming', <MdOutlineUpcoming />], ['Filters & Labels', <TbFilters />]]
    return <nav className="p-2 flex flex-col gap-2 min-h-fit bg-[#fcfaf8] h-[100vh] w-[20em] overflow-y-auto">
        <section className="flex justify-between items-center">
            <button className="flex items-center gap-1 rounded-lg hover:bg-[#f3efec] p-1">
                <Image className="rounded-full" src={session?.user.image as string} width={26} height={26} alt="profile" />
                <h1 className="ml-1 text-sm">{session?.user.name}</h1>
                <MdKeyboardArrowDown className="text-gray-500" />
            </button>
            <button className="hover:bg-[#f3efec] rounded-lg p-2" onClick={onClick}>
                <BsLayoutSidebar className="text-gray-500" />
            </button>
        </section>
        <button className="flex items-center gap-2 hover:bg-[#f3efec] p-1 rounded-lg">
            <HiPlusCircle className="text-2xl text-[#dc4c3e]" />
            <h1>Add Task</h1>
        </button>
        <ul className="p-1 space-y-1">
            {navs.map(([nav, icon], index) => <SideNavList key={index}>
                {icon}
                <h2>{nav}</h2>
            </SideNavList>)}
        </ul>

    </nav>
}

const SideNavList = ({ children }: SideNavListProps) => {
    return <li className="flex items-center gap-2 p-1 cursor-pointer hover:bg-[#f3efec] rounded-lg">{children}</li>
}
export default SideNavbar;