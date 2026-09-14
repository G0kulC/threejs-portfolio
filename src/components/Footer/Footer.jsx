import { FiArrowUpRight } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="site-footer-brand">
        <a className="wordmark" href="#home">gokul<span>.</span></a>
        <p className="footer-tagline">Building intelligent systems that turn complex problems into simple, automated solutions.</p>
      </div>
      <p className="mono muted">© {new Date().getFullYear()} GOKUL CHANDRASEKARAN</p>
      <a href="#home" className="text-link">Back to top <FiArrowUpRight /></a>
    </footer>
  );
}
