export default function Atoms({ z }: { z: Record<string, string> }) {
  return (
    <>
      {/* ═════ 9 · silicon lattice, in depth (starts inside the channel) ═════ */}
      <div className={`zl Z9 ${z.z9}`}>
        <svg className="dcdefs" width="0" height="0" aria-hidden="true">
          <defs>
            <pattern id="atom" width="44" height="38" patternUnits="userSpaceOnUse">
              <rect width="44" height="38" fill="#141518" />
              <path d="M22 19 L0 0 M22 19 L44 0 M22 19 L0 38 M22 19 L44 38" className="bond" />
              <circle r="8" fill="#7E8288" />
              <circle cx="44" r="8" fill="#7E8288" />
              <circle cy="38" r="8" fill="#7E8288" />
              <circle cx="44" cy="38" r="8" fill="#7E8288" />
              <circle cx="22" cy="19" r="9" fill="#8E9298" />
              <circle cx="19" cy="16" r="3" fill="#CDD1D6" />
            </pattern>
            <radialGradient id="vg" cx=".5" cy=".5" r=".7">
              <stop offset=".45" style={{ stopColor: "#0B0B0C", stopOpacity: "0" }} />
              <stop offset="1" style={{ stopColor: "#0B0B0C", stopOpacity: ".95" }} />
            </radialGradient>
            <radialGradient id="atg" cx=".38" cy=".34" r=".7">
              <stop offset="0" stopColor="#EEF0F2" />
              <stop offset=".45" stopColor="#9DA1A7" />
              <stop offset="1" stopColor="#3A3D42" />
            </radialGradient>
            <pattern id="atomT" width="44" height="38" patternUnits="userSpaceOnUse">
              <path d="M22 19 L0 0 M22 19 L44 0 M22 19 L0 38 M22 19 L44 38" className="bond" />
              <circle r="8" fill="url(#atg)" />
              <circle cx="44" r="8" fill="url(#atg)" />
              <circle cy="38" r="8" fill="url(#atg)" />
              <circle cx="44" cy="38" r="8" fill="url(#atg)" />
              <circle cx="22" cy="19" r="9" fill="url(#atg)" />
            </pattern>
            <filter id="eblur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
        </svg>
        <div className="zart">
          <div className="zs">
            <div className="f zoff" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(0)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <rect width="640" height="560" fill="url(#atom)" />
                <rect width="640" height="560" fill="url(#vg)" />
              </svg>
            </div>
            <div className="f zon fade" style={{ width: "162.5cqw", height: "143.75cqw", left: "-31.25cqw", top: "-28.125cqw", transform: "translateZ(-13.125cqw)" }}>
              <svg style={{ filter: "brightness(0.3)" }} viewBox="-200 -180 1040 920" preserveAspectRatio="none">
                <rect x="-200" y="-180" width="1040" height="920" fill="url(#atomT)" transform="translate(22 19)" />
              </svg>
            </div>
            <div className="f zon fade" style={{ width: "162.5cqw", height: "143.75cqw", left: "-31.25cqw", top: "-28.125cqw", transform: "translateZ(-8.75cqw)" }}>
              <svg style={{ filter: "brightness(0.45)" }} viewBox="-200 -180 1040 920" preserveAspectRatio="none">
                <rect x="-200" y="-180" width="1040" height="920" fill="url(#atomT)" transform="translate(11 28.5)" />
              </svg>
            </div>
            <div className="f zon fade" style={{ width: "162.5cqw", height: "143.75cqw", left: "-31.25cqw", top: "-28.125cqw", transform: "translateZ(-4.375cqw)" }}>
              <svg style={{ filter: "brightness(0.65)" }} viewBox="-200 -180 1040 920" preserveAspectRatio="none">
                <rect x="-200" y="-180" width="1040" height="920" fill="url(#atomT)" transform="translate(22 9.5)" />
              </svg>
            </div>
            <div className="f zon fade" style={{ width: "162.5cqw", height: "143.75cqw", left: "-31.25cqw", top: "-28.125cqw", transform: "translateZ(0.0781cqw)" }}>
              <svg style={{ filter: "brightness(1)" }} viewBox="-200 -180 1040 920" preserveAspectRatio="none">
                <rect x="-200" y="-180" width="1040" height="920" fill="url(#atomT)" transform="translate(0 0)" />
              </svg>
            </div>
            <div className="f" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(1.5625cqw)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <g className="glow">
                  <circle cx="374" cy="247" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="374" cy="247" r="3.5" fill="#EFFFD6" />
                </g>
                <g className="glow g2">
                  <circle cx="198" cy="152" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="198" cy="152" r="3.5" fill="#EFFFD6" />
                </g>
                <g className="glow g3">
                  <circle cx="286" cy="361" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="286" cy="361" r="3.5" fill="#EFFFD6" />
                </g>
                <g className="glow g4">
                  <circle cx="462" cy="133" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="462" cy="133" r="3.5" fill="#EFFFD6" />
                </g>
                <g className="glow g5">
                  <circle cx="154" cy="323" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="154" cy="323" r="3.5" fill="#EFFFD6" />
                </g>
                <g className="glow">
                  <circle cx="506" cy="399" r="10" className="tA" filter="url(#eblur)" />
                  <circle cx="506" cy="399" r="3.5" fill="#EFFFD6" />
                </g>
              </svg>
            </div>
            <div className="f lodp" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(6.25cqw)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <g className="lod">
                  <g transform="scale(4.5714) translate(-250 -303.75)">
                    <rect x="230" y="290" width="180" height="150" fill="#1C1D20" />
                    <rect x="230" y="370" width="180" height="60" fill="#45484D" />
                    <rect x="236" y="60" width="18" height="310" fill="#4F5257" />
                    <rect x="386" y="60" width="18" height="310" fill="#4F5257" />
                    <rect x="254" y="40" width="132" height="294" fill="#34363A" stroke="#8B8F95" />
                    <rect x="254" y="334" width="132" height="6" fill="#A3A7AD" />
                    <rect x="254" y="340" width="132" height="50" fill="url(#noise)" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <svg className="zlab" viewBox="0 0 640 560">
          <g className="lbls">
            <circle cx="335" cy="302" r="13" fill="none" stroke="#F2F2EE" className="sw15" />
            <rect x="564" y="337" width="66" height="22" rx="3" className="bx" />
            <text x="574" y="352" className="tb">Si atom</text>
            <line x1="564" y1="348" x2="335" y2="302" className="ld" />
            <circle cx="335" cy="302" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="243" width="159" height="22" rx="3" className="bx" />
            <text x="20" y="258" className="tb">Si–Si bond ≈ 0.235 nm</text>
            <line x1="169" y1="254" x2="308" y2="300" className="ld" />
            <circle cx="308" cy="300" r="2.5" fill="#F2F2EE" />
            <rect x="524" y="242" width="106" height="22" rx="3" className="bxA" />
            <text x="534" y="257" className="tb tA">Free electron</text>
            <line x1="524" y1="253" x2="378" y2="253" className="ldA" />
            <circle cx="378" cy="253" r="2.5" className="tA" />
          </g>
        </svg>
      </div>
    </>
  );
}
