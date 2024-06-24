import { MdOutlineTaskAlt } from "react-icons/md";
import OverdueTask from "./overdueTask";
import { api } from "~/trpc/server";
import TodayTask from "./todayTask";

export default async function TodayPage() {
  const todayTaskCOunt = await api.task.getTodayCount();
  return (
    <>
      <h1 className="text-4xl font-bold">Today</h1>
      <div className="flex items-center gap-2 pt-2 text-[1.15em] text-[#666666]">
        <MdOutlineTaskAlt className="" />
        <p>
          {todayTaskCOunt} {todayTaskCOunt > 1 ? "tasks" : "task"}
        </p>
      </div>
      <div className="my-5 flex flex-col gap-5">
        <OverdueTask />
        <TodayTask />
      </div>
    </>
  );
}
