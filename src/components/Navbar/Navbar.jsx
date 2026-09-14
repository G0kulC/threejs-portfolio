import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX, FiPause, FiPlay } from "react-icons/fi";
import { useMotionPreference } from "../Motion";

const links = [["about", "About"], ["projects", "Work"], ["work", "Experience"], ["contact", "Contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef(null);
  const { enabled, reduced, toggle } = useMotionPreference();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -55% 0px" });
    links.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = event => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header">
    <div className="nav-inner shell">
      <a href="#home" className="wordmark" aria-label="Gokul, back to top" onClick={() => setOpen(false)}>gokul<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, title]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{title}</a>)}</nav>
      <div className="nav-actions"><button className="motion-toggle" onClick={toggle} disabled={reduced} aria-label={reduced ? "Motion disabled by system preference" : enabled ? "Pause animations" : "Enable animations"} aria-pressed={!enabled} title={reduced ? "Reduced motion preference enabled" : enabled ? "Pause animations" : "Enable animations"}>{enabled ? <FiPause /> : <FiPlay />}</button><a className="nav-contact" href="#contact">Let&apos;s talk <FiArrowUpRight /></a><button ref={menuButton} className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button></div>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([id, title]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{title}<FiArrowUpRight /></a>)}</nav>}
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
  </header>;
}
