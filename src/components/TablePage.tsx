import type { Task } from "@prisma/client";

type TTask = {
    task: Task
}
const TablePage = () => {
    const tasks: Task[] = [
        {
            id: 1,
            name: "Task 1",
            description: "This is task one.",
            deadline: new Date(),
            priority: "high",
            createdAt: new Date(),
            updatedAt: new Date(),
            createdById: "kabira2108",
        },
    ]
    // Return the JSX element for the task
    return (<div className="">
        {tasks.map((task, index) => <Task task={task} />)}
    </div>

    );
}

const Task = ({ task }: TTask) => {
    const { id, name, description, deadline, priority, createdAt, updatedAt, createdById } = task

    return (
        <div className="flex gap-8 justify-center items-center" >
            <h3 className="">{name}</h3>
            <p className="">{description}</p>
            <p className="">Due: {deadline.getDate()}</p>
            <p className="">Priority: {priority}</p>
            <p className="">Assignees: {createdById}</p>
        </div>
    )
}

export default TablePage;