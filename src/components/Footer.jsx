import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {

    const {texts} = useLanguage()

  return (
    <footer role="banner" className="w-full flex justify-between items-center bg-stone-950 h-50 px-10 py-8">
        <a href="#Hero" className="text-purple-700 font-bold text-lg cursor-pointer">Diego Martinez</a>

        <div className="flex justify-center items-center gap-6">
            <a href="https://github.com/DiegoDev-13" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center space-y-1 text-stone-400 hover:text-stone-300 transition-colors duration-300">
                <FaGithub size={30} />
                <span className="text-[16px]">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/diego-martinez13/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center space-y-1 text-stone-400 hover:text-stone-300 transition-colors duration-300">
                <FaLinkedin size={30} />
                <span className="text-[16px]">Linkedin</span>
            </a>    
        </div>

        <span className="text-stone-500 text-[16px]">@ 2026 Diego Martinez. {texts.footer.text}</span>
    </footer>
  )
}