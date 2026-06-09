import { useState } from "react";

import { C } from "../styles/tokens";

import LineIn from "./ui/LineIn";
import Up from "./ui/Up";

export default function Certifications() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="certifications" style={{ background:C.paper, padding:"clamp(80px,11vh,140px) clamp(20px,5vw,72px)" }}>
      <div style={{ maxWidth:1320, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(40px,6vw,100px)", alignItems:"center" }} className="cert-grid">
          <div>
            <LineIn><h2 style={{ fontFamily:C.serif, fontSize:"clamp(36px,4.5vw,60px)", fontWeight:400, lineHeight:1.1, color:C.wine }}>Verified</h2></LineIn>
            <LineIn delay={.12}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(36px,4.5vw,60px)", fontWeight:300, fontStyle:"italic", lineHeight:1.1, color:C.copper }}>learning.</h2></LineIn>
            <Up delay={.25} style={{ marginTop:28 }}>
              <p style={{ fontFamily:C.sans, fontSize:14, lineHeight:1.8, color:C.mist, fontWeight:300, maxWidth:340, marginBottom:24 }}>
                Completed a rigorous full-stack program covering the MERN stack end-to-end — from foundations to production deployment.
              </p>
              <p style={{ fontFamily:C.sans, fontSize:13, lineHeight:1.7, color:`${C.mist}88`, fontWeight:300 }}>
                Verified credential demonstrating practical MERN stack development skills.
              </p>
              <a
  href="https://v2.zenclass.in/certificateDownload/jWOCuVdDK9RDEfKN"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display:"inline-block",
    marginTop:20,
    fontFamily:C.sans,
    fontSize:10,
    letterSpacing:2.5,
    textTransform:"uppercase",
    fontWeight:700,
    color:C.paper,
    background:C.copper,
    padding:"12px 24px",
    borderRadius:2,
    textDecoration:"none",
  }}
>
  View Certificate ↗
</a>
            </Up>
          </div>

          <Up delay={.15}>
            {/* Flip card */}
            <div data-c style={{ perspective:1000, cursor:"none", height:320 }}
              onMouseEnter={()=>setFlipped(true)}
              onMouseLeave={()=>setFlipped(false)}
            >
              <div style={{
                position:"relative", width:"100%", height:"100%",
                transformStyle:"preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition:"transform .7s cubic-bezier(.16,1,.3,1)",
              }}>
                {/* Front */}
                <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", borderRadius:10, overflow:"hidden", boxShadow:`0 20px 60px ${C.china}` }}>
                  <div style={{ background:`linear-gradient(135deg,${C.wine} 0%,${C.copper} 100%)`, height:"100%", padding:"48px", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
                    <div style={{ position:"absolute", top:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"#ffffff08" }}/>
                    <div style={{ position:"absolute", bottom:-20, left:"35%", width:90, height:90, borderRadius:"50%", background:"#ffffff06" }}/>
                    <div style={{ fontFamily:C.mono, fontSize:9, letterSpacing:3, textTransform:"uppercase", color:"#ffffff55", marginBottom:12 }}>Certificate of Completion</div>
                    <div style={{ fontFamily:C.serif, fontSize:"clamp(20px,2.5vw,28px)", fontWeight:400, color:"#fff", fontStyle:"italic", marginBottom:6 }}>Full Stack Development</div>
                    <div style={{ fontFamily:C.mono, fontSize:11, letterSpacing:2, color:`${C.rose}cc` }}>GUVI · 2026</div>
                  </div>
                </div>
                {/* Back */}
                <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", transform:"rotateY(180deg)", borderRadius:10, overflow:"hidden", boxShadow:`0 20px 60px ${C.china}` }}>
                  <div style={{ background:"#fff", height:"100%", padding:"40px 44px", display:"flex", flexDirection:"column", justifyContent:"center", gap:16 }}>
                    <div style={{ fontFamily:C.mono, fontSize:9, letterSpacing:2.5, textTransform:"uppercase", color:C.copper, marginBottom:4 }}>Key Areas Covered</div>
                    {["React.js & component design","Node.js & Express REST APIs","MongoDB schema patterns","JWT auth & role management","Full deployment cycle"].map((item,i)=>(
                      <div key={i} style={{ display:"flex", gap:10, alignItems:"center" }}>
                        <span style={{ width:4, height:4, borderRadius:"50%", background:C.copper, flexShrink:0 }}/>
                        <span style={{ fontFamily:C.sans, fontSize:13, color:C.wine }}>{item}</span>
                      </div>
                    ))}
                    <div style={{ marginTop:8 }}>
                      <span style={{ fontFamily:C.serif, fontSize:18, fontStyle:"italic", color:C.mist }}>Akhila Goundla</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Up>
        </div>
      </div>
    </section>
  );
}