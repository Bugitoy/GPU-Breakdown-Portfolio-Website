export default function Transistor({ z }: { z: Record<string, string> }) {
  return (
    <>
      {/* ═════ 8 · FinFET, as a 3D cutaway (starts inside the full-adder tile) ═════ */}
      <div className={`zl Z8 ${z.z8}`}>
        <svg className="dcdefs" width="0" height="0" aria-hidden="true">
          <defs>
            <pattern id="noise" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#6A6D72" />
              <rect width="2" height="2" fill="#8C9096" />
              <rect x="3" y="3" width="2" height="2" fill="#4E5156" />
              <rect x="4" y="1" width="1" height="1" fill="#A3A7AD" />
            </pattern>
          </defs>
        </svg>
        <div className="zart">
          <svg className="zbg" viewBox="0 0 640 560" aria-hidden="true">
            <defs>
              <radialGradient id="zbgg" cx=".5" cy=".5" r=".62">
                <stop offset=".48" stopColor="#1C1D20" />
                <stop offset="1" stopColor="#1C1D20" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="640" height="560" fill="url(#zbgg)" />
          </svg>
          <div className="zs">
            <div className="f" style={{ width: "100cqw", height: "20.3125cqw", left: "0", top: "67.1875cqw", transform: "translateZ(0)" }}>
              <svg viewBox="0 430 640 130" preserveAspectRatio="none">
                <rect y="430" width="640" height="130" fill="#2A2B2F" />
              </svg>
            </div>
            <div className="f" style={{ width: "23.4375cqw", height: "20.3125cqw", left: "88.2812cqw", top: "67.1875cqw", transform: "translateZ(-11.7188cqw) rotateY(90deg)", background: "linear-gradient(90deg,#26292E,#141518)", borderTop: "1px solid #3E424B" }} />
            <div className="f" style={{ width: "23.4375cqw", height: "20.3125cqw", left: "-11.7188cqw", top: "67.1875cqw", transform: "translateZ(-11.7188cqw) rotateY(90deg)", background: "linear-gradient(90deg,#26292E,#141518)", borderTop: "1px solid #3E424B" }} />
            <div className="f" style={{ width: "100cqw", height: "9.375cqw", left: "0", top: "57.8125cqw", transform: "translateZ(0)" }}>
              <svg viewBox="0 370 640 60" preserveAspectRatio="none">
                <rect y="370" width="640" height="60" fill="#45484D" />
              </svg>
            </div>
            <div className="f" style={{ width: "100cqw", height: "23.4375cqw", left: "0", top: "46.0938cqw", transform: "translateZ(-11.7188cqw) rotateX(90deg)", background: "linear-gradient(#6B7B8B,#4E5965)", border: "1px solid #7E90A3" }} />
            <div className="f" style={{ width: "23.4375cqw", height: "9.375cqw", left: "88.2812cqw", top: "57.8125cqw", transform: "translateZ(-11.7188cqw) rotateY(90deg)", background: "linear-gradient(90deg,#3B444D,#1F2428)", borderTop: "1px solid #606E7D" }} />
            <div className="f" style={{ width: "23.4375cqw", height: "9.375cqw", left: "-11.7188cqw", top: "57.8125cqw", transform: "translateZ(-11.7188cqw) rotateY(90deg)", background: "linear-gradient(90deg,#3B444D,#1F2428)", borderTop: "1px solid #606E7D" }} />
            <div className="f" style={{ width: "31.25cqw", height: "18.75cqw", left: "4.6875cqw", top: "39.0625cqw", transform: "translateZ(0)" }}>
              <svg viewBox="29 249 202 122" preserveAspectRatio="none">
                <rect x="30" y="250" width="200" height="120" fill="#5B5E64" stroke="#7A7E84" />
              </svg>
            </div>
            <div className="f" style={{ width: "31.25cqw", height: "6.25cqw", left: "4.6875cqw", top: "35.9375cqw", transform: "translateZ(-3.125cqw) rotateX(90deg)", background: "linear-gradient(#8597AE,#616D7E)", border: "1px solid #9CB1CC" }} />
            <div className="f" style={{ width: "6.25cqw", height: "18.75cqw", left: "32.8125cqw", top: "39.0625cqw", transform: "translateZ(-3.125cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4A5360,#272C32)", borderTop: "1px solid #78879C" }} />
            <div className="f" style={{ width: "6.25cqw", height: "18.75cqw", left: "1.5625cqw", top: "39.0625cqw", transform: "translateZ(-3.125cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4A5360,#272C32)", borderTop: "1px solid #78879C" }} />
            <div className="f" style={{ width: "31.25cqw", height: "18.75cqw", left: "64.0625cqw", top: "39.0625cqw", transform: "translateZ(0)" }}>
              <svg viewBox="409 249 202 122" preserveAspectRatio="none">
                <rect x="410" y="250" width="200" height="120" fill="#5B5E64" stroke="#7A7E84" />
              </svg>
            </div>
            <div className="f" style={{ width: "31.25cqw", height: "6.25cqw", left: "64.0625cqw", top: "35.9375cqw", transform: "translateZ(-3.125cqw) rotateX(90deg)", background: "linear-gradient(#8597AE,#616D7E)", border: "1px solid #9CB1CC" }} />
            <div className="f" style={{ width: "6.25cqw", height: "18.75cqw", left: "92.1875cqw", top: "39.0625cqw", transform: "translateZ(-3.125cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4A5360,#272C32)", borderTop: "1px solid #78879C" }} />
            <div className="f" style={{ width: "6.25cqw", height: "18.75cqw", left: "60.9375cqw", top: "39.0625cqw", transform: "translateZ(-3.125cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4A5360,#272C32)", borderTop: "1px solid #78879C" }} />
            <div className="f" style={{ width: "2.8125cqw", height: "48.4375cqw", left: "36.875cqw", top: "9.375cqw", transform: "translateZ(0)" }}>
              <svg viewBox="236 60 18 310" preserveAspectRatio="none">
                <rect x="236" y="60" width="18" height="310" fill="#4F5257" />
              </svg>
            </div>
            <div className="f" style={{ width: "2.8125cqw", height: "13.125cqw", left: "36.875cqw", top: "2.8125cqw", transform: "translateZ(-6.5625cqw) rotateX(90deg)", background: "linear-gradient(#888097,#635C6D)", border: "1px solid #A096B1" }} />
            <div className="f" style={{ width: "13.125cqw", height: "48.4375cqw", left: "33.125cqw", top: "9.375cqw", transform: "translateZ(-6.5625cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4B4653,#27252C)", borderTop: "1px solid #7A7287" }} />
            <div className="f" style={{ width: "13.125cqw", height: "48.4375cqw", left: "30.3125cqw", top: "9.375cqw", transform: "translateZ(-6.5625cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4B4653,#27252C)", borderTop: "1px solid #7A7287" }} />
            <div className="f" style={{ width: "2.8125cqw", height: "48.4375cqw", left: "60.3125cqw", top: "9.375cqw", transform: "translateZ(0)" }}>
              <svg viewBox="386 60 18 310" preserveAspectRatio="none">
                <rect x="386" y="60" width="18" height="310" fill="#4F5257" />
              </svg>
            </div>
            <div className="f" style={{ width: "2.8125cqw", height: "13.125cqw", left: "60.3125cqw", top: "2.8125cqw", transform: "translateZ(-6.5625cqw) rotateX(90deg)", background: "linear-gradient(#888097,#635C6D)", border: "1px solid #A096B1" }} />
            <div className="f" style={{ width: "13.125cqw", height: "48.4375cqw", left: "56.5625cqw", top: "9.375cqw", transform: "translateZ(-6.5625cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4B4653,#27252C)", borderTop: "1px solid #7A7287" }} />
            <div className="f" style={{ width: "13.125cqw", height: "48.4375cqw", left: "53.75cqw", top: "9.375cqw", transform: "translateZ(-6.5625cqw) rotateY(90deg)", background: "linear-gradient(90deg,#4B4653,#27252C)", borderTop: "1px solid #7A7287" }} />
            <div className="f" style={{ width: "20.625cqw", height: "4.6875cqw", left: "39.6875cqw", top: "53.125cqw", transform: "translateZ(-2.5cqw)", background: "#2E3034" }} />
            <div className="f" style={{ width: "10.625cqw", height: "4.6875cqw", left: "55cqw", top: "53.125cqw", transform: "translateZ(-7.8125cqw) rotateY(90deg)", background: "linear-gradient(90deg,#323843,#1A1D23)", borderTop: "1px solid #515B6D" }} />
            <div className="f" style={{ width: "20.625cqw", height: "7.8125cqw", left: "39.6875cqw", top: "53.125cqw", transform: "translateZ(0.0781cqw)" }}>
              <svg viewBox="254 340 132 50" preserveAspectRatio="none">
                <rect x="254" y="340" width="132" height="50" fill="url(#noise)" />
              </svg>
            </div>
            <div className="f" style={{ width: "2.5781cqw", height: "7.8125cqw", left: "59.0234cqw", top: "53.125cqw", transform: "translateZ(-1.2109cqw) rotateY(90deg)", background: "linear-gradient(90deg,#62656B,#333538)", borderTop: "1px solid #9FA4AE" }} />
            <div className="f" style={{ width: "20.625cqw", height: "46.875cqw", left: "39.6875cqw", top: "6.25cqw", transform: "translateZ(0)" }}>
              <svg viewBox="253 39 134 302" preserveAspectRatio="none">
                <rect x="254" y="40" width="132" height="294" fill="#34363A" stroke="#8B8F95" />
                <rect x="254" y="334" width="132" height="6" fill="#A3A7AD" />
              </svg>
            </div>
            <div className="f" style={{ width: "20.625cqw", height: "13.125cqw", left: "39.6875cqw", top: "-0.3125cqw", transform: "translateZ(-6.5625cqw) rotateX(90deg)", background: "linear-gradient(#606B82,#454E5E)", border: "1px solid #707E99" }} />
            <div className="f" style={{ width: "13.125cqw", height: "46.875cqw", left: "53.75cqw", top: "6.25cqw", transform: "translateZ(-6.5625cqw) rotateY(90deg)", background: "linear-gradient(90deg,#353B48,#1C1F26)", borderTop: "1px solid #566075" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "18.75cqw", left: "17.1875cqw", top: "20.3125cqw", transform: "translateZ(-1.5625cqw)", background: "linear-gradient(90deg,#8A8E95,#D2D5DA 45%,#7A7E85)" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "3.4375cqw", left: "17.1875cqw", top: "18.5938cqw", transform: "translateZ(-3.2812cqw) rotateX(90deg)", background: "linear-gradient(#DFE5EF,#A2A6AD)", border: "1px solid #FFFFFF" }} />
            <div className="f zon" style={{ width: "3.4375cqw", height: "18.75cqw", left: "21.7188cqw", top: "20.3125cqw", transform: "translateZ(-3.2812cqw) rotateY(90deg)", background: "linear-gradient(90deg,#7B7E84,#414245)", borderTop: "1px solid #C8CDD6" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "18.75cqw", left: "76.5625cqw", top: "20.3125cqw", transform: "translateZ(-1.5625cqw)", background: "linear-gradient(90deg,#8A8E95,#D2D5DA 45%,#7A7E85)" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "3.4375cqw", left: "76.5625cqw", top: "18.5938cqw", transform: "translateZ(-3.2812cqw) rotateX(90deg)", background: "linear-gradient(#DFE5EF,#A2A6AD)", border: "1px solid #FFFFFF" }} />
            <div className="f zon" style={{ width: "3.4375cqw", height: "18.75cqw", left: "81.0938cqw", top: "20.3125cqw", transform: "translateZ(-3.2812cqw) rotateY(90deg)", background: "linear-gradient(90deg,#7B7E84,#414245)", borderTop: "1px solid #C8CDD6" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "6.25cqw", left: "46.875cqw", top: "0", transform: "translateZ(-4.0625cqw)", background: "linear-gradient(90deg,#8A8E95,#D2D5DA 45%,#7A7E85)" }} />
            <div className="f zon" style={{ width: "6.25cqw", height: "5.3125cqw", left: "46.875cqw", top: "-2.6562cqw", transform: "translateZ(-6.7188cqw) rotateX(90deg)", background: "linear-gradient(#DFE5EF,#A2A6AD)", border: "1px solid #FFFFFF" }} />
            <div className="f zon" style={{ width: "5.3125cqw", height: "6.25cqw", left: "50.4688cqw", top: "0", transform: "translateZ(-6.7188cqw) rotateY(90deg)", background: "linear-gradient(90deg,#7B7E84,#414245)", borderTop: "1px solid #C8CDD6" }} />
            <div className="f" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(0.1562cqw)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <circle cx="60" cy="362" r="4" className="tA e" />
                <circle cx="60" cy="362" r="4" className="tA e e2" />
                <circle cx="60" cy="362" r="4" className="tA e e3" />
                <circle cx="60" cy="362" r="4" className="tA e e4" />
                <circle cx="60" cy="362" r="4" className="tA e e5" />
                <circle cx="60" cy="362" r="4" className="tA e e6" />
              </svg>
            </div>
            <div className="f lodp" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(6.25cqw)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <g className="lod">
                  <g transform="scale(3.8095) translate(-216 -190.5)">
                    <rect x="210" y="186" width="180" height="156" fill="url(#cell)" />
                    <rect x="210" y="240" width="180" height="48" fill="url(#cell2)" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="f tg" style={{ width: "21.875cqw", height: "9.0625cqw", left: "39.0625cqw", top: "52.5cqw", transform: "translateZ(0.3125cqw)" }}>
              <svg viewBox="250 336 140 58" preserveAspectRatio="none">
                <rect x="250" y="336" width="140" height="58" rx="0" className="tgt" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="zlab" viewBox="0 0 640 560">
          <g className="lbls">
            <rect x="10" y="158" width="99" height="22" rx="3" className="bx" />
            <text x="20" y="173" className="tb">Contact plug</text>
            <line x1="109" y1="169" x2="208" y2="199" className="ld" />
            <circle cx="208" cy="199" r="2.5" fill="#F2F2EE" />
            <rect x="544" y="179" width="86" height="22" rx="3" className="bx" />
            <text x="554" y="194" className="tb">Gate metal</text>
            <line x1="544" y1="190" x2="330" y2="190" className="ld" />
            <circle cx="330" cy="190" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="262" width="60" height="22" rx="3" className="bx" />
            <text x="20" y="277" className="tb">Source</text>
            <line x1="70" y1="273" x2="184" y2="273" className="ld" />
            <circle cx="184" cy="273" r="2.5" fill="#F2F2EE" />
            <rect x="577" y="349" width="53" height="22" rx="3" className="bx" />
            <text x="587" y="364" className="tb">Drain</text>
            <line x1="577" y1="360" x2="500" y2="360" className="ld" />
            <circle cx="500" cy="360" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="322" width="40" height="22" rx="3" className="bx" />
            <text x="20" y="337" className="tb">Fin</text>
            <line x1="50" y1="333" x2="292" y2="333" className="ld" />
            <circle cx="292" cy="333" r="2.5" fill="#F2F2EE" />
            <rect x="504" y="376" width="126" height="22" rx="3" className="bxA" />
            <text x="514" y="391" className="tb tA">Channel · next ↓</text>
            <line x1="504" y1="387" x2="376" y2="377" className="ldA" />
            <circle cx="376" cy="377" r="2.5" className="tA" />
          </g>
        </svg>
      </div>
    </>
  );
}
