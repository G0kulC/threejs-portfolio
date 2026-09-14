import { FiArrowUpRight, FiCode, FiCpu, FiDatabase, FiAperture } from "react-icons/fi";
import { personalDetails } from "../../constants";
import { Reveal, Parallax } from "../Motion";

export default function About() {
  return <section id="about" className="section shell about-section">
    <Reveal><p className="eyebrow"><span>01 /</span> THE PERSON BEHIND THE CODE</p></Reveal>
    <div className="about-layout">
      <Parallax distance={18}>
        <h2>Building intelligent<br />systems that solve <span className="accent">real problems.</span></h2>
      </Parallax>
      <Reveal className="about-copy">
        <FiAperture className="small-star" aria-hidden="true" />
        <p>I’m an <strong>AI Engineer and Software Developer</strong> focused on building intelligent systems that solve real-world problems and automate manual work.</p>
        <p>My experience includes <strong>Generative AI, RAG, Agentic AI, AI Automation, Machine Learning, Python, FastAPI, and Django</strong>, along with cloud and database technologies such as <strong>AWS, Docker, PostgreSQL, and MongoDB</strong>.</p>
        <p>I enjoy building end-to-end solutions — from AI models and LLM integrations to APIs, automation workflows, and production deployment.</p>
        <p>I’m continuously exploring emerging AI technologies and working toward building systems that make work <em>simpler, faster, and more scalable</em>.</p>
        <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">More about me on LinkedIn <FiArrowUpRight /></a>
      </Reveal>
    </div>
    <div className="expertise-strip">
      {[
        [FiCpu, "GenAI & Agentic AI", "LLMs, RAG & Autonomous Workflows"],
        [FiCode, "Python & Backend Systems", "FastAPI, Django & Microservices"],
        [FiDatabase, "Cloud & Automation", "AWS, Docker, CI/CD & Production"]
      ].map(([Icon, title, description], index) => (
        <Reveal key={title} className="expertise-item" delay={index * 0.08}>
          <Icon aria-hidden="true" />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <span className="mono">0{index + 1}</span>
        </Reveal>
      ))}
    </div>
  </section>;
}
