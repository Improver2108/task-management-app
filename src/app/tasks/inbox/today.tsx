"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { api } from "~/trpc/server";
type Task = {
  name: string;
  description: string;
  deadline: Date;
  priority: number;
  createdBy: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
};

type Children = {
  children: React.ReactNode;
};

const CTodayList = (task: Task) => {
  return (
    <article className="flex justify-center gap-2">
      <Icon>
        <IoIosRadioButtonOff className="cursor-pointer text-3xl text-[#b3b3b3]" />
      </Icon>
      <div className="flex flex-grow flex-col gap-1">
        <div className="flex justify-between text-xl">
          <p>{task?.name}</p>
          <button>Edit</button>
        </div>
        <p className="text-md">{task?.description}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 text-[#058527]">
            <RxCalendar className="text-lg" />
            <p>
              By{" "}
              {task?.deadline?.toLocaleString("en", {
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegUser />
            <p>{task.createdBy.name}</p>
          </div>
        </div>
        <hr className="mt-1 border" />
      </div>
    </article>
  );
};

const Icon = ({ children }: Children) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(() => true)}
      onMouseLeave={() => setHover(() => false)}
    >
      {hover ? (
        <IoCheckmarkDoneCircle className="bg cursor-pointer text-3xl text-[#b3b3b3]" />
      ) : (
        children
      )}
    </div>
  );
};

export default CTodayList;
