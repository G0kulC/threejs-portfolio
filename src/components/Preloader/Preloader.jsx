import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM");

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = "hidden";

    // Track critical readiness
    let isWindowLoaded = document.readyState === "complete";
    let isFontsLoaded = false;

    const onWindowLoad = () => {
      isWindowLoaded = true;
    };

    if (!isWindowLoaded) {
      window.addEventListener("load", onWindowLoad);
    }

    if (document.fonts) {
      document.fonts.ready.then(() => {
        isFontsLoaded = true;
      });
    } else {
      isFontsLoaded = true;
    }

    // Preload critical images in background
    const criticalImages = [
      "/images/neural-form.webp",
      "/images/ai_call_agent.png",
      "/images/ai_qa_agent.png",
      "/images/docscope_ai.png",
      "/images/employee_of_the_year.jpg",
      "/images/best_teamof_year.webp",
    ];
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const statusSteps = [
      { at: 12, text: "INITIALIZING ENVIRONMENT" },
      { at: 35, text: "PREPARING NEURAL PARTICLES" },
      { at: 65, text: "LOADING AI WORKFLOWS & ASSETS" },
      { at: 85, text: "CONFIGURING SHADERS & VIEWPORT" },
      { at: 96, text: "SYSTEM READY" },
    ];

    let current = 0;
    const interval = setInterval(() => {
      // Accelerate once background resources are loaded
      const step =
        isWindowLoaded && isFontsLoaded
          ? Math.floor(Math.random() * 7) + 5
          : Math.floor(Math.random() * 4) + 2;

      current = Math.min(current + step, 100);
      setProgress(current);

      const matchingStatus = statusSteps
        .slice()
        .reverse()
        .find((s) => current >= s.at);
      if (matchingStatus) {
        setStatusText(matchingStatus.text);
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 380);
      }
    }, 42);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", onWindowLoad);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="site-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -18,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div className="preloader-bg-grid" aria-hidden="true" />
          <div className="preloader-content">
            <motion.div
              className="preloader-brand"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="preloader-wordmark">
                gokul<span>.</span>
              </span>
              <span className="preloader-pill mono">
                <span className="status-dot live" /> AI PORTFOLIO
              </span>
            </motion.div>

            <div className="preloader-progress-box">
              <div className="preloader-meta mono">
                <span className="preloader-status">{statusText}</span>
                <span className="preloader-percent">{progress}%</span>
              </div>
              <div className="preloader-bar-track">
                <motion.div
                  className="preloader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="preloader-footer mono">
              <span>GENAI · AGENTIC WORKFLOWS · PRODUCTION</span>
              <span>[ 2026 ]</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
