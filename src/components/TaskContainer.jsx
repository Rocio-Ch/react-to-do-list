import Task from "./Task"

export default function TaskContainer() {
    return (
        <section id="list" className="flex flex-col items-center justify-center">
            <ul className="w-[85%] flex flex-col justify-center self-center py-8 px-5 bg-[#ffffff4d] rounded-b-lg md:max-w-[600px] md:py-5 md:px-5">
                <Task  />
            </ul>
        </section>
    )
}