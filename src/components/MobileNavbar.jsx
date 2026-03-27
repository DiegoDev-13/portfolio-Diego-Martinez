import { IoClose } from "react-icons/io5";
import { useMobile } from "../context/globalStore";

export const MobileNavbar = () => {

    const { isActiveMobile, toggleActiveMobile } = useMobile();

  return (
    <div className="w-full fixed h-full backdrop-blur-xs bg-black/10">
        <div className="w-[70%] h-full bg-stone-950 flex flex-col items-center animate-slideIn ">

            <div className="w-full p-4 mb-10 flex self-end">
                <button className="self-end" onClick={() => toggleActiveMobile()}>
                    <IoClose size={35} className="text-stone-400" />
                </button>
            </div>

            <nav className="flex flex-col space-y-6 text-stone-400">
                <a href="#" className="hover:text-stone-300 text-lg font-semibold transition-all duration-300">Projects</a>
                <a href="#" className="hover:text-stone-300 text-lg font-semibold transition-all duration-300">About</a>
                <a href="#" className="hover:text-stone-300 text-lg font-semibold transition-all duration-300">Contact</a>
            </nav>
        </div>
    </div>
  )
}