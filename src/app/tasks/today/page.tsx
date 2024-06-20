'use client'
import AppHeader from "~/app/tasks/AppHeader";
import { MdOutlineTaskAlt } from "react-icons/md";
import CTodayList from "~/app/tasks/today/Today";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateTask from "~/app/tasks/today/CreateTask";
import { api } from "~/trpc/react";
import { useCallback, useEffect, useRef, useState } from "react";
import SideNavbar from "~/app/tasks/SideNav";

const Today = () => {
    const [sideNavShow, setSideNavShow] = useState<boolean>(false);
    const { data } = api.task.get.useQuery()
    const navRef = useRef<HTMLElement>(null);
    const taskCreateRef = useRef<HTMLDialogElement>(null);

    const handleOutsideClick = useCallback((e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node))
            setSideNavShow(false)
    }, [sideNavShow])

    const closeTaskDialog = () => {
        taskCreateRef.current?.close();
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true)
        return () => {
            document.removeEventListener('click', handleOutsideClick, true)
        }
    }, [sideNavShow])
    return (
        <main className="flex w-[100%] relative">
            <article className={`w-[100%] ${sideNavShow ? 'pointer-events-none blur-[2px]' : ''}`}>
                <AppHeader setSideNavShow={setSideNavShow} />
                <div className="flex flex-col px-[3.5rem] gap-5 pb-5">
                    <div className="flex justify-center  items-center">
                        <div className="max-w-[60rem] flex-grow ">
                            <h1 className="text-4xl font-bold">Today</h1>
                            <div className="text-[#666666] text-[1.15em] flex gap-2 items-center pt-2">
                                <MdOutlineTaskAlt className="" />
                                <p>{data?.length} {data && data?.length > 1 ? 'tasks' : 'task'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {data?.map((task, index) => <CTodayList {...task} key={index} />)}
                        <div className="flex justify-center">
                            <button className="flex flex-grow items-center max-w-[60rem] text-lg gap-3" onClick={() => taskCreateRef.current?.show()}>
                                <AiFillPlusCircle className="fill-blue-500 text-green-500 text-2xl" />
                                <p className="text-gray-400">Add Tak</p>
                            </button>
                        </div>
                        <dialog ref={taskCreateRef} className="relative w-[100%]">
                            <CreateTask onClick={() => closeTaskDialog()} />
                        </dialog>
                    </div>
                </div>
            </article>
            <aside ref={navRef} className={`transition-[transform] ease-in-out duration-300 fixed ${!sideNavShow ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
                <SideNavbar onClick={() => setSideNavShow(false)} />
            </aside>
        </main>
    )
}

export default Today;