import SideNavbar from "~/components/SideNav";
import AppHeader from "~/components/app/AppHeader";
import { MdOutlineTaskAlt } from "react-icons/md";
import CTodayList from "~/components/app/Today";


//header


const Today = () => {
    return (
        <div className="flex w-[100%] min-h-[100vh]">
            <main className="w-[100%]">
                <AppHeader />
                <div className="flex flex-col px-[3.5rem] gap-5">
                    <div className="flex justify-center  items-center">
                        <div className="max-w-[60rem] flex-grow ">
                            <h1 className="text-4xl font-bold">Today</h1>
                            <div className="text-[#666666] text-[1.15em] flex gap-2 items-center pt-2">
                                <MdOutlineTaskAlt className="" />
                                <p>1 task</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <CTodayList />
                        <CTodayList />
                        <CTodayList />
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Today;