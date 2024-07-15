"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Calender from "../calender";
import TaskDisplayCalender from "./taskDisplayCalender";
export default function CalenderFull() {
  const date = new Date();
  const [calendarVisible, setCalendarVisible] = useState(false);

  return (
    <>
      <div className="flex justify-between">
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
        <div className="space-x-3">
          <button>previous</button>
          <button>Next</button>
        </div>
      </div>
      <hr />
      <TaskDisplayCalender />
    </>
  );
}

//figure how to traverse date
