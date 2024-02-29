const SideNavbar = () => {
    const navs = ['Search', 'Inbox', 'Today', 'Upcoming', 'Filters & ']
    return <nav className="flex flex-col min-h-fit bg-[#fcfaf8]">
        <div>UserName</div>
        <button>Add Task</button>
        <div>
            {navs.map((nav, index) => <div key={index}>{nav}</div>)}
        </div>
    </nav>
}
export default SideNavbar;