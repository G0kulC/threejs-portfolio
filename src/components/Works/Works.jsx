import { useState } from "react";
import { FiArrowUpRight, FiArrowDown, FiMinus } from "react-icons/fi";
import { projects } from "../../constants";
import { Reveal, Parallax, SectionHeading } from "../Motion";

const summaries = {
  "Portfolio CMS": "A flexible Django backend for managing projects, skills, and experience—with REST APIs and JWT authentication.",
  "Backend Architecture": "A structured FastAPI foundation, built around modular routers, models, schemas, and services.",
  "PortfolioMailer-Backend": "An asynchronous contact-form service built with FastAPI, email notifications, and Docker deployment.",
  "Personal Portfolio": "An interactive Three.js portfolio exploring the intersection of code, motion, and visual storytelling.",
};
const featured = [projects[0], projects[2], projects[1], projects[3]];
const archived = projects.filter(project => !featured.includes(project));

function ProjectCard({ project, index }) {
  return <Reveal className={`project-card project-${index}`} delay={index % 2 * 0.1}>
    <div className="project-visual"><div className="project-visual-top mono"><span>{index === 3 ? "CREATIVE DEVELOPMENT" : "BACKEND ENGINEERING"}</span><span>0{index + 1}</span></div><Parallax distance={24} className="project-image-wrap"><img src={project.image} alt={`${project.name} project preview`} width="800" height="500" loading="lazy" /></Parallax><a className="project-open" href={project.source_code_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`}><FiArrowUpRight /></a><span className="project-visual-bottom mono">{project.tags.map(tag => tag.name.toUpperCase()).join(" / ")}</span></div>
    <div className="project-title-row"><h3>{project.name === "PortfolioMailer-Backend" ? "Portfolio Mailer" : project.name}</h3><span className="mono muted">{new Date(project.project_date).getUTCFullYear()}</span></div><p className="project-summary">{summaries[project.name]}</p><div className="project-links"><a href={project.source_code_link} target="_blank" rel="noopener noreferrer">Source code <FiArrowUpRight /></a>{project.project_live_link && <a href={project.project_live_link} target="_blank" rel="noopener noreferrer">Live project <FiArrowUpRight /></a>}</div>
  </Reveal>;
}
export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  return <section id="projects" className="section shell projects-section"><SectionHeading number="02" label="SELECTED PAST WORK" title={<>Built with purpose<span className="accent">.</span></>}>A selection of backend systems and web experiences that shaped my engineering foundation.</SectionHeading><div className="projects-grid">{featured.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
    <div className="archive-header"><span className="mono muted">MORE EXPERIMENTS. MORE EXPLORATION.</span><button className="text-link" aria-expanded={expanded} aria-controls="project-archive" onClick={() => setExpanded(!expanded)}>{expanded ? "Close archive" : `Explore the archive (${archived.length})`}{expanded ? <FiMinus /> : <FiArrowDown />}</button></div>
    <div id="project-archive" hidden={!expanded}>{archived.map(project => <article className="archive-project" key={project.name}><img src={project.image} alt={`${project.name} preview`} width="150" height="100" loading="lazy" /><div><span className="mono muted">{new Date(project.project_date).getUTCFullYear()} / PAST PROJECT</span><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag.name}>{tag.name}</span>)}</div></div>{project.source_code_link ? <a className="round-link" href={project.source_code_link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`}><FiArrowUpRight /></a> : <span className="mono muted">ARCHIVED</span>}</article>)}</div>
  </section>;
}
