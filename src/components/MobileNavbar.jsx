import { IoClose } from "react-icons/io5";
import { useMobile } from "../context/globalStore";
import { useLanguage } from "../context/LanguageContext";

export const MobileNavbar = () => {

    const { isActiveMobile, toggleActiveMobile } = useMobile();

    const {texts} = useLanguage()

    const handleNavClick = () => {
        
    }

  return (
    <div className="w-full fixed z-100 h-full backdrop-blur-xs bg-black/10">
        <div className="w-[70%] h-full bg-stone-950 flex flex-col items-center animate-slideIn ">

            <div className="w-full p-4 mb-10 flex self-end">
                <button className="self-end" onClick={() => toggleActiveMobile()}>
                    <IoClose size={35} className="text-stone-400" />
                </button>
            </div>

            <nav className="flex flex-col space-y-6 text-stone-400">
                {
                    texts.navbar.navLinks.map((link, index) => (
                        <a key={index} href={`#${link}`} onClick={toggleActiveMobile} className="hover:text-stone-300 text-lg font-semibold transition-all duration-300">{link}</a>
                    ))
                }
            </nav>

        </div>
    </div>
  )
}