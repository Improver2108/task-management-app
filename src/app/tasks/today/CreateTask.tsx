import { useState } from "react";
import Calendar from "react-calendar";
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

type CreateTaskProp = {
  onClick: () => void;
};

const CreateTask = ({ onClick }: CreateTaskProp) => {
  const trpcUtils = api.useUtils();
  const createTask = api.task.create.useMutation({
    onSuccess: async () => await trpcUtils.task.get.invalidate(),
  });
  const [date, setDate] = useState<Date>(new Date());
  const [isDeadlineClicked, setIsDeadlineClicked] = useState(false);

  const [priority, setPriority] = useState<number | null>(null);
  const [isPriorityClicked, setIsPriorityClicked] = useState(false);

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

  return (
    <section className="flex justify-center">
      <div className="flex max-w-[60rem] flex-grow rounded-lg border p-4">
        <form className="flex flex-grow flex-col" onSubmit={handleFormSubmit}>
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
          <button onClick={onClick}>Close</button>
        </form>
      </div>
    </section>
  );
};

export default CreateTask;
export type Task = TTask;
