import { RiAddCircleFill } from "react-icons/ri";

export default function Form() {

    return (
        <form className="mb-4 sm:w-[60%] mr-1 md:w-[365px] flex items-center justify-center">
            <input autoFocus name="nameTask" type="text" id="task-name" className="w-full p-2 text-[#222] border border-0 border-b border-[#272727] text-[#272727] bg-transparent outline-0 font-['DM_Sans'] mr-2 hover:cursor-[url(./assets/cursor002.svg),_pointer]" placeholder="Add new task" />
            <button type="submit" className="py-2 px-3 rounded-full text-[#222] bg-[#ffffffb3] hover:cursor-[url(./assets/cursor002.svg),_pointer]"><RiAddCircleFill size={"1.5rem"} /></button>
        </form>
        
    )
}