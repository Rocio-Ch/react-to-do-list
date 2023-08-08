import { BsFillTrashFill } from "react-icons/bs";

export default function Task() {

    return (
        <>
            <li className="task-item w-full px-2 flex justify-around items-center bg-[#ffffffb3] p-1 rounded-full mb-3">
                <label className="w-[90%] flex items-center hover:cursor-[url(./assets/cursor002.svg),_pointer]">
                    <input type="checkbox" className="m-2 hover:cursor-[url(./assets/cursor002.svg),_pointer]" />
                    <span className="text-[#222] mr-4 text-xl font-['DM_Sans']">Tarea</span>
                </label>
                <button type="button" className="py-2 rounded-full text-[#222] bg-[#ffffffb3] hover:cursor-[url(./assets/cursor002.svg),_pointer] text-xl"
                ><BsFillTrashFill />
                </button>
            </li>
        </>
    )
}