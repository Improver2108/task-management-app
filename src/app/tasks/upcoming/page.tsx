"use client";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Calender from "../calender";
import { useState } from "react";

export default function UpcomingPage() {
  const date = new Date();
  const [calendarVisible, setCalendarVisible] = useState(false);
  return (
    <>
      <h1 className="text-4xl font-bold">Upcoming</h1>
      <button
        className="flex items-center gap-1"
        onClick={() => setCalendarVisible(!calendarVisible)}
      >
        {`${date.toLocaleDateString("default", { month: "short" })} ${date.getFullYear()}`}
        <RiArrowDropDownLine className="text-xl" />
      </button>
      {calendarVisible && (
        <div className="max-w-[20em]">
          <Calender />
        </div>
      )}

      <div className="my-5 flex flex-col gap-5"></div>
    </>
  );
}
