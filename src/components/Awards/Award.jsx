import { FiArrowUpRight } from "react-icons/fi";
import { awards } from "../../constants";
import { Reveal, SectionHeading } from "../Motion";
export default function Awards() {
  return <section id="awards" className="section shell recognition-section"><SectionHeading number="05" label="MILESTONES ALONG THE WAY" title={<>A little recognition<span className="accent">.</span></>} /><div className="recognition-grid">{awards.map(award => <Reveal key={award.title}><a className="recognition-card" href={award.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${award.title} certificate`}><div className="award-image"><img src={award.image} alt={`${award.title}, ${award.company_name}, ${award.year_of_award}`} width="600" height="400" loading="lazy" /></div><div className="award-copy"><span className="mono muted">{award.year_of_award} / {award.title.includes("Team") ? "TEAM AWARD" : "CERTIFICATION"}</span><h3>{award.title}</h3><p>{award.company_name}</p></div><FiArrowUpRight className="award-arrow" /></a></Reveal>)}</div></section>;
}
