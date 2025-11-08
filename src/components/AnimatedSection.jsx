import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * AnimatedSection.jsx
 * Sezione a pieno schermo con espansione orizzontale
 * Il colore si espande completamente già a metà della sezione.
 */
export default function AnimatedSection({ id, color, children }) {
  const ref = useRef(null);

  // Quando la sezione entra a metà viewport, l'animazione è già completa
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "center 0.9"], 
    // "start 0.8": inizia quando il top entra nell'80% del viewport
    // "center 0.2": finisce quando il centro arriva al 20% (metà circa)
  });

  // Espansione orizzontale del colore
  // Valore di partenza 0.3 (30% visibile), a 1 (pieno)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Sfondo colorato che si espande orizzontalmente */}
      <motion.div
        style={{
          backgroundColor: color,
          scaleX,
          originX: 0.5, // espansione simmetrica dal centro
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
    { id === "statistico" && (
        <div className="intro-top">i miei lavori</div>
    )}
      {/* Contenuto che riempie tutta la sezione */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-8 text-center space-y-4">
        {children}
      </div>
    </section>
  );
}
