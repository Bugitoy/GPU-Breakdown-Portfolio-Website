export default function Package({ z }: { z: Record<string, string> }) {
  return (
    <>
      {/* ═════ 4 · package, as a 3D cutaway (starts inside the PCB's shim) ═════ */}
      <div className={`zl Z4 ${z.z4}`}>
        <svg className="dcdefs" width="0" height="0" aria-hidden="true">
          <defs>
            <pattern id="dtx" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="#16212A" />
              <rect x="1" y="1" width="10" height="10" fill="#22343F" />
              <rect x="13" y="1" width="10" height="10" fill="#1E2B3A" />
              <rect x="1" y="13" width="22" height="10" fill="#263240" />
            </pattern>
            <pattern id="cps" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect x="3" y="4" width="6" height="3" rx=".6" fill="#B9935A" />
            </pattern>
            <pattern id="ub" width="8" height="6" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="3" r="2.4" fill="#C9CCD1" />
            </pattern>
            <pattern id="bga" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="7" cy="7" r="5.5" fill="#B9BDC2" />
            </pattern>
            <linearGradient id="dsh" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" style={{ stopColor: "#7FC6D6", stopOpacity: ".22" }} />
              <stop offset=".5" style={{ stopColor: "#7FC6D6", stopOpacity: "0" }} />
              <stop offset="1" style={{ stopColor: "#B48CE0", stopOpacity: ".16" }} />
            </linearGradient>
          </defs>
        </svg>
        <div className="zart">
          <div className="zs">
            <div className="f pkT zon" style={{ width: "68.75cqw", height: "68.75cqw", left: "-1.5625cqw", top: "-3.125cqw", transform: "translateZ(0)" }} />
            <div className="f pkS zon" style={{ width: "68.75cqw", height: "2.5cqw", left: "-1.5625cqw", top: "64.375cqw", transform: "translateZ(-1.25cqw) rotateX(-90deg)" }} />
            <div className="f pkE zon" style={{ width: "2.5cqw", height: "68.75cqw", left: "65.9375cqw", top: "-3.125cqw", transform: "translateZ(-1.25cqw) rotateY(90deg)" }} />
            <div className="f bgaS" style={{ width: "45.625cqw", height: "1.0938cqw", left: "10cqw", top: "54.1406cqw", transform: "translateZ(0.5469cqw) rotateX(-90deg)" }} />
            <div className="f bgaE" style={{ width: "1.0938cqw", height: "45.625cqw", left: "55.0781cqw", top: "8.4375cqw", transform: "translateZ(0.5469cqw) rotateY(90deg)" }} />
            <div className="f" style={{ width: "46.875cqw", height: "46.875cqw", left: "9.375cqw", top: "7.8125cqw", transform: "translateZ(2.9688cqw)" }}>
              <svg viewBox="60 50 300 300" preserveAspectRatio="none">
                <rect x="60" y="50" width="300" height="300" rx="6" fill="#22302A" stroke="#3B4B42" />
                <rect x="72" y="62" width="276" height="276" fill="url(#cps)" />
              </svg>
            </div>
            <div className="f sbS" style={{ width: "46.875cqw", height: "1.875cqw", left: "9.375cqw", top: "53.75cqw", transform: "translateZ(2.0312cqw) rotateX(-90deg)" }} />
            <div className="f sbE" style={{ width: "1.875cqw", height: "46.875cqw", left: "55.3125cqw", top: "7.8125cqw", transform: "translateZ(2.0312cqw) rotateY(90deg)" }} />
            <div className="f" style={{ width: "30.625cqw", height: "30.625cqw", left: "17.5cqw", top: "15.9375cqw", transform: "translateZ(3.125cqw)" }}>
              <svg viewBox="112 102 196 196" preserveAspectRatio="none">
                <rect x="112" y="102" width="196" height="196" fill="#1D4F52" />
                <rect x="114" y="104" width="192" height="192" fill="url(#cps)" opacity=".5" />
              </svg>
            </div>
            <div className="f stT" style={{ width: "35.625cqw", height: "2.5cqw", left: "15cqw", top: "13.4375cqw", transform: "translateZ(4.8438cqw)" }} />
            <div className="f stS" style={{ width: "35.625cqw", height: "1.875cqw", left: "15cqw", top: "15cqw", transform: "translateZ(3.9062cqw) rotateX(-90deg)" }} />
            <div className="f stE" style={{ width: "1.875cqw", height: "2.5cqw", left: "49.6875cqw", top: "13.4375cqw", transform: "translateZ(3.9062cqw) rotateY(90deg)" }} />
            <div className="f stT" style={{ width: "35.625cqw", height: "2.5cqw", left: "15cqw", top: "46.5625cqw", transform: "translateZ(4.8438cqw)" }} />
            <div className="f stS" style={{ width: "35.625cqw", height: "1.875cqw", left: "15cqw", top: "48.125cqw", transform: "translateZ(3.9062cqw) rotateX(-90deg)" }} />
            <div className="f stE" style={{ width: "1.875cqw", height: "2.5cqw", left: "49.6875cqw", top: "46.5625cqw", transform: "translateZ(3.9062cqw) rotateY(90deg)" }} />
            <div className="f stT" style={{ width: "2.5cqw", height: "30.625cqw", left: "15cqw", top: "15.9375cqw", transform: "translateZ(4.8438cqw)" }} />
            <div className="f stS" style={{ width: "2.5cqw", height: "1.875cqw", left: "15cqw", top: "45.625cqw", transform: "translateZ(3.9062cqw) rotateX(-90deg)" }} />
            <div className="f stE" style={{ width: "1.875cqw", height: "30.625cqw", left: "16.5625cqw", top: "15.9375cqw", transform: "translateZ(3.9062cqw) rotateY(90deg)" }} />
            <div className="f stT" style={{ width: "2.5cqw", height: "30.625cqw", left: "48.125cqw", top: "15.9375cqw", transform: "translateZ(4.8438cqw)" }} />
            <div className="f stS" style={{ width: "2.5cqw", height: "1.875cqw", left: "48.125cqw", top: "45.625cqw", transform: "translateZ(3.9062cqw) rotateX(-90deg)" }} />
            <div className="f stE" style={{ width: "1.875cqw", height: "30.625cqw", left: "49.6875cqw", top: "15.9375cqw", transform: "translateZ(3.9062cqw) rotateY(90deg)" }} />
            <div className="f mbS" style={{ width: "28.125cqw", height: "0.4688cqw", left: "18.75cqw", top: "42.1875cqw", transform: "translateZ(3.3594cqw) rotateX(-90deg)" }} />
            <div className="f mbE" style={{ width: "0.4688cqw", height: "22.3438cqw", left: "46.6406cqw", top: "20.0781cqw", transform: "translateZ(3.3594cqw) rotateY(90deg)" }} />
            <div className="f" style={{ width: "28.125cqw", height: "22.3438cqw", left: "18.75cqw", top: "20.0781cqw", transform: "translateZ(5.1562cqw)" }}>
              <svg viewBox="119 127.5 182 145" preserveAspectRatio="none">
                <rect x="120" y="128.5" width="180" height="143" rx="2" fill="url(#dtx)" stroke="#4E8C9C" className="sw2" />
                <rect x="120" y="128.5" width="180" height="143" rx="2" fill="url(#dsh)" />
                <path d="M120 200 H300 M210 128.5 V271.5" stroke="#2E4552" className="sw2" fill="none" />
              </svg>
            </div>
            <div className="f dieS" style={{ width: "28.125cqw", height: "1.5625cqw", left: "18.75cqw", top: "41.6406cqw", transform: "translateZ(4.375cqw) rotateX(-90deg)" }} />
            <div className="f dieE" style={{ width: "1.5625cqw", height: "22.3438cqw", left: "46.0938cqw", top: "20.0781cqw", transform: "translateZ(4.375cqw) rotateY(90deg)" }} />
            <div className="f tg" style={{ width: "30cqw", height: "24.2188cqw", left: "17.8125cqw", top: "19.1406cqw", transform: "translateZ(5.3125cqw)" }}>
              <svg viewBox="114 122.5 192 155" preserveAspectRatio="none">
                <rect x="114" y="122.5" width="192" height="155" rx="4" className="tgt" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="zlab" viewBox="0 0 640 560">
          <g className="lbls">
            <rect x="504" y="207" width="126" height="22" rx="3" className="bxA" />
            <text x="514" y="222" className="tb tA">GPU die · next ↓</text>
            <line x1="504" y1="218" x2="317" y2="218" className="ldA" />
            <circle cx="317" cy="218" r="2.5" className="tA" />
            <rect x="419" y="234" width="211" height="22" rx="3" className="bx" />
            <text x="429" y="249" className="tb">≈ 750 mm² · 92.2B transistors</text>
            <rect x="551" y="261" width="79" height="22" rx="3" className="bx" />
            <text x="561" y="276" className="tb">Stiffener</text>
            <line x1="551" y1="272" x2="373" y2="260" className="ld" />
            <circle cx="373" cy="260" r="2.5" fill="#F2F2EE" />
            <rect x="511" y="307" width="119" height="22" rx="3" className="bx" />
            <text x="521" y="322" className="tb">Decoupling caps</text>
            <line x1="511" y1="318" x2="438" y2="318" className="ld" />
            <circle cx="438" cy="318" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="315" width="93" height="22" rx="3" className="bx" />
            <text x="20" y="330" className="tb">Silicon die</text>
            <line x1="103" y1="326" x2="269" y2="326" className="ld" />
            <circle cx="269" cy="326" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="342" width="93" height="22" rx="3" className="bx" />
            <text x="20" y="357" className="tb">Micro-bumps</text>
            <line x1="103" y1="353" x2="251" y2="336" className="ld" />
            <circle cx="251" cy="336" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="394" width="79" height="22" rx="3" className="bx" />
            <text x="20" y="409" className="tb">Substrate</text>
            <line x1="89" y1="405" x2="246" y2="405" className="ld" />
            <circle cx="246" cy="405" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="421" width="79" height="22" rx="3" className="bx" />
            <text x="20" y="436" className="tb">BGA balls</text>
            <line x1="89" y1="432" x2="228" y2="418" className="ld" />
            <circle cx="228" cy="418" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="478" width="93" height="22" rx="3" className="bx" />
            <text x="20" y="493" className="tb">Board (PCB)</text>
            <line x1="103" y1="489" x2="219" y2="489" className="ld" />
            <circle cx="219" cy="489" r="2.5" fill="#F2F2EE" />
          </g>
        </svg>
      </div>
    </>
  );
}
