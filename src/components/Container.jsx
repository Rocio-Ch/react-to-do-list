import { useState } from "react";
import FormSelectContainer from "./FormSelectContainer";
import TaskContainer from "./TaskContainer";

export default function Container() {

    const [allTasks, setAllTasks] = useState(
      JSON.parse(localStorage.getItem("allTasks")) || []
    )

    return (
        <main className="flex flex-col flex-grow pb-[100px] bg-[#ffffff4d]">
            <FormSelectContainer  setAllTasks={setAllTasks} allTasks={allTasks} />
            <TaskContainer allTasks={allTasks} setAllTasks={setAllTasks} />
        </main>
    )
}