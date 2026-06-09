import { useState, useEffect, useRef, useCallback } from "react";

import { C } from "../styles/tokens";
import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";


function ScreenshotMockup({ project, hov }) {
  const { isDark, screenshots, live, palette } = project;
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);


  const advance = useCallback((dir) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(i => (i + dir + screenshots.length) % screenshots.length);
      setFading(false);
    }, 220);
  }, [screenshots.length]);

  // Auto-advance every 3 s; pause on hover
 useEffect(() => {
  if (hov) {
    clearInterval(timerRef.current);
    return;
  }

  timerRef.current = setInterval(() => advance(1), 3000);

  return () => clearInterval(timerRef.current);
}, [hov, current, screenshots.length, advance]);

  const accentBorder = isDark ? C.plum : C.ghost;
  const chromeBar = isDark ? C.plum : "#E8D9D0";
  const urlColor = isDark ? `${C.rose}77` : C.mist;

  return (
    <div style={{
      borderRadius: 10,
      overflow: "hidden",
      border: `1px solid ${accentBorder}`,
      transform: hov ? "scale(1.018) translateY(-8px)" : "scale(1)",
      transition: "transform .6s cubic-bezier(.16,1,.3,1), box-shadow .6s cubic-bezier(.16,1,.3,1)",
      boxShadow: hov
        ? `0 52px 100px ${isDark ? "#00000075" : "#D8A69440"}`
        : `0 18px 52px ${isDark ? "#00000045" : "#E8D9D066"}`,
    }}>

      {/* ── Browser chrome bar ── */}
      <div style={{
        background: chromeBar,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        {/* Traffic lights */}
        {["#E48C8A", "#E8C98C", "#8CBE8C"].map(col => (
          <div key={col} style={{ width: 9, height: 9, borderRadius: "50%", background: col }} />
        ))}

        {/* URL bar */}
        <div style={{
          flex: 1,
          background: isDark ? "#ffffff14" : "#fff",
          borderRadius: 3,
          padding: "3px 10px",
          marginLeft: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}>
          <span style={{ fontFamily: C.mono, fontSize: 9, color: urlColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {live.replace("https://", "")}
          </span>
          {/* Slide label */}
          <span style={{
            fontFamily: C.mono,
            fontSize: 8,
            letterSpacing: 1,
            color: palette.accent,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            {screenshots[current].label}
          </span>
        </div>

        {/* Live badge */}
        <span style={{
          fontFamily: C.mono,
          fontSize: 8,
          color: "#8CBE8C",
          letterSpacing: 1,
          flexShrink: 0,
        }}>● LIVE</span>
      </div>

      {/* ── Screenshot viewport ── */}
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: isDark ? "#1C1112" : "#F0EAE4" }}>

        {/* Actual screenshot */}
        <img
          key={current}
          src={screenshots[current].src}
          alt={`${project.name} — ${screenshots[current].label}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            opacity: fading ? 0 : 1,
            transition: "opacity .22s ease",
          }}
        />

        {/* Gradient overlay — keeps nav arrows readable */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, transparent 60%, ${isDark ? "#1C1112" : "#F0EAE4"}20 100%)`,
          pointerEvents: "none",
        }} />

        {/* ── Prev / Next arrows — visible on hover only ── */}
        {[[-1, "←", "left"], [1, "→", "right"]].map(([dir, glyph, side]) => (
          <button
            key={side}
            data-c
            onClick={e => { e.stopPropagation(); advance(dir); }}
            style={{
              position: "absolute",
              top: "50%",
              [side]: 12,
              transform: "translateY(-50%)",
              background: isDark ? "#ffffff18" : "#00000018",
              backdropFilter: "blur(8px)",
              border: `1px solid ${isDark ? "#ffffff20" : "#00000015"}`,
              borderRadius: 4,
              color: isDark ? C.ink : C.wine,
              fontFamily: C.mono,
              fontSize: 13,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "none",
              opacity: hov ? 1 : 0,
              transition: "opacity .3s ease",
              lineHeight: 1,
              padding: 0,
            }}
          >{glyph}</button>
        ))}

        {/* ── Dot indicators ── */}
        <div style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
          alignItems: "center",
        }}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              data-c
              onClick={e => { e.stopPropagation(); setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 220); }}
              style={{
                width: i === current ? 18 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                background: i === current ? palette.accent : (isDark ? "#ffffff40" : "#00000030"),
                padding: 0,
                cursor: "none",
                transition: "width .35s cubic-bezier(.16,1,.3,1), background .25s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SINGLE PROJECT BLOCK
───────────────────────────────────────────────────────── */
function ProjectBlock({ p, flipped }) {
  const [hov, setHov] = useState(false);
  const [ref, vis] = useInView(.05);
  const txt = p.isDark ? C.ink : C.wine;
  const sub = p.isDark ? `${C.rose}99` : C.mist;

  return (
    <article
      ref={ref}
      style={{
        background: p.palette.bg,
        position: "relative",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(48px)",
        transition: "opacity 1s ease, transform 1s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Dark variant ambient glow */}
      {p.isDark && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(ellipse at 60% 40%, ${C.plum}80 0%, transparent 55%)`,
          pointerEvents: "none",
        }} />
      )}

      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "clamp(64px,9vh,110px) clamp(20px,5vw,72px)",
        position: "relative",
      }}>

        {/* ── Huge watermark number ── */}
        <div style={{
          position: "absolute",
          right: flipped ? "auto" : "clamp(16px,3vw,48px)",
          left: flipped ? "clamp(16px,3vw,48px)" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: C.serif,
          fontSize: "clamp(160px,24vw,320px)",
          fontWeight: 300,
          lineHeight: 1,
          color: p.isDark ? `${C.plum}40` : `${C.ghost}60`,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: -8,
        }}>
          {p.slug === "brickly" ? "01" : "02"}
        </div>

        {/* ── Top meta row ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            {p.featured && (
              <span style={{
                fontFamily: C.mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase",
                color: p.palette.accent, border: `1px solid ${p.palette.accent}40`,
                padding: "3px 12px", borderRadius: 100,
              }}>Featured</span>
            )}
            <span style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: sub }}>
              {p.category} · {p.year}
            </span>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {[
              [`${p.live.replace("https://", "")} ↗`, p.live, true],
              ["FE →", p.fe, false],
              ["BE →", p.be, false],
            ].map(([l, h, primary]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" data-c
                style={{
                  fontFamily: C.mono, fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                  color: primary ? p.palette.accent : sub,
                  textDecoration: "none",
                  borderBottom: `1px solid ${primary ? p.palette.accent + "40" : C.plum}`,
                  paddingBottom: 2,
                  transition: "all .25s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = p.palette.accent; e.currentTarget.style.borderColor = p.palette.accent; }}
                onMouseLeave={e => { e.currentTarget.style.color = primary ? p.palette.accent : sub; e.currentTarget.style.borderColor = primary ? p.palette.accent + "40" : C.plum; }}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* ── Project title ── */}
        <div style={{ overflow: "hidden", marginBottom: 48 }}>
          <h3 style={{
            fontFamily: C.serif,
            fontSize: "clamp(56px,10vw,144px)",
            fontWeight: 300,
            lineHeight: .88,
            letterSpacing: "-2px",
            color: txt,
            fontStyle: hov ? "italic" : "normal",
            transform: hov ? "translateX(12px)" : "none",
            transition: "transform .6s cubic-bezier(.16,1,.3,1), font-style .3s",
          }}>{p.name}</h3>
        </div>

        {/* ── Screenshot + details grid ── */}
        <div
          className="project-grid"
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            display: "grid",
            gridTemplateColumns: flipped ? "1fr 1.5fr" : "1.5fr 1fr",
            gap: "clamp(32px,5vw,80px)",
            alignItems: "start",
          }}
        >
          {/* Mockup */}
          <div style={{ order: flipped ? 2 : 1 }}>
            <ScreenshotMockup project={p} hov={hov} />
          </div>

          {/* Text details */}
          <div style={{ order: flipped ? 1 : 2 }}>
            <p style={{
              fontFamily: C.serif, fontSize: 19, fontStyle: "italic",
              color: p.palette.accent, marginBottom: 20, lineHeight: 1.4,
            }}>{p.tagline}</p>

            <p style={{
              fontFamily: C.sans, fontSize: 14, lineHeight: 1.9,
              color: sub, fontWeight: 300, marginBottom: 24,
            }}>{p.desc}</p>

            {/* What was hard */}
            <div style={{
              background: p.isDark ? "#ffffff06" : C.ghost,
              borderLeft: `2px solid ${p.palette.accent}`,
              padding: "16px 20px",
              borderRadius: "0 4px 4px 0",
              marginBottom: 24,
            }}>
              <p style={{
                fontFamily: C.mono, fontSize: 9, letterSpacing: 2.5,
                textTransform: "uppercase", color: p.palette.accent, marginBottom: 8,
              }}>What was hard</p>
              <p style={{
                fontFamily: C.sans, fontSize: 13, lineHeight: 1.8,
                color: sub, fontWeight: 300,
              }}>{p.challenge}</p>
            </div>

            {/* Features */}
            <div style={{ marginBottom: 20 }}>
              <p style={{
                fontFamily: C.mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                color: `${sub}88`, marginBottom: 10,
              }}>Features</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.features.map(f => (
                  <span key={f} style={{
                    fontFamily: C.sans, fontSize: 11, color: sub,
                    padding: "4px 10px",
                    border: `1px solid ${p.isDark ? C.plum : C.ghost}`,
                    borderRadius: 2,
                  }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Stack pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {p.stack.map(t => (
                <span key={t} style={{
                  fontFamily: C.mono, fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                  color: p.palette.accent, padding: "4px 10px",
                  border: `1px solid ${p.palette.accent}30`,
                  borderRadius: 100,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION EXPORT
───────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects">
      {PROJECTS.map((p, i) => (
        <ProjectBlock key={p.slug} p={p} flipped={i % 2 === 1} />
      ))}
    </section>
  );
}