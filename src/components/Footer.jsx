import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion"; 

export const Footer = () => {

    const {texts} = useLanguage()

  return (
    <footer role="banner" className="w-full flex flex-col md:flex-row justify-between items-center bg-stone-950 md:h-50 px-6 md:px-10 py-8 space-y-4">
        <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            href="#Hero" className="text-purple-700 font-bold text-lg cursor-pointer">
                Diego Martinez
        </motion.a>

        <motion.div
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, ease: 'easeOut'}} 
            className="flex justify-center items-center gap-6">
            <a href="https://github.com/DiegoDev-13" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center space-y-1 text-stone-400 hover:text-stone-300 transition-colors duration-300">
                <FaGithub size={30} />
                <span className="text-[16px]">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/diego-martinez13/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center space-y-1 text-stone-400 hover:text-stone-300 transition-colors duration-300">
                <FaLinkedin size={30} />
                <span className="text-[16px]">Linkedin</span>
            </a>    
        </motion.div>

        <motion.span 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className="text-stone-500 text-[16px]">
            @ 2026 Diego Martinez. {texts.footer.text}
        </motion.span>
    </footer>
  )
}