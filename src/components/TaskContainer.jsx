import Task from "./Task"

export default function TaskContainer({ allTasks, setAllTasks }) {
    return (
        <section id="list" className="flex flex-col items-center justify-center">
            <ul className="w-[85%] flex flex-col justify-center self-center py-8 px-5 bg-[#ffffff4d] rounded-b-lg md:max-w-[600px] md:py-5 md:px-5">
                {allTasks && allTasks.map((task) => {
                        return (
                            <Task key={task.id} id={task.id} nameTask={task.nameTask} setAllTasks={setAllTasks} allTasks={allTasks} />
                    )}
                )}
            </ul>
        </section>
    )
}