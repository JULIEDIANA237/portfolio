import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaJsSquare} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {SiTypescript} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {SiNextdotjs} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
       <h1 className="my-20 text-center text-4xl">Technologies</h1>
       <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJsSquare className="text-7xl text-yellow-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-blue-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-7xl text-blue-500" />
            </div>
             
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNextdotjs className="text-7xl text-black-100" />
            </div>
       </div> 
    </div>
  )
}

export default Technologies;