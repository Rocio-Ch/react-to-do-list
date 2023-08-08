import { useState } from "react";
import Form from "./Form"
import Filters from "./Filters"
import { IoMdAlert } from "react-icons/io";

export default function FormSelectContainer({ allTasks, setAllTasks, setFilterTasks }) {

    const [errors, setErrors] = useState({
        nameTask: "",
        disabled: true
    })

    return (
        <>
            <section className="flex flex-col justify-center items-center bg-[#ffffff4d] w-[85%] self-center md:max-w-[600px]">
                <div className="w-full flex  justify-between items-start flex-wrap px-5 sm:flex-row sm:justify-between sm:h-[45px] md:max-w-[600px] md:h-[50px]">
                    <Form setAllTasks={setAllTasks} setErrors={setErrors} errors={errors} allTasks={allTasks} />
                    <Filters setFilterTasks={setFilterTasks} />                
                </div>
            </section>
            <div className="w-[85%] h-5 flex flex-col items-center bg-[#ffffff4d] px-5 self-center md:max-w-[600px]">
                {errors.nameTask ? <p className="w-full text-[#222] font-['DM_Sans'] text-xs md:text-sm flex items-center text-left"><IoMdAlert className="mr-1" />{errors.nameTask}</p> : ""}
            </div>
        </>
    )
}