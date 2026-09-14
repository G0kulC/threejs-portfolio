import { FiArrowUpRight, FiCode, FiCpu, FiDatabase, FiAperture } from "react-icons/fi";
import { personalDetails } from "../../constants";
import { Reveal, Parallax } from "../Motion";

export default function About() {
  return <section id="about" className="section shell about-section">
    <Reveal><p className="eyebrow"><span>01 /</span> THE PERSON BEHIND THE CODE</p></Reveal>
    <div className="about-layout"><Parallax distance={18}><h2>I connect the dots<br />between <span className="muted">data</span><br />and <span className="accent">possibility.</span></h2></Parallax><Reveal className="about-copy"><FiAperture className="small-star" aria-hidden="true" /><p>{personalDetails.description}</p><p>I care about what happens beyond the code: useful systems, thoughtful solutions, and the details that make them work.</p><a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">More about me on LinkedIn <FiArrowUpRight /></a></Reveal></div>
    <div className="expertise-strip">{[[FiCpu, "AI & data science", "My current focus"], [FiCode, "Python & backend", "My engineering foundation"], [FiDatabase, "Systems & automation", "How I connect it all"]].map(([Icon, title, description], index) => <Reveal key={title} className="expertise-item" delay={index * 0.08}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div><span className="mono">0{index + 1}</span></Reveal>)}</div>
  </section>;
}
