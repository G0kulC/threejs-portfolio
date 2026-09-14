import { useEffect, useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX, FiPause, FiPlay, FiDownload } from "react-icons/fi";
import { personalDetails } from "../../constants";
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-inner shell">
        <a href="#home" className="wordmark" aria-label="Gokul, back to top" onClick={() => setOpen(false)}>
          gokul<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([id, title]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              {title}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="motion-toggle"
            onClick={toggle}
            disabled={reduced}
            aria-label={reduced ? "Motion disabled by system preference" : enabled ? "Pause animations" : "Enable animations"}
            aria-pressed={!enabled}
            title={reduced ? "Reduced motion preference enabled" : enabled ? "Pause animations" : "Enable animations"}
          >
            {enabled ? <FiPause /> : <FiPlay />}
          </button>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <FiArrowUpRight />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-links">
              {links.map(([id, title], idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`mobile-nav-link ${active === id ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-nav-index mono">0{idx + 1}</span>
                  <span className="mobile-nav-title">{title}</span>
                  <FiArrowUpRight className="mobile-nav-arrow" />
                </a>
              ))}
            </div>
            <div className="mobile-nav-footer">
              <a
                className="button button-primary mobile-cta-btn"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk <FiArrowUpRight />
              </a>
              <a
                className="text-link mobile-resume-link"
                href={personalDetails.resume_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Download Résumé <FiDownload />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    </header>
  );
}

