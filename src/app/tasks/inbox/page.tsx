import CreateTask from "~/app/tasks/createTask";
import AllTask from "./allTask";

const Inbox = () => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between"></div>
      <h1 className="text-4xl font-bold">Inbox</h1>
      <div className="my-5 flex flex-col gap-5">
        <AllTask />
        <CreateTask />
      </div>
    </>
  );
};

export default Inbox;
