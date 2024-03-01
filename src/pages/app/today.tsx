import SideNavbar from "~/components/SideNav";
import AppHeader from "~/components/app/AppHeader";

//header


const Today = () => {
    return (
        <div className="flex w-[100%] min-h-[100vh]">
            <div className="w-[100%]">
                <AppHeader />
                <div className="w-[100%]">main content</div>
            </div>
        </div>
    )
}

export default Today;