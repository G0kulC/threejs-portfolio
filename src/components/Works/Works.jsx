import { projects } from "../../constants";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal, Parallax, SectionHeading } from "../Motion";

const categoryLabels = [
  "MACHINE LEARNING & FORECASTING",
  "GENERATIVE AI & RAG",
  "AGENTIC AI & AUTOMATION",
  "COMPUTER VISION & ML",
];

const summaries = {
  "Retail Sales Forecasting":
    "End-to-end ML pipeline for retail sales forecasting using XGBoost, LSTM, and Optuna. Features time-series analysis, seasonality decomposition, and an interactive sales trend dashboard.",
  "HealthDiet AI":
    "An AI-powered health and diet assistant delivering personalized meal plans, nutritional analysis, and real-time diet coaching powered by LLMs and RAG.",
  "JobAI Agent":
    "Autonomous AI job search agent automating job discovery, resume tailoring, ATS scoring, and interview preparation using LLM-based analysis and agentic workflows.",
  "Fruit Freshness Classifier":
    "Automated fruit grading system using Transfer Learning (CNN + ResNet) and KNN. Includes image preprocessing, model comparison, confidence scoring, and SQLite prediction history.",
};

function ProjectCard({ project, index }) {
  return (
    <Reveal className={`project-card project-${index}`} delay={index % 2 * 0.1}>
      <div className="project-visual">
        <div className="project-visual-top mono">
          <span>{categoryLabels[index] || "ENGINEERING"}</span>
          <span>0{index + 1}</span>
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
        <a
          className="project-open"
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} source code`}
        >
          <FiArrowUpRight />
        </a>
        <span className="project-visual-bottom mono">
          {project.tags.map((tag) => tag.name.toUpperCase()).join(" • ")}
        </span>
      </div>
      <div className="project-title-row">
        <h3>{project.name}</h3>
        <span className="mono muted">{new Date(project.project_date).getUTCFullYear()}</span>
      </div>
      <p className="project-summary">{summaries[project.name] || project.description}</p>
      <div className="project-links">
        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
          GitHub <FiArrowUpRight />
        </a>
        {project.project_live_link && (
          <a href={project.project_live_link} target="_blank" rel="noopener noreferrer">
            Live demo <FiArrowUpRight />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section shell projects-section">
      <SectionHeading
        number="02"
        label="SELECTED WORK"
        title={<>Built with purpose<span className="accent">.</span></>}
      >
        Real-world AI systems, ML pipelines, and intelligent automation — all open source.
      </SectionHeading>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
