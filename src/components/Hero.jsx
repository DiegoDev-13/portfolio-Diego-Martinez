import { motion } from 'framer-motion'; // 1. Importar motion
import { FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { FaCss } from "react-icons/fa6";
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import CardProfileMotion from './CardProfileMotion';
import { useLanguage } from '../context/LanguageContext';

// Variantes para los elementos de texto (entran desde la izquierda)
const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Variantes para el contenedor de iconos (stagger effect)
const containerIcons = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 }
  }
};

const itemIcon = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

export const Hero = () => {
  const { texts } = useLanguage();

  return (
    <section id='Hero' className="w-full p-6 md:p-8 flex flex-col justify-between bg-stone-950 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-between py-3 md:py-8">
        
        {/* Contenedor de texto con animación inicial */}
        <motion.div 
          className="w-full md:w-[60%] flex flex-col space-y-4"
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeInRight} className="text-white text-2xl md:text-3xl font-bold text-center md:text-left">
            {texts.hero.title} 
            <br />
            <span className="text-purple-400 text-5xl md:text-6xl"> {texts.hero.subTitle}</span>
          </motion.h1>

          <motion.h2 variants={fadeInRight} className="text-stone-200 text-lg text-center md:text-left md:text-2xl font-semibold mt-4">
            {texts.hero.titleDescription}
          </motion.h2>

          <motion.div variants={fadeInRight} className="w-full flex justify-center md:justify-start gap-4 my-6">
            <a href={`#${texts.navbar.navLinks[0]}`} className="bg-purple-600 px-5 py-2.5 rounded-md text-[16px] font-semibold hover:bg-purple-700 transition-all duration-300 cursor-pointer">
              {texts.hero.buttonProjects}
            </a>
            <a href={`#${texts.navbar.navLinks[3]}`} className="bg-stone-800 px-5 py-2.5 rounded-md text-white text-[16px] font-semibold hover:bg-stone-900 transition-all duration-300 cursor-pointer">
              {texts.hero.buttonContact}
            </a>
          </motion.div>

          {/* Stack de tecnologías con animación escalonada */}
          <motion.div 
            variants={containerIcons}
            className='w-full flex flex-wrap justify-center md:justify-start items-center gap-4 my-10'
          >
            <motion.span variants={itemIcon} className='text-stone-400 text-[16px] uppercase mr-5'>
              {texts.hero.stack}
            </motion.span>
            <motion.div variants={itemIcon}><FaHtml5 size={35} className='text-[#f06529]' /></motion.div>
            <motion.div variants={itemIcon}><FaCss size={35} className='text-purple-800' /></motion.div>
            <motion.div variants={itemIcon}><IoLogoJavascript size={35} className='text-yellow-300' /></motion.div>
            <motion.div variants={itemIcon}><RiReactjsLine size={35} className='text-cyan-300' /></motion.div>
            <motion.div variants={itemIcon}><RiTailwindCssFill size={35} className='text-cyan-300' /></motion.div>
            <motion.div variants={itemIcon}><RiSupabaseFill size={35} className='text-green-400' /></motion.div>
            <motion.div variants={itemIcon}><FaGitAlt size={35} className='text-red-400' /></motion.div>
          </motion.div>
        </motion.div>
        
        {/* Lado derecho: CardProfileMotion (Entrada desde la derecha) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[37%] flex justify-center items-center z-20"
        >
          <CardProfileMotion />  
        </motion.div>
      </div>
    </section>
  );
};
