"use client";
import { api } from "~/trpc/react";
import CTodayList from "../inbox/today";
import CreateTask from "../createTask";

export default function TodayTask() {
  const { data: todayTask, isLoading, isError } = api.task.getToday.useQuery();
  // const daysOfWeek = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  const today = new Date();
  if (isLoading) return <>Loading..</>;
  if (isError) return <>Error..</>;

  return (
    <div>
      <h1>{`${today.getDate()} ${today.toLocaleDateString("default", { month: "short" })} Today - ${today.toLocaleDateString("default", { weekday: "long" })}`}</h1>
      {todayTask?.map((task, index) => <CTodayList {...task} key={index} />)}
      <CreateTask />
    </div>
  );
}
