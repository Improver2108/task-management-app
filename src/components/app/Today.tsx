import { useState } from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

type IconChild = {
    children: React.ReactNode;
}
type TTask = {
    title: string,
    description: string
    deadline: string,
    createdBy: string
}

const CToday = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col max-w-[60rem] flex-grow gap-1">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">Overdue</h3>
                    <button className="text-[#dc4c3e] font-semibold text-lg">Reschedule</button>
                </div>
                <hr className="border-[#e6e6e6]" />
                <div>Wake up</div>
                <div>Waking up</div>
                <div>Date</div>
            </div>
        </div>
    )
}

const CTodayList = (task: TTask) => {
    return (
        <div className="flex justify-center">
            <div className="flex max-w-[60rem] flex-grow gap-2 ">
                <Icon>
                    <IoIosRadioButtonOff className="text-3xl cursor-pointer text-[#b3b3b3]" />
                </Icon>
                <div className="flex flex-col gap-1 flex-grow">
                    <div className="flex text-xl justify-between">
                        <p>
                            {task.title}
                        </p>
                        <button>Edit</button>
                    </div>
                    <p className="text-md">
                        {task.description}
                    </p>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1 text-[#058527]">
                            <RxCalendar className="text-lg" />
                            <p>By {task.deadline}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegUser />
                            <p>{task.createdBy}</p>
                        </div>

                    </div>

                    <hr className="border mt-1" />
                </div>
            </div>
        </div>

    )
}


const Icon = ({ children }: IconChild) => {
    const [hover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
        >
            {hover ? <IoCheckmarkDoneCircle className="text-3xl cursor-pointer bg text-[#b3b3b3]" /> : children}
        </div>
    )
}

export const TaskCreate = () => {
    return (
        <section className="flex justify-center">
            <div className="flex max-w-[60rem] flex-grow border rounded-lg p-4">
                <form className="flex flex-col">
                    <input type="text" placeholder="Task Name" className="focus:outline-none font-semibold text-lg" />
                    <input type="text" placeholder="Description" className="focus:outline-none text-sm" />
                </form>
            </div>
        </section>
    )
}

export default CTodayList;