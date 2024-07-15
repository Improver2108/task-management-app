"use client";
import { api } from "~/trpc/react";
import CTodayList from "../inbox/today";
import { useState } from "react";
import { getWeeksAfterCurrentDate } from "~/utilities/getDate";

export default function TaskDisplayCalender() {
  const { data: tasks } = api.task.getOverdue.useQuery();
  const [currentWeekSet, setCurrentWeekSet] = useState(
    getWeeksAfterCurrentDate(new Date()),
  );
  // const nextDate = nextDateGenerator();
  return (
    <div className="my-5 flex h-full gap-6 overflow-x-scroll">
      {currentWeekSet.map((date, index) => (
        <div
          className="flex w-[25rem] flex-shrink-0 flex-col gap-3"
          key={index}
        >
          <div className="flex justify-between">
            <h1>{date}</h1>
            <button>Reschedule</button>
          </div>
          <div className="overflow-y-scroll">
            {tasks &&
              tasks.map((task, index) => (
                <CTodayList
                  task={task}
                  key={index}
                  className="rounded-2xl border"
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
