import { C } from "../styles/tokens";

export default function Footer() {
  return (
    <footer style={{ background:C.deep, padding:"clamp(28px,4vh,44px) clamp(20px,5vw,72px)", borderTop:`1px solid ${C.wine}` }}>
      <div style={{ maxWidth:1320, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <span style={{ fontFamily:C.serif, fontSize:18, color:`${C.rose}88`, fontStyle:"italic", letterSpacing:1 }}>Akhila Goundla</span>
          <span style={{ fontFamily:C.mono, fontSize:9, letterSpacing:2.5, textTransform:"uppercase", color:`${C.rose}33` }}>Full Stack Developer · MERN · Hyderabad · 2026</span>
          <div style={{ display:"flex", gap:24 }}>
            {[["GH","https://github.com/akhilacodesss/"],["LI","https://www.linkedin.com/in/akhila-goud-278b8537b/"],["EM","mailto:akhila.goundla1112@gmail.com"]].map(([l,h])=>(
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" data-c style={{ fontFamily:C.mono, fontSize:9, letterSpacing:3, color:`${C.rose}33`, textDecoration:"none", transition:"color .25s" }}
                onMouseEnter={e=>e.currentTarget.style.color=C.rose}
                onMouseLeave={e=>e.currentTarget.style.color=`${C.rose}33`}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}