import FormSelectContainer from "./FormSelectContainer";
import TaskContainer from "./TaskContainer";

export default function Container() {

    return (
        <main className="flex flex-col flex-grow pb-[100px] bg-[#ffffff4d]">
            <FormSelectContainer />
            <TaskContainer />
        </main>
    )
}