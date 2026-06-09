import { useEffect, useRef, useState } from "react";

import { C } from "../styles/tokens";
import useScrollY from "../hooks/useScrollY";
import useTyper from "../hooks/useTyper";

export default function Hero() {
  const [in_, setIn] = useState(false);
  const heroRef = useRef(null);
  const scrollY = useScrollY();
  const roles = [
    "Full Stack Developer",
    "MERN Developer",
    "Problem Solver",
    "Open to Opportunities"
  ];
  const typed = useTyper(roles, 75, 2000);

  useEffect(() => { const t = setTimeout(() => setIn(true), 80); return () => clearTimeout(t); }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Parallax offset — name drifts up as you scroll
  const parallax = scrollY * 0.28;

  return (
    <section ref={heroRef} style={{ minHeight: "100vh", background: C.deep, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>

      {/* Noise grain overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: .04, zIndex: 1, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }} />

      {/* Ambient radial glow */}
      <div style={{ position: "absolute", top: "-10%", left: "30%", width: "70vw", height: "70vw", maxWidth: 900, borderRadius: "50%", background: `radial-gradient(circle, ${C.plum}60 0%, transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />

      {/* Top-right identity chip */}
      <div style={{ position: "absolute", top: 90, right: "clamp(20px,5vw,72px)", textAlign: "right", zIndex: 2, opacity: in_ ? 1 : 0, transition: "opacity 1.2s ease 1.3s" }}>
        <div style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, color: `${C.rose}66`, marginBottom: 6 }}>akhila.goundla1112@gmail.com</div>
        <div style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, color: `${C.rose}44` }}>Hyderabad · India</div>
        <div style={{ width: 1, height: 40, background: `${C.rose}30`, margin: "14px auto" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
          <span style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 1.5, color: `${C.rose}88` }}>open to work</span>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8BC18A", display: "block" }} className="pulse-dot" />
        </div>
      </div>

      {/* Main name block with parallax */}
      <div style={{ padding: "0 clamp(20px,5vw,72px)", paddingBottom: "clamp(64px,9vh,100px)", maxWidth: 1320, width: "100%", margin: "0 auto", position: "relative", zIndex: 2, transform: `translateY(-${parallax}px)` }}>

        {/* Eyebrow — typing rotator */}
        <div style={{ overflow: "hidden", marginBottom: 12 }}>
          <div style={{
            fontFamily: C.mono, fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: C.copper,
            transform: in_ ? "none" : "translateY(110%)", transition: "transform 1.1s cubic-bezier(.16,1,.3,1) .05s",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span>{typed}</span>
            <span style={{ display: "inline-block", width: 2, height: "1em", background: C.copper, animation: "blink 1s step-end infinite" }} />
          </div>
        </div>

        {/* NAME — collision typography */}
        <div style={{ position: "relative" }}>
          <div style={{ overflow: "hidden" }}>
            <h1 style={{
              fontFamily: C.serif, fontWeight: 300, fontSize: "clamp(72px,13.5vw,192px)",
              lineHeight: .87, letterSpacing: "-3px", color: C.ink,
              transform: in_ ? "none" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(.16,1,.3,1) .12s",
            }}>Akhila</h1>
          </div>

          <div style={{ overflow: "hidden" }}>
            <h1 style={{
              fontFamily: C.serif, fontWeight: 300, fontSize: "clamp(72px,13.5vw,192px)",
              lineHeight: .87, letterSpacing: "-3px", color: C.copper, fontStyle: "italic",
              transform: in_ ? "none" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(.16,1,.3,1) .28s",
            }}>Goundla.</h1>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ marginTop: 44, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, opacity: in_ ? 1 : 0, transition: "opacity 1s ease 1.1s" }}>
          <p style={{ fontFamily: C.sans, fontSize: "clamp(13px,1.3vw,15px)", color: `${C.ink}66`, fontWeight: 300, lineHeight: 1.85, maxWidth: 420 }}>
            Building applications where design precision meets backend reliability — from first pixel to last API call.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button data-c onClick={() => go("projects")} style={{
              fontFamily: C.sans, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700,
              color: C.deep, background: C.ink, border: "none", padding: "13px 28px", borderRadius: 2,
              cursor: "none", transition: "background .25s,transform .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.rose; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.ink; e.currentTarget.style.transform = "none"; }}
            >View Work ↓</button>
            <a href="https://github.com/akhilacodesss/" target="_blank" rel="noopener noreferrer" data-c style={{
              fontFamily: C.mono, fontSize: 10, letterSpacing: 1.5, color: `${C.ink}55`, textDecoration: "none",
              borderBottom: `1px solid ${C.plum}`, paddingBottom: 2, transition: "color .25s,border-color .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = C.rose; e.currentTarget.style.borderColor = C.rose; }}
              onMouseLeave={e => { e.currentTarget.style.color = `${C.ink}55`; e.currentTarget.style.borderColor = C.plum; }}
            >github ↗</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", opacity: in_ ? .4 : 0, transition: "opacity 1s ease 2s", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: C.mono, fontSize: 8, letterSpacing: 3, textTransform: "uppercase", color: C.rose }}>scroll</span>
          <div style={{ width: 1, height: 32, background: `linear-gradient(${C.rose},transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}