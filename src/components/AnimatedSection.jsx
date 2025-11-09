import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";



/**
 * AnimatedSection.jsx
 * - "Statistico" ha espansione orizzontale
 * - Ogni sezione usa un gradiente dinamico che si evolve durante lo scroll
 */
export default function AnimatedSection({ id, color, prevColor, children }) {
  const ref = useRef(null);
  const isAnimated = id === "statistico";

  // progressione dello scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Espansione dinamica (solo "statistico")
  const rawScaleX = isAnimated
    ? useTransform(scrollYProgress, [0, 0.3], [0.6, 1])
    : 1;

  const scaleX = isAnimated
    ? useSpring(rawScaleX, { stiffness: 160, damping: 25, mass: 0.6 })
    : 1;

  /**
   * Creiamo un movimento di gradiente
   * La posizione del gradiente cambia con lo scroll → effetto fluido
   */
  const gradientShift = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Sfondo con gradiente dinamico */}
      <motion.div
        style={{
          scaleX,
          originX: 0.5,
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(135deg, ${prevColor || color} 0%, ${color} 100%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: gradientShift, // si muove in base allo scroll
          transition: "background-position 0.3s ease-out",
        }}
      />

      {/* “i miei lavori” solo per la sezione statistico */}
      {isAnimated && <div className="intro-top">i miei lavori</div>}

      {/* Contenuto */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-8 text-center space-y-4">
        {children}
      </div>
    </section>
  );
}
