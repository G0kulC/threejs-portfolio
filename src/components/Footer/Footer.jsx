import { FiArrowUpRight } from "react-icons/fi";
export default function Footer() {
  return <footer className="site-footer shell"><a className="wordmark" href="#home">gokul<span>.</span></a><p className="mono muted">© {new Date().getFullYear()} GOKUL CHANDRASEKARAN</p><a href="#home" className="text-link">Back to top <FiArrowUpRight /></a></footer>;
}
