import { useState, useEffect } from "react";
import { C } from "../styles/tokens";
import useScrollY from "../hooks/useScrollY";

export default function Navbar({ active }) {
  const scrollY = useScrollY();
  const scrolled = scrollY > 60;
  const isDarkZone = scrollY < window.innerHeight * 0.85;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const textColor = isDarkZone ? `${C.ink}cc` : `${C.wine}bb`;
  const logoColor = isDarkZone ? C.ink : C.wine;
  const navBg = scrolled ? (isDarkZone ? `${C.deep}ee` : `${C.paper}ee`) : "transparent";
  const navLinks = [["about", "About"], ["projects", "Work"], ["skills", "Skills"], ["certifications", "Certs"], ["contact", "Contact"]];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${isDarkZone ? "#ffffff10" : C.ghost}` : "1px solid transparent",
        transition: "background .5s, border-color .5s",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-c style={{ background: "none", border: "none", cursor: isMobile ? "pointer" : "none", padding: 0 }}>
            <span style={{ fontFamily: C.serif, fontSize: 20, letterSpacing: 3, color: logoColor, fontStyle: "italic", transition: "color .4s" }}>AG</span>
          </button>

          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{
              display: isMobile ? "none" : "flex",
              gap: 32,
              alignItems: "center",
            }}
          >
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} data-c style={{
                background: "none", border: "none", cursor: isMobile ? "pointer" : "none",
                fontFamily: C.sans, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 500,
                color: active === id ? C.copper : textColor,
                transition: "color .4s", padding: "4px 0", position: "relative",
              }}>
                {label}
                {active === id && (
                  <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 1, background: C.copper, borderRadius: 1 }} />
                )}
              </button>
            ))}
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              data-c
              style={{
                fontFamily: C.sans,
                fontSize: 10,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                fontWeight: 700,
                background: C.copper,
                color: "#fff",
                border: "none",
                padding: "9px 24px",
                borderRadius: 2,
                cursor: isMobile ? "pointer" : "none",
                transition: "background .25s,transform .25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.plum;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.copper;
                e.currentTarget.style.transform = "none";
              }}
            >
              Resume
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)} style={{
            display: isMobile ? "flex" : "none", background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 1.5, background: isDarkZone ? C.ink : C.wine, borderRadius: 1,
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(4px,4px)" : i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)") : "none",
                transition: "transform .25s",
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile slide menu */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 58, left: 0, right: 0, zIndex: 199,
          background: `${C.deep}f8`, backdropFilter: "blur(24px)",
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform .4s cubic-bezier(.16,1,.3,1)",
          padding: "24px clamp(20px,5vw,72px) 32px",
          borderBottom: `1px solid ${C.wine}`,
        }}>
          {navLinks.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
              fontFamily: C.sans, fontSize: 14, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 500,
              color: active === id ? C.copper : `${C.ink}bb`,
              padding: "16px 0", borderBottom: `1px solid ${C.wine}`, cursor: "pointer",
            }}>{label}</button>
          ))}
          <button
            onClick={() => {
              window.open("/resume.pdf", "_blank");
              setMenuOpen(false);
            }}
            style={{
              marginTop: 24,
              width: "100%",
              padding: "12px",
              border: "none",
              background: C.copper,
              color: "#fff",
              fontFamily: C.sans,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
}