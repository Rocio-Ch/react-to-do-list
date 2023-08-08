import { BsFillTrashFill } from "react-icons/bs";

export default function Task({ nameTask, id, isChecked, setAllTasks, allTasks }) {

    function deleteTask(e) {
        const taskId = e.target.id
        const filterTaskList = allTasks.filter(task => task.id !== taskId)
        localStorage.setItem("allTasks", JSON.stringify([...filterTaskList]))
        setAllTasks(filterTaskList)
    }

    function valueCheckbox(e) {
        const taskCheck = allTasks.find((task) => task.id === id)
        const checkTaskToMdify = e.target.checked
        taskCheck.isChecked = checkTaskToMdify
        const taskStatusModify = allTasks.map((task) => (task.id === id ? taskCheck : task))
        localStorage.setItem("allTasks", JSON.stringify(allTasks.map((task) => (task.id === id ? taskCheck : task))))
        setAllTasks(taskStatusModify)
    }

    return (
        <>
            <li className="task-item w-full px-2 flex justify-around items-center bg-[#ffffffb3] p-1 rounded-full mb-3">
                <label className="w-[90%] flex items-center hover:cursor-[url(./assets/cursor002.svg),_pointer]">
                    <input type="checkbox" onChange={valueCheckbox} checked={isChecked} className="m-2 hover:cursor-[url(./assets/cursor002.svg),_pointer]" />
                    <span name={nameTask} className={`text-[#222] mr-4 text-xl font-['DM_Sans'] ${isChecked ? 'line-through text-[#27272799]' : 'no-underline'}`}>{nameTask}</span>
                </label>
                <button type="button" className="py-2 rounded-full text-[#222] bg-[#ffffffb3] hover:cursor-[url(./assets/cursor002.svg),_pointer] text-xl"
                ><BsFillTrashFill onClick={deleteTask} id={id} />
                </button>
            </li>
        </>
    )
}