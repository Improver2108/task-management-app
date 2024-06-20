import { Dispatch, SetStateAction } from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

type AppHeaderProp = {
    setSideNavShow: Dispatch<SetStateAction<boolean>>
}

const AppHeader = ({ setSideNavShow }: AppHeaderProp) => {
    return (
        <header className="sticky bg-white top-0 p-4 px-5 grid grid-flow-col gap-3">
            <div className="flex justify-start">
                <button onClick={() => setSideNavShow(prev => !prev)} className="p-2 rounded-lg text-[#666666] hover:text-[#1a1a1a] hover:bg-[#f3efec] text-2xl">
                    <BsLayoutSidebar />
                </button>
            </div>
            <div className="flex justify-end">
                <button className="p-2 rounded-lg text-[#666666] hover:text-[#1a1a1a] hover:bg-[#f3efec] text-2xl">
                    <LuSettings2 />
                </button>
            </div>
        </header>
    )
}

export default AppHeader;