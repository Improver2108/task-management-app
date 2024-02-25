const TablePage = () => {
    const tasks = [
        {
            title: "Task 1",
            description: "This is task one.",
            deadline: new Date("2023-07-08T14:56:29.323Z"),
            priority: "high",
            tag: ["tag1"],
            assignees: ["kabira2108"],
        },
        {
            title: "Task 2",
            description: "This is task two.",
            deadline: new Date("2024-08-09T14:56:29.323Z"),
            priority: "low",
            tag: ["tag2", "tag1"],
            assignees: ["heisenberg2108"],
        },
    ]
    // Return the JSX element for the task
    return (<div className="">
        {tasks.map((task, index) => <Task task={task} key={index} />)}
    </div>

    );
}

const Task = ({ task }: any) => {
    const { title, description, deadline, priority, tag, assignees } = task

    return (
        <div className="flex gap-8 justify-center items-center" >
            <h3 className="">{title}</h3>
            <p className="">{description}</p>
            <p className="">Due: {deadline.getDate()}</p>
            <p className="">Priority: {priority}</p>
            <p className="">Tag: {tag.join(',')}</p>
            <p className="">Assignees: {assignees.join(", ")}</p>
        </div>
    )
}

export default TablePage;