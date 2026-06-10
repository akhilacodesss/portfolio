import { useState } from "react";

import { C } from "../styles/tokens";

import LineIn from "./ui/LineIn";
import Up from "./ui/Up";

export default function About() {
  const [eggOpen, setEggOpen] = useState(false);

  const codeSnippet = `const akhila = {
  role: "Full Stack Developer",
  stack: ["React","Node","Express","MongoDB"],
  location: "Hyderabad, India",
  status: "open_to_work",
  passion: "code that reads well 6mo later",
  contact: () => scrollTo("#contact"),
};`;

  return (
    <section id="about" style={{ background: C.paper, padding: "clamp(80px,11vh,140px) clamp(20px,5vw,72px)", position: "relative", overflow: "hidden" }}>
      {/* Rotated watermark */}
      <div style={{
        display: window.innerWidth < 768 ? "none" : "block",
        position: "absolute",
        right: -40,
        top: "50%", transform: "translateY(-50%) rotate(90deg)", fontFamily: C.serif, fontSize: "clamp(80px,14vw,180px)", fontWeight: 300, color: `${C.ghost}80`, letterSpacing: 8, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap"
      }}>
        DEVELOPER
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
            gap: "clamp(40px,7vw,120px)",
            alignItems: "center"
          }}
          className="about-grid"
        >

          {/* Left */}
          <div>
            <LineIn delay={.05}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(38px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.05, color: C.wine }}>Building where</h2></LineIn>
            <LineIn delay={.15}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(38px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.05, color: C.wine }}>logic meets</h2></LineIn>
            <LineIn delay={.25}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(38px,5.5vw,72px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.05, color: C.copper }}>craft.</h2></LineIn>

            <Up delay={.4} style={{ marginTop: 40 }}>
              <div style={{ height: 2, width: 48, background: C.rose, marginBottom: 32 }} />
              {[["Location", "Hyderabad, India"], ["Status", "Open to work"], ["Focus", "Full Stack · MERN"], ["Education", "B.Tech Computer Science"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: `1px solid ${C.ghost}` }}>
                  <span style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.mist, width: 88, flexShrink: 0 }}>{k}</span>
                  <span style={{ fontFamily: C.sans, fontSize: 13, color: C.wine }}>{v}</span>
                </div>
              ))}
            </Up>

            <Up delay={.55} style={{ marginTop: 32, display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[["GitHub", "https://github.com/akhilacodesss/"], ["LinkedIn", "https://www.linkedin.com/in/akhila-goud-278b8537b/"], ["Email", "mailto:akhila.goundla1112@gmail.com"]].map(([l, h]) => (
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" data-c style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.mist, textDecoration: "none", borderBottom: `1px solid ${C.ghost}`, paddingBottom: 2, transition: "color .25s,border-color .25s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.copper; e.currentTarget.style.borderColor = C.rose; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.mist; e.currentTarget.style.borderColor = C.ghost; }}
                >{l} ↗</a>
              ))}
            </Up>
          </div>

          {/* Right */}
          <Up delay={.2}>
            <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.95, color: C.mist, fontWeight: 300, marginBottom: 20 }}>
              I'm a Full Stack Developer specializing in the MERN stack — building applications that balance visual precision with technical reliability.
            </p>
            <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.95, color: C.mist, fontWeight: 300, marginBottom: 20 }}>
              I care about the details — the API that doesn't break under load, the interface that doesn't make users think twice, the codebase a teammate can read six months later.
            </p>
            <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.95, color: C.mist, fontWeight: 300 }}>
              Currently deepening backend architecture skills, exploring system design, and building projects that go beyond tutorials into real-world complexity.
            </p>

            {/* Code easter egg */}
            <div style={{ marginTop: 32 }}>
              <button data-c onClick={() => setEggOpen(o => !o)} style={{
                background: "none", border: `1px solid ${C.ghost}`, borderRadius: 4, padding: "8px 16px",
                fontFamily: C.mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: C.mist,
                cursor: "none", transition: "all .25s", display: "flex", alignItems: "center", gap: 8,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.copper; e.currentTarget.style.color = C.copper; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.ghost; e.currentTarget.style.color = C.mist; }}
              >
                <span style={{ color: C.copper }}>{"{}"}</span>
                <span>{eggOpen ? "hide" : "view as object"}</span>
              </button>

              <div style={{
                overflow: "hidden", maxHeight: eggOpen ? 280 : 0,
                transition: "max-height .5s cubic-bezier(.16,1,.3,1)",
              }}>
                <div style={{ marginTop: 16, background: C.deep, borderRadius: 6, padding: "20px 24px", border: `1px solid ${C.wine}`, position: "relative" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                    {["#E48C8A", "#E8C98C", "#8CBE8C"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
                  </div>
                  <pre style={{ fontFamily: C.mono, fontSize: 11, lineHeight: 1.8, color: `${C.rose}cc`, margin: 0, whiteSpace: "pre-wrap" }}>
                    {codeSnippet.split("\n").map((line, i) => (
                      <div key={i}>
                        {line.includes(":") ? (
                          <>
                            <span style={{ color: `${C.rose}66` }}>{line.split(":")[0]}:</span>
                            <span style={{ color: C.ink }}>{line.split(":").slice(1).join(":")}</span>
                          </>
                        ) : <span style={{ color: `${C.rose}aa` }}>{line}</span>}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(72px,11vw,130px)", fontWeight: 300, color: C.ghost, lineHeight: .8, letterSpacing: -4 }}>AG</span>
            </div>
          </Up>
        </div>
      </div>
    </section>
  );
}