import { FaGitAlt, FaHtml5 } from 'react-icons/fa'
import { FaCss } from "react-icons/fa6";
import { motion } from "framer-motion"
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import CardProfileMotion from './CardProfileMotion';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {

    const {texts} = useLanguage()

  return (
    <section id='Hero' className="w-full p-8 flex flex-col justify-between bg-stone-950">
        <motion.div initial={{y: 100}} animate={{ y: 0}} className="w-full flex flex-col md:flex-row justify-between py-8">
            <div className="w-full md:w-[60%] flex flex-col space-y-4">
                <h1 className="text-white text-2xl md-text-3xl font-bold text-center md:text-left">{texts.hero.title} 
                    <br /><span className="text-purple-400 text-5xl md-text-6xl"> {texts.hero.subTitle}</span></h1>
                <h2 className="text-stone-200 text-lg text-center md:text-left md:text-2xl font-semibold mt-4">{texts.hero.titleDescription}</h2>
                <div className="w-full flex justify-center md:justify-start  gap-4 my-6">
                    <a href={`#${texts.navbar.navLinks[0]}`} className="bg-purple-600 px-5 py-2.5 rounded-md text-[16px] font-semibold hover:bg-purple-700 transition-all duration-300 cursor-pointer">{texts.hero.buttonProjects}</a>
                    <a href={`#${texts.navbar.navLinks[3]}`} className="bg-stone-800 px-5 py-2.5 rounded-md text-white text-[16px] font-semibold hover:bg-stone-900 transition-all duration-300 cursor-pointer">{texts.hero.buttonContact}</a>
                </div>
                <div className='w-full flex justify-center md:justify-start items-center space-x-3 my-10'>
                    <span className='text-stone-400 text-[16px] uppercase mr-5'>{texts.hero.stack}</span>
                    <FaHtml5 size={35} className='text-[#f06529]' />
                    <FaCss size={35} className='text-purple-800' />
                    <IoLogoJavascript size={35} className='text-yellow-300' />
                    <RiReactjsLine size={35} className='text-cyan-300' />
                    <RiTailwindCssFill size={35} className='text-cyan-300' />
                    <RiSupabaseFill size={35} className='text-green-400' />
                    <FaGitAlt size={35} className='text-red-400' />
                </div>
            </div>
            
            <div className="w-full md:w-[37%] flex justify-center items-center">
                <CardProfileMotion />  
            </div>
        </motion.div>
    </section>
  )
}