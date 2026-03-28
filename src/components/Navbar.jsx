import { useMobile } from "../context/globalStore";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {

    const { isActiveMobile, toggleActiveMobile } = useMobile();

  return (
    <header className="w-full p-6 px-8 bg-stone-950 flex items-center justify-between transition-all duration-300 border-b border-stone-700">
        <h2 className="text-stone-300 font-semibold text-lg">Diego Martinez</h2>

        <nav className="hidden md:flex space-x-3 text-stone-400">
            <a href="#projects" className="hover:text-stone-300 font-semibold transition-all duration-300">Projects</a>
            <a href="#" className="hover:text-stone-300 font-semibold transition-all duration-300">About</a>
            <a href="#" className="hover:text-stone-300 font-semibold transition-all duration-300">Contact</a>
        </nav>

        <button className="bg-purple-700 px-4 py-2 rounded-lg hidden md:flex">Resume</button>

        <button className="bg-stone-700 p-3 rounded-lg md:hidden" onClick={() => toggleActiveMobile()}>
            <FaBars size={23} className="text-stone-400" />
        </button>
    </header>
  )
}