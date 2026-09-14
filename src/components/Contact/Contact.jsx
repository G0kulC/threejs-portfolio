import { FiArrowUpRight } from "react-icons/fi";
import { personalDetails, socialLinks } from "../../constants";
import { Reveal, Parallax } from "../Motion";
import ContactForm from "./ContactForm";
export default function Contact() {
  return <section id="contact" className="contact-band"><div className="section shell"><Reveal><p className="eyebrow"><span>06 /</span> LET’S CONNECT</p></Reveal><div className="contact-layout"><div><Parallax distance={20}><h2>Great things start<br />with a <span className="accent">hello.</span><FiArrowUpRight className="contact-heading-arrow" aria-hidden="true" /></h2></Parallax><Reveal><p className="contact-intro">Have an interesting idea, a challenging problem,<br className="desktop-break" /> or just want to exchange a few thoughts?</p><a className="email-link" href={`mailto:${personalDetails.email}`}>{personalDetails.email}<FiArrowUpRight /></a><div className="contact-socials">{socialLinks.filter(link => link.platform !== "Email").map(link => <a href={link.url} key={link.platform} target="_blank" rel="noopener noreferrer">{link.platform}<FiArrowUpRight /></a>)}</div></Reveal></div><Reveal className="contact-form-wrap"><ContactForm /></Reveal></div></div></section>;
}
