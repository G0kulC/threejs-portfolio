import { useState } from "react";
import { productionProjects, gitProjects, personalDetails } from "../../constants";
import { FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import { Reveal, Parallax, SectionHeading } from "../Motion";

function ProjectCard({ project, index, isProduction }) {
  return (
    <Reveal className={`project-card project-${index}`} delay={(index % 2) * 0.1}>
      <div className="project-visual">
        <div className="project-visual-top mono">
          <span>{project.subtitle || project.category || "AI ENGINEERING"}</span>
          <span>{project.category_number || `0${index + 1}`}</span>
        </div>
        <Parallax distance={24} className="project-image-wrap">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            width="800"
            height="500"
            loading="lazy"
          />
        </Parallax>
        {project.source_code_link ? (
          <a
            className="project-open"
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
          >
            <FiArrowUpRight />
          </a>
        ) : (
          <a
            className="project-open"
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire about ${project.name}`}
          >
            <FiArrowUpRight />
          </a>
        )}
        <span className="project-visual-bottom mono">
          {project.tags.map((tag) => tag.name.toUpperCase()).join(" • ")}
        </span>
      </div>
      <div className="project-title-row">
        <h3>{project.name}</h3>
        <span className="mono muted">
          {isProduction ? "PRODUCTION" : new Date(project.project_date).getUTCFullYear()}
        </span>
      </div>
      {project.role && (
        <span className="project-role-badge">
          ✦ {project.role}
        </span>
      )}
      <p className="project-summary">{project.description}</p>
      <div className="project-links">
        {isProduction ? (
          <span className="production-status-tag mono">
            <span className="status-dot" />
            KG Invicta Services · Active Production
          </span>
        ) : (
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
            <FiGithub style={{ fontSize: 13 }} /> GitHub <FiArrowUpRight />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const showProduction = activeFilter === "all" || activeFilter === "production";
  const showGit = activeFilter === "all" || activeFilter === "git";

  return (
    <section id="projects" className="section shell projects-section">
      <SectionHeading
        number="02"
        label="SELECTED WORK"
        title={<>Engineered for <span className="accent">scale & impact.</span></>}
      >
        Enterprise Agentic AI systems actively running in production, alongside open-source research and intelligent automation.
      </SectionHeading>

      <div className="works-filters" role="tablist" aria-label="Filter works">
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "all"}
          className={`works-filter-btn mono ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          <FiLayers /> All Projects (7)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "production"}
          className={`works-filter-btn mono ${activeFilter === "production" ? "active" : ""}`}
          onClick={() => setActiveFilter("production")}
        >
          <span className="status-dot" /> Production AI @ KG Invicta (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "git"}
          className={`works-filter-btn mono ${activeFilter === "git" ? "active" : ""}`}
          onClick={() => setActiveFilter("git")}
        >
          <FiGithub /> Open Source Repos (4)
        </button>
      </div>

      {showProduction && (
        <div className="works-group">
          <Reveal className="works-section-header">
            <div>
              <p className="eyebrow">
                <span>01 /</span> CURRENT WORK @ KG INVICTA SERVICES
              </p>
              <h3>Production AI Systems</h3>
            </div>
            <span className="works-role-pill mono">
              <span className="status-dot" />
              Role: Full Maintainer · Backend & AI Workflows End-to-End
            </span>
          </Reveal>
          <div className="projects-grid">
            {productionProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                isProduction={true}
              />
            ))}
          </div>
        </div>
      )}

      {showGit && (
        <div className="works-group" style={{ marginTop: showProduction ? "80px" : "0" }}>
          <Reveal className="works-section-header">
            <div>
              <p className="eyebrow">
                <span>02 /</span> OPEN SOURCE & RESEARCH LAB
              </p>
              <h3>Personal AI & ML Repositories</h3>
            </div>
            <span className="mono muted" style={{ fontSize: "10px" }}>
              Public Codebases · Models · End-to-End ML
            </span>
          </Reveal>
          <div className="projects-grid">
            {gitProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index + 3}
                isProduction={false}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
