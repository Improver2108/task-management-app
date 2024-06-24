import { api } from "~/trpc/server";
import OverdueTask from "../today/overdueTask";
import CalenderButton from "./calenderButton";
import CTodayList from "../inbox/today";

export default async function UpcomingPage() {
  const tasks = await api.task.getOverdue();
  return (
    <div className="absolute left-[50%] h-[89vh] w-full -translate-x-1/2 overflow-hidden px-12">
      <h1 className="text-4xl font-bold">Upcoming</h1>
      <CalenderButton />
      <hr />
      <div className="my-5 flex h-full gap-6 overflow-x-scroll">
        {[...Array<null>(12)].map((_, index) => (
          <div
            className="flex w-[30rem] flex-shrink-0 flex-col gap-3 overflow-y-scroll p-10"
            key={index}
          >
            {tasks.map((task, index) => (
              <CTodayList
                task={task}
                key={index}
                className="rounded-2xl border p-3"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
