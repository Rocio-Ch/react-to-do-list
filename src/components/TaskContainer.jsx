import Task from "./Task"

export default function TaskContainer({ allTasks, setAllTasks, filterTasks }) {
    return (
        <section id="list" className="flex flex-col items-center justify-center">
            <ul className="w-[85%] flex flex-col justify-center self-center py-8 px-5 bg-[#ffffff4d] rounded-b-lg md:max-w-[600px] md:py-5 md:px-5">
                {allTasks && allTasks.map((task) => {
                    if (task.isChecked == filterTasks || filterTasks === "") {
                        return (
                            <Task key={task.id} id={task.id} nameTask={task.nameTask} isChecked={task.isChecked} setAllTasks={setAllTasks} allTasks={allTasks} />
                    )}
                })}
            </ul>
        </section>
    )
}