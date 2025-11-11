import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";


/*
 * AnimatedSection.jsx
 * - "Statistico" ha espansione orizzontale
 *  */
export default function AnimatedSection({ id, color, children }) {
  const ref = useRef(null);
  const isAnimated = id === "statistico";

  // progressione dello scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Espansione dinamica (solo "statistico")
  const rawScaleX = isAnimated
    ? useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
    : 1;

  const scaleX = isAnimated
    ? useSpring(rawScaleX, { stiffness: 160, damping: 25, mass: 0.6 })
    : 1;

  return (
    <section
      ref={ref}
      id={id}
      style={{ isolation: "isolate" }}
    >
        
      <motion.div
        style={{
          scaleX,
          originX: 0.5,
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundColor: color,
        }}
      />

      {/* “i miei lavori” solo per la sezione statistico */}
      {isAnimated && <div className="intro-top">i miei lavori</div>}

      {/* Contenuto */}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
