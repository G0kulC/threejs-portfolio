import { Reveal, SectionHeading } from "../Motion";

const skillCategories = [
  {
    category: "AI & GenAI",
    number: "01",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Applications", "Multimodal AI"]
  },
  {
    category: "RAG & Knowledge Systems",
    number: "02",
    skills: ["RAG", "Embeddings", "Vector Search", "Document Intelligence", "Knowledge Retrieval"]
  },
  {
    category: "Agentic AI & Automation",
    number: "03",
    skills: ["AI Agents", "Agentic Workflows", "Tool Calling", "AI Automation", "Workflow Automation"]
  },
  {
    category: "Machine Learning",
    number: "04",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Model Integration"]
  },
  {
    category: "Backend & Development",
    number: "05",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "Microservices"]
  },
  {
    category: "Data & Databases",
    number: "06",
    skills: ["PostgreSQL", "MongoDB", "Data Processing", "Data Parsing", "Analytics"]
  },
  {
    category: "Cloud & Deployment",
    number: "07",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Production Deployment"]
  }
];

export default function Tech() {
  return (
    <section id="tech" className="section shell">
      <SectionHeading
        number="04"
        label="SKILLS & SPECIALIZATION"
        title={<>Specialized tools. Intelligent systems<span className="accent">.</span></>}
      >
        A comprehensive breakdown of my expertise across Generative AI, Agentic workflows, backend engineering, and cloud deployment.
      </SectionHeading>
      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <Reveal key={group.category} className="skill-card" delay={index * 0.05}>
            <div className="skill-card-top">
              <span className="mono muted">{group.number} / {group.category.toUpperCase()}</span>
            </div>
            <p className="skill-card-items">
              {group.skills.join(" • ")}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
