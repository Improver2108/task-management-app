"use client";
import { MdOutlineTaskAlt } from "react-icons/md";
import CTodayList from "~/app/tasks/today/Today";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateTask from "~/app/tasks/today/CreateTask";
import { api } from "~/trpc/react";
import { useRef } from "react";

const Today = () => {
  const { data, isLoading, isError } = api.task.get.useQuery();
  const taskCreateRef = useRef<HTMLDialogElement>(null);

  if (isLoading) return <>isLoading...</>;
  if (isError) return <>Error...</>;

  const closeTaskDialog = () => {
    taskCreateRef.current?.close();
  };
  return (
    <>
      <div className="flex flex-col gap-5 px-[3.5rem] pb-5">
        <div className="flex items-center  justify-center">
          <div className="max-w-[60rem] flex-grow ">
            <h1 className="text-4xl font-bold">Today</h1>
            <div className="flex items-center gap-2 pt-2 text-[1.15em] text-[#666666]">
              <MdOutlineTaskAlt className="" />
              <p>
                {data?.length} {data && data?.length > 1 ? "tasks" : "task"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {data?.map((task, index) => <CTodayList {...task} key={index} />)}
          <div className="flex justify-center">
            <button
              className="flex max-w-[60rem] flex-grow items-center gap-3 text-lg"
              onClick={() => taskCreateRef.current?.show()}
            >
              <AiFillPlusCircle className="fill-blue-500 text-2xl text-green-500" />
              <p className="text-gray-400">Add Tak</p>
            </button>
          </div>
          <dialog ref={taskCreateRef} className="relative w-[100%]">
            <CreateTask onClick={() => closeTaskDialog()} />
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Today;
