"use client";
import { api } from "~/trpc/react";
import CTodayList from "../inbox/today";
import { useState } from "react";

export default function OverdueTask() {
  const {
    data: overdueData,
    isLoading,
    isError,
  } = api.task.getOverdue.useQuery();

  const [isOverdueTaskOpen, setIsOverdueTaskOpen] = useState(false);

  if (isOverdueTaskOpen) {
    if (isLoading) return <>loading...</>;
    if (isError) return <>error...</>;
  }

  return (
    <div>
      <button onClick={() => setIsOverdueTaskOpen(!isOverdueTaskOpen)}>
        Overdue Tasks
      </button>
      {isOverdueTaskOpen &&
        overdueData?.map((task, index) => <CTodayList {...task} key={index} />)}
    </div>
  );
}
