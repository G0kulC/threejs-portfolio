import { Component, lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { personalDetails } from "../../constants";
import { useMotionPreference } from "../Motion";

const NeuralCanvas = lazy(() => import("../canvas/NeuralCanvas"));
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}
export default function Hero() {
  const ref = useRef(null);
  const { enabled } = useMotionPreference();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sculptureY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  return <section className="hero" id="home" ref={ref}>
    <div className="hero-grid" aria-hidden="true" />
    <div className="shell hero-inner">
      <div className="hero-topline"><span className="eyebrow">GOKUL CHANDRASEKARAN</span><span className="mono hero-edition">PORTFOLIO / {new Date().getFullYear()}</span></div>
      <motion.div className="hero-copy" style={{ y: enabled ? textY : 0 }}>
        <p className="role-label"><span className="status-dot" /> AI ENGINEER | GENAI | AGENTIC AI | RAG | PYTHON</p>
        <h1>Turning ideas<br />into <span>production AI.</span></h1>
        <p className="hero-description">
          I build practical AI systems that solve real-world problems, automate workflows, and turn ideas into production-ready applications.<br />
          Specializing in <strong>Generative AI, RAG, Agentic AI, AI Automation, Machine Learning, and Python-based backend systems.</strong>
        </p>
        <div className="hero-buttons"><a href="#projects" className="button button-primary">Explore my work <FiArrowDownRight /></a><a className="text-link" href={personalDetails.resume_link} target="_blank" rel="noopener noreferrer">Download Résumé <FiDownload /></a></div>
      </motion.div>
      <div className="hero-art-stage" aria-hidden="true">
        <motion.div className="hero-art" style={{ y: enabled ? sculptureY : 0, rotate: enabled ? rotate : 0 }}>
          <img className="neural-fallback" src="/images/neural-form.webp" alt="" width="1024" height="1024" fetchpriority="high" />
          {enabled && <SceneBoundary><Suspense fallback={null}><NeuralCanvas /></Suspense></SceneBoundary>}
        </motion.div>
        <div className="art-caption mono"><span className="crosshair">+</span> CURRENTLY FOCUSED ON<br /><span>GENAI · AGENTS · RAG</span></div>
      </div>
      <div className="hero-bottom">
        <div className="hero-bottom-inner">
          <div className="current-position">
            <span className="status-dot" />
            <div className="current-position-body">
              <span className="mono muted current-label">CURRENTLY BUILDING AT</span>
              <span className="current-company">KG Invicta Services <FiArrowUpRight /></span>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to explore">
            <span className="scroll-circle" aria-hidden="true"><FiArrowDown /></span>
            <span className="scroll-cue-text mono">SCROLL TO EXPLORE</span>
          </a>
          <div className="hero-coordinate-wrap">
            <span className="hero-coordinate mono">IDEAS → INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
