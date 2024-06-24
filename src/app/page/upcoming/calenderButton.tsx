"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Calender from "../calender";
export default function CalenderButton() {
  const date = new Date();
  const [calendarVisible, setCalendarVisible] = useState(false);
  return (
    <div>
      <button
        className="my-3 flex items-center gap-1"
        onClick={() => setCalendarVisible(!calendarVisible)}
      >
        {`${date.toLocaleDateString("default", { month: "short" })} ${date.getFullYear()}`}
        <RiArrowDropDownLine className="text-xl" />
      </button>
      {calendarVisible && (
        <div className="absolute z-20 max-w-[20em] bg-white">
          <Calender />
        </div>
      )}
    </div>
  );
}
