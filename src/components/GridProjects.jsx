import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { CardProject } from "./CardProject";

// Definir las variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre la aparición de cada tarjeta
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const GridProjects = () => {
  const { texts } = useLanguage();

  return (
    <section 
      id={texts.navbar.navLinks[0]} 
      className="w-full flex flex-col justify-center p-6 md:p-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl text-center md:text-start text-white font-bold mb-8">
          {texts.projects.title}
        </h2>
      </motion.div>

      {/* Aplicar motion al contenedor del grid */}
      <motion.div 
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Se activa cuando el 20% es visible
      >
        {texts.projects.projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CardProject project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
