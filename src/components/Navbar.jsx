import { useState, useEffect } from "react";
import { useMobile } from "../context/globalStore";
import { FaBars } from "react-icons/fa";
import CV_Diego_Martinez from '../assets/CV_Diego_Martinez.pdf'
import { MdDownload } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

const navlinks = ['Projects', 'Experience', 'About', 'Contact']

export const Navbar = () => {
  const { toggleActiveMobile } = useMobile();
  
  // Estado para controlar si el usuario ha bajado más de 100px
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [language, setLanguage] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    
    // Cambio de color automático al hacer scroll por las secciones
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }, observerOptions)

    navlinks.forEach((id) => {
      const element = document.getElementById(id)
      if(element) observer.observe(element)
    })


    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    };

  }, []);
  
  return (
    <header
      className={`
        w-full sticky top-0 z-50 p-6 px-8 flex items-center justify-between transition-all duration-500 border-b border-stone-700
        ${isScrolled 
          ? "bg-stone-950/90 backdrop-blur-md py-3 shadow-xl translate-y-0" 
          : "bg-stone-950 border-transparent py-6"}
      `}
    >
      <a href="#Hero" onClick={() => setActiveTab(null)} className="text-purple-700 font-bold text-lg cursor-pointer">Diego Martinez</a>

      <nav className="hidden md:flex space-x-3 text-stone-400">
        {
          navlinks.map((link, index) => (
            <a href={`#${link}`} key={index}  onClick={() => setActiveTab(link)} className={`${activeTab === link ? "text-purple-600" : "text-gray-400"} hover:text-purple-500 font-semibold transition-all duration-300`}>{link}</a>

          ))
        }
      </nav>

      <div className="flex justify-center items-center gap-3">
        <button className="flex justify-center items-center gap-2 text-purple-600 text-sm font-medium px-3 py-1.5 border border-stone-800 rounded-lg cursor-pointer hover:border-purple-700 hover:bg-purple-500/5 transition-all duration-300" onClick={() => setLanguage(!language)}>
          <TfiWorld size={15} className="text-stone-400" />
          {
            language ? 'EN' : 'ES'
          }
        </button>

        <a href={CV_Diego_Martinez} download="CV_Diego_Martinez.pdf" className="bg-purple-700 text-white font-semibold uppercase px-4 py-2 rounded-lg hidden md:flex justify-center items-center gap-2 hover:bg-purple-600 transition-colors cursor-pointer" >
          <MdDownload size={22} />
          download cv
        </a>
      </div>

      <button className="bg-stone-700 p-3 rounded-lg md:hidden" onClick={() => toggleActiveMobile()}>
        <FaBars size={23} className="text-stone-400" />
      </button>
    </header>
  );
};
