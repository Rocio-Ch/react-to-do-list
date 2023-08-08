import { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";

export default function Form({ allTasks, setAllTasks, setErrors, errors }) {
  
    const [task, setTask] = useState({
      nameTask: "",
      isChecked: false
    })

    function validateTask(e) {
        const inputName = e.target.name
        const inputValue = e.target.value
        const uniqueTask = allTasks.some(task => inputValue.trim() === task.nameTask)

        if (inputValue.length < 3) {
          setErrors({disabled: true, nameTask: "Mínimo 3 caracteres"})
        } else if (inputValue.length > 20) {
          setErrors({disabled: true, nameTask: "Máximo 20 caracteres"})
        } else if (uniqueTask) {
          setErrors({disabled: true, nameTask: `Ya existe esta tarea`})
        } else {
          setErrors({nameTask: "", disabled: false})
        }    
        setTask({...task, [inputName]: inputValue.toLowerCase()})
    }

    function resetForm() {
        setTask({
          nameTask: "",
          isChecked: false
        })
        setErrors({...errors, disabled: true})
    }

    function submitTask(e) {
        e.preventDefault()
        if (!errors.disabled) {
          setAllTasks([...allTasks, {...task, id: crypto.randomUUID(), nameTask: task.nameTask.trim()}])
          localStorage.setItem("allTasks", JSON.stringify([...allTasks, {...task, id: crypto.randomUUID(), nameTask: task.nameTask.trim()}]))
          resetForm()   
        } else {
          setErrors({...errors, nameTask: "Campo inválido"})
        }
    }

    return (
        <form onSubmit={submitTask} className="mb-4 sm:w-[60%] mr-1 md:w-[365px] flex items-center justify-center">
            <input autoFocus onChange={validateTask} value={task.nameTask} name="nameTask" type="text" id="task-name" className="w-full p-2 text-[#222] border border-0 border-b border-[#272727] text-[#272727] bg-transparent outline-0 font-['DM_Sans'] mr-2 hover:cursor-[url(./assets/cursor002.svg),_pointer]" placeholder="Add new task" />
            <button type="submit" className="py-2 px-3 rounded-full text-[#222] bg-[#ffffffb3] hover:cursor-[url(./assets/cursor002.svg),_pointer]"><RiAddCircleFill size={"1.5rem"} /></button>
        </form>
        
    )
}