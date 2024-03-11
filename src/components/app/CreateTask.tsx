import { useState } from "react"
import Calendar from "react-calendar"
import { FaRegUser } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import { PiFlagBannerBold } from "react-icons/pi"
import { RxCalendar } from "react-icons/rx"
import { api } from "~/utils/api"

type TTask = {
    name: string,
    description: string
    deadline: Date,
    priority: 1 | 2 | 3,
}

type TaskFormEvent = React.FormEvent<HTMLFormElement> & {
    target: {
        taskName: HTMLInputElement,
        description: HTMLInputElement
    }
}

const CreateTask = () => {
    const trpcUtils = api.useUtils()
    const createTask = api.task.create.useMutation({
        onSuccess: async () => await trpcUtils.task.get.invalidate()
    });
    const [date, setDate] = useState<Date>(new Date());
    const [isDeadlineClicked, setIsDeadlineClicked] = useState(false);

    const [priority, setPriority] = useState<number>()
    const [isPriorityClicked, setIsPriorityClicked] = useState(false);

    const handleFormSubmit = (e: TaskFormEvent) => {
        e.preventDefault();
        const task: TTask = {
            name: e.target.taskName.value,
            description: e.target.description.value,
            deadline: date,
            priority: priority as 1 | 2 | 3
        };
        createTask.mutate(task)
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
                                <div>{date?.toLocaleString('en', { month: 'short', day: '2-digit' })}</div>
                            </button>
                            {isDeadlineClicked && <div className="absolute top-8 z-10"><Calendar onChange={(date) => date && !Array.isArray(date) && setDate(date)} value={date} onClickDay={() => setIsDeadlineClicked(prev => !prev)} /></div>}
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

export default CreateTask
export type Task = TTask