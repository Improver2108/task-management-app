"use client";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { PiFlagBannerBold } from "react-icons/pi";
import { RxCalendar } from "react-icons/rx";
import { api } from "~/trpc/react";
type TTask = {
  name: string;
  description: string;
  deadline: Date;
  priority: 1 | 2 | 3;
};

type TaskFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    taskName: HTMLInputElement;
    description: HTMLInputElement;
  };
};

const CreateTask = () => {
  const trpcUtils = api.useUtils();
  const createTask = api.task.create.useMutation({
    onSuccess: async () => await trpcUtils.task.get.invalidate(),
  });
  const [date, setDate] = useState<Date>(new Date());
  const [isDeadlineClicked, setIsDeadlineClicked] = useState(false);
  const [priority, setPriority] = useState<number | null>(null);
  const [isPriorityClicked, setIsPriorityClicked] = useState(false);

  const taskCreateRef = useRef<HTMLDialogElement>(null);

  const handleFormSubmit = (e: TaskFormEvent) => {
    e.preventDefault();
    const task: TTask = {
      name: e.target.taskName.value,
      description: e.target.description.value,
      deadline: date,
      priority: priority as 1 | 2 | 3,
    };
    setDate(new Date());
    setPriority(null);
    e.currentTarget.reset();
    createTask.mutate(task);
  };

  const closeTaskDialog = () => {
    taskCreateRef.current?.close();
  };

  return (
    <>
      <article className="flex justify-center">
        <button
          className="flex max-w-[60rem] flex-grow items-center gap-3 text-lg"
          onClick={() => taskCreateRef.current?.show()}
        >
          <AiFillPlusCircle className="fill-blue-500 text-2xl text-green-500" />
          <p className="text-gray-400">Add Tak</p>
        </button>
      </article>
      <dialog ref={taskCreateRef} className="relative w-full">
        <form
          className="flex flex-col rounded-lg border p-4"
          onSubmit={handleFormSubmit}
        >
          <input
            name="taskName"
            type="text"
            placeholder="Task Name"
            className="text-lg font-semibold focus:outline-none"
          />
          <input
            name="description"
            placeholder="Description"
            className="text-sm focus:outline-none"
          />
          <div className="flex gap-2 pt-2 text-xs">
            <div className="relative">
              <button
                onClick={() => setIsDeadlineClicked((prev) => !prev)}
                className="relative flex items-center gap-1 rounded-md border px-2 py-1 "
                type="button"
              >
                <RxCalendar />
                <div>
                  {date?.toLocaleString("en", {
                    month: "short",
                    day: "2-digit",
                  })}
                </div>
              </button>
              {isDeadlineClicked && (
                <div className="absolute top-8 z-10">
                  <Calendar
                    onChange={(date) =>
                      date && !Array.isArray(date) && setDate(date)
                    }
                    value={date}
                    onClickDay={() => setIsDeadlineClicked((prev) => !prev)}
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-md border px-2 py-1"
                onClick={() => setIsPriorityClicked((prev) => !prev)}
              >
                <PiFlagBannerBold />
                <div>Priority {priority}</div>
              </button>
              {isPriorityClicked && (
                <div
                  className="absolute top-8"
                  onClick={() => setIsPriorityClicked((prev) => !prev)}
                >
                  {[1, 2, 3].map((num) => (
                    <div
                      onClick={() => setPriority(num)}
                      key={num}
                    >{`Priority ${num}`}</div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="flex items-center gap-1 rounded-md border px-2 py-1"
              type="button"
            >
              <FaRegUser />
              <div>Users</div>
            </button>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit">
              <IoSend />
            </button>
          </div>
          <button onClick={() => closeTaskDialog()}>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default CreateTask;
export type Task = TTask;
