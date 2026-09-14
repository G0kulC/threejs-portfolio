import { FiArrowUpRight } from "react-icons/fi";
import { experiences } from "../../constants";
import { Reveal, SectionHeading } from "../Motion";

export default function Experience() {
  return (
    <section className="career-band" id="work">
      <div className="section shell">
        <SectionHeading
          number="03"
          label="THE JOURNEY"
          title={<>Always moving<br />forward<span className="accent">.</span></>}
        >
          From writing my first Python applications to building production-ready AI systems and intelligent workflows. Every chapter builds on the last.
        </SectionHeading>
        <div className="career-list">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company_name}-${experience.title}`}
              className={`career-row ${experience.current ? "career-current" : ""}`}
            >
              <div className="career-time">
                <span className="timeline-dot" />
                <span className="mono">
                  {experience.current ? <><span className="status-dot" /> PRESENT</> : experience.date}
                </span>
                <span className="mono muted">CHAPTER 0{experiences.length - index}</span>
              </div>
              <div className="career-detail">
                <h3>{experience.title.trim()}</h3>
                <p className="career-company">
                  {experience.link ? (
                    <a href={experience.link} target="_blank" rel="noopener noreferrer">
                      {experience.company_name}<FiArrowUpRight />
                    </a>
                  ) : (
                    experience.company_name
                  )}
                </p>
                {experience.current ? (
                  <div className="career-current-content">
                    <p className="career-current-description">{experience.points[0]}</p>
                    <details>
                      <summary>View key responsibilities <span>+</span></summary>
                      <ul>
                        {experience.points.slice(1).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                ) : (
                  <details>
                    <summary>Explore this chapter <span>+</span></summary>
                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
              {experience.current && <span className="current-badge">CURRENT ROLE</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
