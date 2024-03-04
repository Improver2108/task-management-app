import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useState } from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { PiFlagBannerBold } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import Calendar from 'react-calendar';

type IconChild = {
    children: React.ReactNode;
}
export type TTask = {
    title: string,
    description: string
    deadline: string,
    createdBy: string
}

// const CToday = () => {
//     return (
//         <div className="flex justify-center">
//             <div className="flex flex-col max-w-[60rem] flex-grow gap-1">
//                 <div className="flex justify-between">
//                     <h3 className="text-xl font-semibold">Overdue</h3>
//                     <button className="text-[#dc4c3e] font-semibold text-lg">Reschedule</button>
//                 </div>
//                 <hr className="border-[#e6e6e6]" />
//                 <div>Wake up</div>
//                 <div>Waking up</div>
//                 <div>Date</div>
//             </div>
//         </div>
//     )
// }

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

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type TaskFormEvent = React.FormEvent<HTMLFormElement> & {
    target: {
        taskName: HTMLInputElement,
        description: HTMLInputElement
    }
}
type TaskProp = {
    addTask: (task: TTask) => void
}

export const TaskCreate = ({ addTask }: TaskProp) => {
    const [value, onChange] = useState<Value>(new Date());
    const [isDeadlineClicked, setIsDeadlineClicked] = useState(false);

    const [priority, setPriority] = useState<number>()
    const [isPriorityClicked, setIsPriorityClicked] = useState(false);

    const handleFormSubmit = (e: TaskFormEvent) => {
        console.log(e.target)
        e.preventDefault();
        const task: TTask = {
            title: e.target.taskName.value,
            description: e.target.description.value,
            deadline: value?.toLocaleString('en', { month: 'short', day: '2-digit' }) ?? '',
            createdBy: 'kabira'
        };

        return addTask(task);
    };

    return (
        <section className="flex justify-center">
            <div className="flex max-w-[60rem] flex-grow border rounded-lg p-4">
                <form className="flex flex-col flex-grow" onSubmit={handleFormSubmit}>
                    <input name='taskName' type="text" placeholder="Task Name" className="focus:outline-none font-semibold text-lg" />
                    <input name='description' placeholder="Description" className="focus:outline-none text-sm" />
                    <div className="flex gap-2 text-xs pt-2">
                        <div className="relative">
                            <button onClick={() => setIsDeadlineClicked(prev => !prev)} className="border rounded-md px-2 py-1 flex items-center gap-1 relative " type="button" >
                                <RxCalendar />
                                <div>{value?.toLocaleString('en', { month: 'short', day: '2-digit' })}</div>
                            </button>
                            {isDeadlineClicked && <div className="absolute top-8 z-10"><Calendar onChange={onChange} value={value} onClickDay={() => setIsDeadlineClicked(prev => !prev)} /></div>}
                        </div>
                        <div className="relative">
                            <button type="button" className="border rounded-md px-2 py-1 flex items-center gap-1" onClick={() => setIsPriorityClicked(prev => !prev)}>
                                <PiFlagBannerBold />
                                <div>Priority {priority}</div>
                            </button>
                            {isPriorityClicked && <div className="absolute top-8" onClick={() => setIsPriorityClicked(prev => !prev)}>
                                {[1, 2, 3].map(num => <div onClick={() => setPriority(num)} key={num}>{`Priority ${num}`}</div>)}
                            </div>}
                        </div>
                        <button className="border rounded-md px-2 py-1 flex items-center gap-1" type="button">
                            <FaRegUser />
                            <div>Users</div>
                        </button>
                    </div>
                    <div className="flex pt-2 justify-end">
                        <button type="submit"><IoSend /></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CTodayList;