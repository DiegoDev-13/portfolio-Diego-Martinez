import { motion } from "framer-motion"; // 1. Importar motion
import diegoAbout from '../assets/diegoAbout.png';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { texts } = useLanguage();

  return (
    <div id={texts.navbar.navLinks[2]} className='bg-stone-950 p-4 md:p-10 w-full overflow-hidden'>
      {/* Título con aparición suave desde arriba */}
      <motion.h3 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl text-center text-white font-bold mb-8'
      >
        {texts.about.title}
      </motion.h3>

      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-20">
        
        {/* Imagen: Entra desde la izquierda */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='w-full md:w-[30%] flex items-center'
        >
          <img src={diegoAbout} alt="Diego" className='w-full md:w-100 md:h-110 object-cover'/>
        </motion.div>

        {/* Texto: Entra desde la derecha con stagger en los párrafos */}
        <motion.div 
          className='w-full md:w-[50%] p-4 md:p-0 flex flex-col space-y-6'
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
            className='text-[16px] text-stone-400 leading-relaxed'
          >
            {texts.about.description1}
          </motion.p>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
            className='text-[16px] text-stone-400 leading-relaxed'
          >
            {texts.about.description2}
          </motion.p>

          <motion.p 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
            className='text-[16px] text-stone-400 leading-relaxed'
          >
            {texts.about.description3}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
