import { useState } from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";

type IconChild = {
    children: React.ReactNode;
}
const CToday = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col max-w-[60rem] flex-grow gap-1">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">Overdue</h3>
                    <button className="text-[#dc4c3e] font-semibold text-lg">Reschedule</button>
                </div>
                <hr className="border-[#e6e6e6]" />
                <div>Wake up</div>
                <div>Waking up</div>
                <div>Date</div>
            </div>
        </div>
    )
}

const CTodayList = () => {
    return (
        <div className="flex justify-center">
            <div className="flex max-w-[60rem] flex-grow gap-2 ">
                <Icon>
                    <IoIosRadioButtonOff className="text-3xl cursor-pointer text-[#b3b3b3]" />
                </Icon>
                <div className="flex flex-col gap-1 flex-grow">
                    <div className="flex text-xl justify-between">
                        <p>
                            Work
                        </p>
                        <button>Edit</button>
                    </div>
                    <p className="text-md">
                        To do this by today or tomorrow or dont, i don't care
                    </p>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1 text-[#058527]">
                            <RxCalendar className="text-lg" />
                            <p> Today</p>
                        </div>
                        <p>Created by</p>
                    </div>

                    <hr className="border mt-1" />
                </div>
            </div>
        </div>

    )
}


const Icon = ({ children }: IconChild) => {
    const [hover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
        >
            {hover ? <IoCheckmarkDoneCircle className="text-3xl cursor-pointer bg text-[#b3b3b3]" /> : children}
        </div>
    )
}

export default CTodayList;