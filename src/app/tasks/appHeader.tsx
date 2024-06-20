import { MouseEventHandler } from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

type AppHeaderProp = {
  onClick: MouseEventHandler<HTMLElement> | undefined;
};

const AppHeader = ({ onClick }: AppHeaderProp) => {
  return (
    <header className="sticky top-0 grid grid-flow-col gap-3 bg-white p-4 px-5">
      <div className="flex justify-start">
        <button
          className="rounded-lg p-2 text-2xl text-[#666666] hover:bg-[#f3efec] hover:text-[#1a1a1a]"
          onClick={onClick}
        >
          <BsLayoutSidebar />
        </button>
      </div>
      <div className="flex justify-end">
        <button className="rounded-lg p-2 text-2xl text-[#666666] hover:bg-[#f3efec] hover:text-[#1a1a1a]">
          <LuSettings2 />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
