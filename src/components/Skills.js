import { C } from "../styles/tokens";

import { SOFT } from "../data/skills";

import useInView from "../hooks/useInView";

import LineIn from "./ui/LineIn";
import Up from "./ui/Up";

function SkillCard({ card, i }) {
  const [ref, vis] = useInView(0.2);

  return (
    <div
      ref={ref}
      style={{
        border: `1px solid ${C.ghost}`,
        borderRadius: 4,
        padding: window.innerWidth < 768 ? 18 : 24,
        background: "transparent",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateX(-16px)",
        transition: `opacity .7s ease ${i * .07}s, transform .7s cubic-bezier(.16,1,.3,1) ${i * .07}s`,
      }}
    >
      <div
        style={{
          fontFamily: C.mono,
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: C.copper,
          marginBottom: 20,
        }}
      >
        {card.title}
      </div>

      {card.items.map((item, idx) => (
        <div
          key={item.name}
          style={{
            padding: "14px 0",
            borderBottom:
              idx < card.items.length - 1
                ? `1px solid ${C.ghost}`
                : "none",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(12px)",
            transition: `all .6s cubic-bezier(.16,1,.3,1) ${idx * .08 + .15}s`,
          }}
        >
          <div
            style={{
              fontFamily: C.sans,
              fontSize: 18,
              color: C.wine,
              marginBottom: 6,
            }}
          >
            {item.name}
          </div>

          <div
            style={{
              fontFamily: C.sans,
              fontSize: 12,
              color: `${C.mist}88`,
              lineHeight: 1.7,
            }}
          >
            {item.note}
          </div>
        </div>
      ))}
    </div>
  );
}



export default function Skills() {
  return (
    <section id="skills" style={{ background: C.paper, padding: "clamp(80px,11vh,140px) clamp(20px,5vw,72px)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns:
            window.innerWidth < 768
              ? "1fr"
              : "280px 1fr", gap: "clamp(40px,6vw,100px)", alignItems: "start"
        }} className="skills-grid">
          <div>
            <LineIn><h2 style={{ fontFamily: C.serif, fontSize: "clamp(36px,4vw,54px)", fontWeight: 400, lineHeight: 1.1, color: C.wine }}>Technical</h2></LineIn>
            <LineIn delay={.1}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(36px,4vw,54px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.1, color: C.copper }}>fluency.</h2></LineIn>

            <Up delay={.3} style={{ marginTop: 36 }}>
              <div style={{ background: C.ghost, borderRadius: 4, padding: "28px 24px" }}>
                <p style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: C.copper, marginBottom: 20 }}>Soft skills</p>
                {SOFT.map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "9px 0", borderBottom: i < SOFT.length - 1 ? `1px solid ${C.ghost}` : "none" }}>
                    <span style={{ fontFamily: C.serif, fontSize: 12, color: C.dusty, fontStyle: "italic" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontFamily: C.sans, fontSize: 13, color: C.wine }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, borderLeft: `2px solid ${C.rose}`, paddingLeft: 16 }}>
                <p style={{ fontFamily: C.mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.mist, marginBottom: 12 }}>Currently Exploring</p>
                {["Backend architecture", "Data Structures & Algorithms", "Scalable API patterns"].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: C.rose, fontSize: 11 }}>→</span>
                    <span style={{ fontFamily: C.sans, fontSize: 12, color: C.mist, fontWeight: 300 }}>{s}</span>
                  </div>
                ))}
              </div>
            </Up>
          </div>

          {/* Skills cards */}
          <div
            style={{
              paddingTop: 8,
              display: "grid",
              gridTemplateColumns:
                window.innerWidth < 768
                  ? "1fr"
                  : "repeat(2, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Frontend",
                items: [
                  {
                    name: "React.js",
                    note: "Hooks · State · Component Architecture",
                  },
                  {
                    name: "Tailwind CSS",
                    note: "Utility-first · Responsive · Design Systems",
                  },
                  {
                    name: "JavaScript",
                    note: "ES6+ · Async/Await · Functional Patterns",
                  },
                ],
              },
              {
                title: "Backend",
                items: [
                  {
                    name: "Node.js",
                    note: "Server-side JS · Async Patterns · REST APIs",
                  },
                  {
                    name: "Express.js",
                    note: "Routing · Middleware · Authentication Flows",
                  },
                  {
                    name: "MongoDB",
                    note: "Schema Design · Mongoose · Aggregation",
                  },
                ],
              },
              {
                title: "Tools",
                items: [
                  {
                    name: "Git",
                    note: "Version Control · Branching · Collaboration",
                  },
                  {
                    name: "GitHub",
                    note: "Repositories · Pull Requests · Project Management",
                  },
                  {
                    name: "Figma",
                    note: "UI Design · Wireframing · Prototyping",
                  },
                ],
              },
              {
                title: "Development Focus",
                items: [
                  {
                    name: "Responsive UI",
                    note: "Clean user experiences · Mobile-first design",
                  },
                  {
                    name: "API Integration",
                    note: "Frontend ↔ Backend communication",
                  },
                  {
                    name: "Full Stack Projects",
                    note: "Building and deploying MERN applications",
                  },
                ],
              }
            ].map((card, i) => (
              <SkillCard
                key={card.title}
                card={card}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}