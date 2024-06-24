"use client";
import { api } from "~/trpc/react";
import CTodayList from "./today";

export default function GetAllTask() {
  const { data: getTaskData, isLoading, isError } = api.task.get.useQuery();
  if (isLoading) return <>isLoading...</>;
  if (isError) return <>Error...</>;
  return (
    <>
      {getTaskData?.map((task, index) => (
        <CTodayList task={task} key={index} />
      ))}
    </>
  );
}
