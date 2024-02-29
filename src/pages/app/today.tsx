import SideNavbar from "~/components/SideNav";

const Today = () => {
    return (
        <div className="flex w-[100%] min-h-[100vh]">
            <div className="w-[100%]">
                <header className="sticky p-4 grid grid-flow-col gap-3">
                    <div className="flex justify-start">
                        <button>navbar show</button>
                    </div>
                    <div className="flex justify-end">
                        <button>settings</button>
                    </div>
                </header>
                <div className="w-[100%]">main content</div>
            </div>
        </div>
    )
}

export default Today;