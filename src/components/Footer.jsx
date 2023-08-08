import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";


export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center text-[#272727] bg-[#ffffff4d] text-sm font-['DM_Sans']">
            <div className="w-[70px] flex justify-between">
                <a href="https://github.com/Rocio-Ch" className="hover:cursor-[url(./assets/cursor002.svg),_pointer]"><FaGithubAlt size={"1rem"} /> </a>
                <a href="https://www.linkedin.com/in/roc%C3%ADo-magal%C3%AD-chaparro-a3530a239/" className="hover:cursor-[url(./assets/cursor002.svg),_pointer]"><FaLinkedinIn size={"1rem"} /></a>
                <a href="mailto:rociomagali77@email.com" className="hover:cursor-[url(./assets/cursor002.svg),_pointer]"><GrMail size={"1rem"} /></a>
            </div>
            <p>© 2023 | Rocio Magali Chaparro</p>
        </footer>
    )
}