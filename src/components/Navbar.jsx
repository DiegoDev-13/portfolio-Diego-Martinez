import { useState, useEffect } from "react";
import { useMobile } from "../context/globalStore";
import { FaBars } from "react-icons/fa";
import CV_Diego_Martinez from '../assets/CV_Diego_Martinez.pdf'

export const Navbar = () => {
  const { toggleActiveMobile } = useMobile();
  
  // Estado para controlar si el usuario ha bajado más de 100px
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Limpiamos el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full sticky top-0 z-50 p-6 px-8 flex items-center justify-between transition-all duration-500 border-b border-stone-700
        ${isScrolled 
          ? "bg-stone-950/90 backdrop-blur-md py-4 shadow-xl translate-y-0" 
          : "bg-stone-950 border-transparent py-6"}
      `}
    >
      <a href="#hero" className="text-purple-700 font-bold text-lg cursor-pointer">Diego Martinez</a>

      <nav className="hidden md:flex space-x-3 text-stone-400">
        <a href="#projects" className="hover:text-stone-300 font-semibold transition-all duration-300">Projects</a>
        <a href="#about" className="hover:text-stone-300 font-semibold transition-all duration-300">About</a>
        <a href="#contact" className="hover:text-stone-300 font-semibold transition-all duration-300">Contact</a>
      </nav>

      <a href={CV_Diego_Martinez} download="CV_Diego_Martinez.pdf" className="bg-purple-700 text-white uppercase px-4 py-2 rounded-lg hidden md:flex hover:bg-purple-600 transition-colors cursor-pointer" >
        download cv
      </a>

      <button className="bg-stone-700 p-3 rounded-lg md:hidden" onClick={() => toggleActiveMobile()}>
        <FaBars size={23} className="text-stone-400" />
      </button>
    </header>
  );
};
