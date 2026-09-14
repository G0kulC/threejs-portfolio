import { FiArrowUpRight } from "react-icons/fi";
import { awards } from "../../constants";
import { Reveal, SectionHeading } from "../Motion";

export default function Awards() {
  return (
    <section id="awards" className="section shell recognition-section">
      <SectionHeading
        number="05"
        label="MILESTONES ALONG THE WAY"
        title={
          <>
            A little recognition<span className="accent">.</span>
          </>
        }
      >
        Honours, team accolades, and personal milestones celebrating dedication, innovation, and impact.
      </SectionHeading>
      <div className="recognition-grid">
        {awards.map((award, index) => (
          <Reveal key={award.title} delay={index * 0.1}>
            <a
              className="recognition-card"
              href={award.post_link || award.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${award.title} on LinkedIn`}
            >
              <div className="award-image">
                <img
                  src={award.image}
                  alt={`${award.title}, ${award.company_name}, ${award.year_of_award}`}
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="award-copy">
                <span className="mono muted">
                  {award.year_of_award} / {award.type || "HONOR"}
                </span>
                <h3>{award.title}</h3>
                <p className="award-company">{award.company_name}</p>
                {award.summary && <p className="award-summary">{award.summary}</p>}
                <span className="award-linkedin-cue mono">
                  View post on LinkedIn <FiArrowUpRight />
                </span>
              </div>
              <FiArrowUpRight className="award-arrow" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
