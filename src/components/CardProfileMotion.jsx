import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import diegoProfile from '../assets/diegoProfile.png'

export default function CardProfileMotion() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Reducimos el rango de rotación (p.ej. 15 grados) para que sea elegante
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Resortes más suaves para evitar saltos bruscos
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(rotateX, springConfig);
  const smoothY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div style={{ perspective: "1200px" }}> 
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
          width: 340,
          height: 450,
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d", // <--- MANTIENE EL 3D INTERNO
          background: "linear-gradient(135deg, #646464, #0f0f0f)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >

        <motion.img
            src={diegoProfile}
            style={{
                willChange: "transform", // <--- ESTO ES CLAVE
            }}
            className='w-100 h-113 border-3 border-stone-700 rounded-xl'  />
      </motion.div>
    </div>
  );
}
