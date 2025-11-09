import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * CursorFollower.jsx
 * — pallina globale che segue il cursore
 * — visibile solo su desktop
 */
export default function CursorFollower({
  size = 22,
  color = "rgba(255,255,255,0.5)",
  blur = true,
  blendMode = "difference", // 'lighten', 'screen', ecc.
}) {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  // Attiva solo su schermi "larghi" (es. > 768px)
  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      setEnabled(!isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Gestione del movimento solo se attivo
  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, mouseX, mouseY]);

  // Se è mobile → non renderizzare nulla
  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: blendMode,
        backdropFilter: blur ? "blur(6px)" : "none",
        WebkitBackdropFilter: blur ? "blur(6px)" : "none",
        willChange: "transform",
      }}
    />
  );
}
