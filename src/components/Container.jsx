import { useState } from "react";
import FormSelectContainer from "./FormSelectContainer";
import TaskContainer from "./TaskContainer";

export default function Container() {

    const [allTasks, setAllTasks] = useState(
      JSON.parse(localStorage.getItem("allTasks")) || []
    )

    const [filterTasks, setFilterTasks] = useState("")

    return (
        <main className="flex flex-col flex-grow pb-[50px] bg-[#ffffff4d]">
            <FormSelectContainer  setAllTasks={setAllTasks} allTasks={allTasks} filterTasks={filterTasks} setFilterTasks={setFilterTasks} />
            <TaskContainer allTasks={allTasks} setAllTasks={setAllTasks} filterTasks={filterTasks} />
        </main>
    )
}