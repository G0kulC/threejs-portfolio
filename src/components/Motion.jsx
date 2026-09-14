import { createContext, useContext, useEffect, useRef, useState } from "react";
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const MotionContext = createContext({ enabled: true, toggle: () => {} });
export const useMotionPreference = () => useContext(MotionContext);

export function MotionProvider({ children }) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const enabled = !reduced && !paused;
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);
  return <MotionContext.Provider value={{ enabled, reduced, toggle: () => setPaused(value => !value) }}><MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig></MotionContext.Provider>;
}

export function Reveal({ children, className = "", delay = 0 }) {
  const { enabled } = useMotionPreference();
  return <motion.div className={className} initial={enabled ? { opacity: 0, y: 26 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: enabled ? 0.7 : 0, delay: enabled ? delay : 0, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function Parallax({ children, className = "", distance = 45 }) {
  const ref = useRef(null);
  const { enabled } = useMotionPreference();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 30, restDelta: 0.1 });
  return <div ref={ref} className={className}><motion.div style={{ y: enabled ? y : 0 }}>{children}</motion.div></div>;
}

export function SectionHeading({ number, label, title, children }) {
  return <Reveal className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children && <p className="section-description">{children}</p>}</Reveal>;
}
