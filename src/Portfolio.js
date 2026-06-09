import { useEffect, useState } from "react";

import { C } from "./styles/tokens";

import useIsTouch from "./hooks/useIsTouch";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const isTouch = useIsTouch();

  useEffect(() => {
    const ids = [
      "about",
      "resume",
      "skills",
      "projects",
      "certifications",
      "contact",
    ];

    const h = () => {
      let cur = "home";

      ids.forEach((id) => {
        const el = document.getElementById(id);

        if (
          el &&
          window.scrollY >= el.offsetTop - 100
        ) {
          cur = id;
        }
      });

      setActive(cur);
    };

    window.addEventListener("scroll", h, {
      passive: true,
    });

    h();

    return () =>
      window.removeEventListener("scroll", h);
  }, []);

  return (
    <div
      style={{
        background: C.deep,
        color: C.wine,
        cursor: isTouch ? "auto" : "none",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body,
        a,
        button {
          cursor: none !important;
        }

        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${C.rose};
        }

        ::selection {
          background: ${C.plum};
          color: ${C.rose};
        }

        textarea,
        input {
          caret-color: ${C.copper};
        }

        input::placeholder,
        textarea::placeholder {
          color: ${C.ghost};
        }

        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }

        @keyframes scrollPulse {
          0%,100% {
            opacity:.4;
            transform:scaleY(1);
          }
          50% {
            opacity:.8;
            transform:scaleY(1.1);
          }
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes tickerRev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .pulse-dot {
          animation: pulseDot 2.2s ease infinite;
        }

        @keyframes pulseDot {
          0%,100% {
            opacity:1;
            transform:scale(1);
          }

          50% {
            opacity:.3;
            transform:scale(.8);
          }
        }

        @media (max-width:768px) {
          .desktop-nav {
            display:none !important;
          }

          .mobile-menu-btn {
            display:flex !important;
          }

          .about-grid,
          .skills-grid,
          .cert-grid,
          .contact-grid {
            grid-template-columns:1fr !important;
          }

          .project-grid {
            grid-template-columns:1fr !important;
          }

          body,
          a,
          button {
            cursor:auto !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration:.01ms !important;
            transition-duration:.01ms !important;
          }
        }
      `}</style>

      {!isTouch && <Cursor />}

      <Navbar active={active} />

      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}