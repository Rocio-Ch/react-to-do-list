export default function Filters() {

    return (
        <select name="category" id="category" className="w-[180px] bg-[#ffffffb3] p-2 border border-0 rounded rounded-full outline-0 mb-2 sm:mb-5 text-[#222] sm:w-[170px] hover:cursor-[url(./assets/cursor002.svg),_pointer]">
            <option value="">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not done</option>
        </select>
    )
}