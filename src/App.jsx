import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MotionProvider } from "./components/Motion";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Works/Works";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Awards from "./components/Awards/Award";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return <MotionProvider>
    <Preloader />
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><About /><Projects /><Experience /><Tech /><Awards /><Contact /></main>
    <Footer />
    <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />
  </MotionProvider>;
}
