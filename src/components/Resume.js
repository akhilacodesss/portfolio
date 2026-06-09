import { C } from "../styles/tokens";

import LineIn from "./ui/LineIn";
import Up from "./ui/Up";

export default function Resume() {
  return (
    <section id="resume" style={{ background: C.wine, padding: "clamp(72px,10vh,120px) clamp(20px,5vw,72px)", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse at 70% 50%, ${C.plum} 0%, transparent 60%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <LineIn>
              <span style={{ fontFamily: C.serif, fontWeight: 300, fontSize: "clamp(52px,8vw,110px)", lineHeight: .88, color: `${C.ink}15`, letterSpacing: -2 }}>Resume</span>
            </LineIn>
            <LineIn delay={.12}>
              <span style={{ fontFamily: C.serif, fontWeight: 300, fontSize: "clamp(52px,8vw,110px)", lineHeight: .88, color: C.rose, fontStyle: "italic", letterSpacing: -2 }}>&amp; credentials.</span>
            </LineIn>
            <Up delay={.3} style={{ marginTop: 24 }}>
              <p style={{ fontFamily: C.sans, fontSize: 13, color: `${C.rose}88`, fontWeight: 300, lineHeight: 1.7, maxWidth: 380 }}>
                Full-stack developer with two deployed projects, a GUVI certification, and a MERN foundation built for production work.
              </p>
            </Up>
          </div>

          <Up delay={.25} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-c
              style={{ fontFamily: C.sans, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, color: C.wine, background: C.rose, padding: "14px 28px", borderRadius: 2, textDecoration: "none", transition: "background .25s,transform .25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.ink; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.rose; e.currentTarget.style.transform = "none"; }}
            >View Resume ↗</a>
            <a
              href="/resume.pdf"
              download
              data-c
              style={{ fontFamily: C.sans, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600, color: C.rose, border: `1px solid ${C.plum}`, padding: "13px 24px", borderRadius: 2, textDecoration: "none", transition: "all .25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.rose; e.currentTarget.style.color = C.wine; e.currentTarget.style.background = C.rose; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.plum; e.currentTarget.style.color = C.rose; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "none"; }}
            >↓ Download PDF</a>
          </Up>
        </div>

        {/* Dual-direction marquee */}
        <div style={{ overflow: "hidden", marginTop: 48, borderTop: `1px solid ${C.plum}`, paddingTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", animation: "ticker 22s linear infinite", width: "max-content" }}>
            {Array(6).fill("React · Node.js · Express · MongoDB · JWT · Tailwind · REST APIs · Git ·").map((t, i) => (
              <span key={i} style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: 2, color: `${C.rose}44`, whiteSpace: "nowrap", paddingRight: 48 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", animation: "tickerRev 28s linear infinite", width: "max-content" }}>
            {Array(6).fill("React · Node.js · Express · MongoDB · JWT · REST APIs · Git · Postman ·").map((t, i) => (
              <span key={i} style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: 2, color: `${C.rose}22`, whiteSpace: "nowrap", paddingRight: 48 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}