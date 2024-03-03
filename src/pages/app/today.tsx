import SideNavbar from "~/components/SideNav";
import AppHeader from "~/components/app/AppHeader";
import { MdOutlineTaskAlt } from "react-icons/md";
import CTodayList, { TaskCreate } from "~/components/app/Today";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

const Today = () => {
    const [tasks, setTask] = useState([
        {
            title: 'Work',
            description: "To do this by today or tomorrow or dont, i don't care",
            deadline: "2023-12-08",
            createdBy: "Billu"
        },
        {
            title: 'Work',
            description: "To do this by today or tomorrow or dont, i don't care",
            deadline: "2023-12-08",
            createdBy: "Billu"
        }
    ])
    return (
        <div className="flex w-[100%] h-[100vh]">
            <main className="w-[100%]">
                <AppHeader />
                <div className="flex flex-col px-[3.5rem] gap-5">
                    <div className="flex justify-center  items-center">
                        <div className="max-w-[60rem] flex-grow ">
                            <h1 className="text-4xl font-bold">Today</h1>
                            <div className="text-[#666666] text-[1.15em] flex gap-2 items-center pt-2">
                                <MdOutlineTaskAlt className="" />
                                <p>{tasks.length} {tasks.length > 1 ? 'tasks' : 'task'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {tasks.map((task, index) => <CTodayList {...task} key={index} />)}
                        <div className="flex justify-center">
                            <button className="flex flex-grow items-center max-w-[60rem] text-lg gap-3">
                                <AiFillPlusCircle className="fill-blue-500 text-green-500 text-2xl" />
                                <p className="text-gray-400">Add Tak</p>
                            </button>
                        </div>
                        <TaskCreate />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Today;