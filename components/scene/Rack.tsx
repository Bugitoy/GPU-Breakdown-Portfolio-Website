export default function Rack() {
  return (
    <>
      {/* ═════ 0 · datacenter: a real 3D rack; the server drawer slides out on its rails ═════ */}
      <div className="dc3d">
        <svg className="dcdefs" width="0" height="0" aria-hidden="true">
          <defs>
            <pattern id="dcv" width="5" height="4" patternUnits="userSpaceOnUse">
              <rect width="3" height="2" fill="#2A2B2F" />
            </pattern>
            <pattern id="dchl" width="7" height="9" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="3" height="4" fill="#050506" />
            </pattern>
            <g id="dcu">
              <rect width="200" height="30" rx="2" fill="#141517" stroke="#2A2B2F" />
              <rect x="8" y="7" width="118" height="16" fill="url(#dcv)" />
              <circle cx="146" cy="15" r="2" fill="#7CD957" />
              <circle cx="156" cy="15" r="2" fill="#7CD957" className="blink" />
              <circle cx="166" cy="15" r="2" fill="#4C86FF" />
              <rect x="180" y="8" width="12" height="14" rx="1" fill="#1D1E21" />
              <rect x="0" y="0" width="200" height="2" fill="#24252A" />
            </g>
            <g id="dcrf">
              <rect width="220" height="470" fill="#0E0F10" />
              <rect width="220" height="14" fill="#18191B" />
              <rect x="1" y="14" width="8" height="456" fill="#141518" />
              <rect x="211" y="14" width="8" height="456" fill="#141518" />
              <rect x="2" y="16" width="7" height="452" fill="url(#dchl)" />
              <rect x="211" y="16" width="7" height="452" fill="url(#dchl)" />
              <use href="#dcu" x="10" y="22" />
              <use href="#dcu" x="10" y="59" />
              <use href="#dcu" x="10" y="96" />
              <use href="#dcu" x="10" y="133" />
              <use href="#dcu" x="10" y="170" />
              <use href="#dcu" x="10" y="207" />
              <use href="#dcu" x="10" y="244" />
              <use href="#dcu" x="10" y="281" />
              <use href="#dcu" x="10" y="318" />
              <use href="#dcu" x="10" y="355" />
              <use href="#dcu" x="10" y="392" />
              <use href="#dcu" x="10" y="429" />
              <rect x="1" y="1" width="218" height="468" fill="none" stroke="#2C2D31" strokeWidth="2" />
            </g>
            <g id="gbl">
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(0)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(51.4286)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(102.8571)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(154.2857)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(205.7143)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(257.1429)" />
              <path d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" fill="#3E4146" transform="rotate(308.5714)" />
            </g>
            <g id="gfan">
              <circle r="108" fill="#141517" stroke="#4A4C51" strokeWidth="3" />
              <use href="#gbl" transform="scale(.92)" />
              <circle r="34" fill="#2C2E32" stroke="#5E5A55" strokeWidth="3" />
            </g>
            <g id="gtop">
              <rect x="46" y="6" width="488" height="244" rx="3" fill="#0F1412" stroke="#26332B" strokeWidth="3" />
              <rect x="22" y="8" width="14" height="272" fill="#5A5D62" />
              <path className="eo" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#232427" stroke="#6A655F" strokeWidth="3" />
              <use href="#gfan" transform="translate(165 131.5)" />
              <use href="#gfan" transform="translate(455 131.5)" />
              <path d="M232 20 L388 243 M388 20 L232 243" className="xf" />
            </g>
          </defs>
        </svg>
        <div className="dw">
          <div className="f dfl" style={{ width: "265.625cqw", height: "171.875cqw", left: "-132.8125cqw", top: "-85.9375cqw", transform: "translate3d(0,36.7188cqw,-39.0625cqw) rotateX(90deg)" }} />
          <div className="f rkF nb" style={{ width: "34.375cqw", height: "73.4375cqw", left: "-17.1875cqw", top: "-36.7188cqw", transform: "translate3d(36.25cqw,0,0)" }}>
            <svg viewBox="0 0 220 470" preserveAspectRatio="none">
              <use href="#dcrf" />
            </svg>
          </div>
          <div className="f rkT nb" style={{ width: "34.375cqw", height: "46.875cqw", left: "-17.1875cqw", top: "-23.4375cqw", transform: "translate3d(36.25cqw,-36.7188cqw,-23.4375cqw) rotateX(90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(19.0625cqw,0,-23.4375cqw) rotateY(-90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(53.4375cqw,0,-23.4375cqw) rotateY(90deg)" }} />
          <div className="f rkF nb" style={{ width: "34.375cqw", height: "73.4375cqw", left: "-17.1875cqw", top: "-36.7188cqw", transform: "translate3d(72.5cqw,0,0)" }}>
            <svg viewBox="0 0 220 470" preserveAspectRatio="none">
              <use href="#dcrf" />
            </svg>
          </div>
          <div className="f rkT nb" style={{ width: "34.375cqw", height: "46.875cqw", left: "-17.1875cqw", top: "-23.4375cqw", transform: "translate3d(72.5cqw,-36.7188cqw,-23.4375cqw) rotateX(90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(55.3125cqw,0,-23.4375cqw) rotateY(-90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(89.6875cqw,0,-23.4375cqw) rotateY(90deg)" }} />
          <div className="f rkF nb" style={{ width: "34.375cqw", height: "73.4375cqw", left: "-17.1875cqw", top: "-36.7188cqw", transform: "translate3d(108.75cqw,0,0)" }}>
            <svg viewBox="0 0 220 470" preserveAspectRatio="none">
              <use href="#dcrf" />
            </svg>
          </div>
          <div className="f rkT nb" style={{ width: "34.375cqw", height: "46.875cqw", left: "-17.1875cqw", top: "-23.4375cqw", transform: "translate3d(108.75cqw,-36.7188cqw,-23.4375cqw) rotateX(90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(91.5625cqw,0,-23.4375cqw) rotateY(-90deg)" }} />
          <div className="f rkS nb" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(125.9375cqw,0,-23.4375cqw) rotateY(90deg)" }} />
          <div className="f rkF" style={{ width: "34.375cqw", height: "73.4375cqw", left: "-17.1875cqw", top: "-36.7188cqw", transform: "translate3d(0,0,0)" }}>
            <svg viewBox="0 0 220 470" preserveAspectRatio="none">
              <use href="#dcrf" />
              <rect x="9" y="243" width="202" height="32" fill="#040405" />
            </svg>
          </div>
          <div className="f rkT" style={{ width: "34.375cqw", height: "46.875cqw", left: "-17.1875cqw", top: "-23.4375cqw", transform: "translate3d(0,-36.7188cqw,-23.4375cqw) rotateX(90deg)" }} />
          <div className="f rkS" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(-17.1875cqw,0,-23.4375cqw) rotateY(-90deg)" }} />
          <div className="f rkS" style={{ width: "46.875cqw", height: "73.4375cqw", left: "-23.4375cqw", top: "-36.7188cqw", transform: "translate3d(17.1875cqw,0,-23.4375cqw) rotateY(90deg)" }} />
          <div className="f dtg" style={{ width: "33.4375cqw", height: "6.25cqw", left: "-16.7188cqw", top: "-3.125cqw", transform: "translate3d(0,3.75cqw,0.625cqw)" }} />
          <div className="drw">
            <div className="f" style={{ width: "31.25cqw", height: "4.6875cqw", left: "-15.625cqw", top: "-2.3438cqw", transform: "translate3d(0,0,0.2344cqw)" }}>
              <svg viewBox="0 0 200 30">
                <rect width="200" height="30" rx="2" fill="#1A1B1E" stroke="#4A4B50" />
                <rect x="4" y="6" width="8" height="18" rx="1.5" fill="#6A6D73" />
                <rect x="188" y="6" width="8" height="18" rx="1.5" fill="#6A6D73" />
                <rect x="22" y="8" width="120" height="14" fill="url(#dcv)" />
                <circle cx="156" cy="15" r="2.5" fill="#7CD957" className="blink" />
                <circle cx="166" cy="15" r="2.5" fill="#E39A5C" />
                <rect x="174" y="10" width="8" height="10" rx="1" fill="#2A2B2F" />
              </svg>
            </div>
            <div className="f dzF" style={{ width: "30.625cqw", height: "37.5cqw", left: "-15.3125cqw", top: "-18.75cqw", transform: "translate3d(0,2.3438cqw,-18.75cqw) rotateX(90deg)" }} />
            <div className="f dzW" style={{ width: "37.5cqw", height: "4.6875cqw", left: "-18.75cqw", top: "-2.3438cqw", transform: "translate3d(-15.3125cqw,0,-18.75cqw) rotateY(90deg)" }} />
            <div className="f dzW" style={{ width: "37.5cqw", height: "4.6875cqw", left: "-18.75cqw", top: "-2.3438cqw", transform: "translate3d(15.3125cqw,0,-18.75cqw) rotateY(90deg)" }} />
            <div className="f dzW" style={{ width: "30.625cqw", height: "4.6875cqw", left: "-15.3125cqw", top: "-2.3438cqw", transform: "translate3d(0,0,-37.5cqw)" }} />
            <div className="f dzR" style={{ width: "45.3125cqw", height: "0.7812cqw", left: "-22.6562cqw", top: "-0.3906cqw", transform: "translate3d(-15.7812cqw,0.4688cqw,-22.6562cqw) rotateY(90deg)" }} />
            <div className="f dzR" style={{ width: "45.3125cqw", height: "0.7812cqw", left: "-22.6562cqw", top: "-0.3906cqw", transform: "translate3d(15.7812cqw,0.4688cqw,-22.6562cqw) rotateY(90deg)" }} />
            <div className="gp" style={{ transform: "translate3d(-11.25cqw,2.0312cqw,-9.6875cqw)" }}>
              <div className="f gpT" style={{ width: "14.5cqw", height: "7cqw", left: "-7.25cqw", top: "-3.5cqw", transform: "translate3d(0,-1.55cqw,0) rotateX(90deg) rotateZ(90deg)" }}>
                <svg viewBox="0 0 580 280">
                  <use href="#gtop" />
                </svg>
              </div>
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(-3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,7.25cqw)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,-7.25cqw)" }} />
            </div>
            <div className="gp" style={{ transform: "translate3d(-3.75cqw,2.0312cqw,-9.6875cqw)" }}>
              <div className="f gpT" style={{ width: "14.5cqw", height: "7cqw", left: "-7.25cqw", top: "-3.5cqw", transform: "translate3d(0,-1.55cqw,0) rotateX(90deg) rotateZ(90deg)" }}>
                <svg viewBox="0 0 580 280">
                  <use href="#gtop" />
                </svg>
              </div>
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(-3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,7.25cqw)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,-7.25cqw)" }} />
            </div>
            <div className="gp" style={{ transform: "translate3d(3.75cqw,2.0312cqw,-9.6875cqw)" }}>
              <div className="f gpT gs" style={{ width: "14.5cqw", height: "7cqw", left: "-7.25cqw", top: "-3.5cqw", transform: "translate3d(0,-1.55cqw,0) rotateX(90deg) rotateZ(90deg)" }}>
                <svg viewBox="0 0 580 280">
                  <use href="#gtop" />
                  <rect x="40" y="10" width="540" height="243" rx="22" fill="none" stroke="#E39A5C" strokeWidth="9" />
                </svg>
              </div>
              <div className="f gpS gs" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(-3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS gs" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS gs" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,7.25cqw)" }} />
              <div className="f gpS gs" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,-7.25cqw)" }} />
            </div>
            <div className="gp" style={{ transform: "translate3d(11.25cqw,2.0312cqw,-9.6875cqw)" }}>
              <div className="f gpT" style={{ width: "14.5cqw", height: "7cqw", left: "-7.25cqw", top: "-3.5cqw", transform: "translate3d(0,-1.55cqw,0) rotateX(90deg) rotateZ(90deg)" }}>
                <svg viewBox="0 0 580 280">
                  <use href="#gtop" />
                </svg>
              </div>
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(-3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "14.5cqw", height: "1.675cqw", left: "-7.25cqw", top: "-0.8375cqw", transform: "translate3d(3.5cqw,-0.7125cqw,0) rotateY(90deg)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,7.25cqw)" }} />
              <div className="f gpS" style={{ width: "7cqw", height: "1.675cqw", left: "-3.5cqw", top: "-0.8375cqw", transform: "translate3d(0,-0.7125cqw,-7.25cqw)" }} />
            </div>
            <div className="f hsT" style={{ width: "7.1875cqw", height: "7.1875cqw", left: "-3.5938cqw", top: "-3.5938cqw", transform: "translate3d(-7.5cqw,-1.4062cqw,-25.7812cqw) rotateX(90deg)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(-7.5cqw,0.4688cqw,-22.1875cqw)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(-7.5cqw,0.4688cqw,-29.375cqw)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(-11.0938cqw,0.4688cqw,-25.7812cqw) rotateY(-90deg)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(-3.9062cqw,0.4688cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f hsT" style={{ width: "7.1875cqw", height: "7.1875cqw", left: "-3.5938cqw", top: "-3.5938cqw", transform: "translate3d(7.5cqw,-1.4062cqw,-25.7812cqw) rotateX(90deg)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(7.5cqw,0.4688cqw,-22.1875cqw)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(7.5cqw,0.4688cqw,-29.375cqw)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(3.9062cqw,0.4688cqw,-25.7812cqw) rotateY(-90deg)" }} />
            <div className="f hsS" style={{ width: "7.1875cqw", height: "3.75cqw", left: "-3.5938cqw", top: "-1.875cqw", transform: "translate3d(11.0938cqw,0.4688cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-14.375cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-13.5938cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-12.8125cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-2.1875cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-1.4062cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(-0.625cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(0.625cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(1.4062cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(2.1875cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(12.8125cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(13.5938cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f dmm" style={{ width: "8.125cqw", height: "2.5cqw", left: "-4.0625cqw", top: "-1.25cqw", transform: "translate3d(14.375cqw,1.0938cqw,-25.7812cqw) rotateY(90deg)" }} />
            <div className="f psT" style={{ width: "11.25cqw", height: "5.3125cqw", left: "-5.625cqw", top: "-2.6562cqw", transform: "translate3d(-8.125cqw,-1.0938cqw,-33.75cqw) rotateX(90deg)" }} />
            <div className="f psS" style={{ width: "11.25cqw", height: "3.4375cqw", left: "-5.625cqw", top: "-1.7188cqw", transform: "translate3d(-8.125cqw,0.625cqw,-31.0938cqw)" }} />
            <div className="f psS" style={{ width: "11.25cqw", height: "3.4375cqw", left: "-5.625cqw", top: "-1.7188cqw", transform: "translate3d(-8.125cqw,0.625cqw,-36.4062cqw)" }} />
            <div className="f psS" style={{ width: "5.3125cqw", height: "3.4375cqw", left: "-2.6562cqw", top: "-1.7188cqw", transform: "translate3d(-13.75cqw,0.625cqw,-33.75cqw) rotateY(-90deg)" }} />
            <div className="f psS" style={{ width: "5.3125cqw", height: "3.4375cqw", left: "-2.6562cqw", top: "-1.7188cqw", transform: "translate3d(-2.5cqw,0.625cqw,-33.75cqw) rotateY(90deg)" }} />
            <div className="f psT" style={{ width: "11.25cqw", height: "5.3125cqw", left: "-5.625cqw", top: "-2.6562cqw", transform: "translate3d(8.125cqw,-1.0938cqw,-33.75cqw) rotateX(90deg)" }} />
            <div className="f psS" style={{ width: "11.25cqw", height: "3.4375cqw", left: "-5.625cqw", top: "-1.7188cqw", transform: "translate3d(8.125cqw,0.625cqw,-31.0938cqw)" }} />
            <div className="f psS" style={{ width: "11.25cqw", height: "3.4375cqw", left: "-5.625cqw", top: "-1.7188cqw", transform: "translate3d(8.125cqw,0.625cqw,-36.4062cqw)" }} />
            <div className="f psS" style={{ width: "5.3125cqw", height: "3.4375cqw", left: "-2.6562cqw", top: "-1.7188cqw", transform: "translate3d(2.5cqw,0.625cqw,-33.75cqw) rotateY(-90deg)" }} />
            <div className="f psS" style={{ width: "5.3125cqw", height: "3.4375cqw", left: "-2.6562cqw", top: "-1.7188cqw", transform: "translate3d(13.75cqw,0.625cqw,-33.75cqw) rotateY(90deg)" }} />
          </div>
        </div>
      </div>
      <svg className="dcl" viewBox="0 0 640 560" preserveAspectRatio="xMidYMid meet">
        <polyline points="152,66 196,66 224,110" className="ld" />
        <circle cx="226" cy="116" r="3" fill="#F2F2EE" />
        <text x="40" y="70" className="tl">SERVER RACK</text>
        <rect x="476" y="236" width="134" height="52" rx="3" fill="#0B0B0C" opacity=".82" />
        <polyline points="356,316 404,262 600,262" className="ldA" />
        <circle cx="353" cy="318" r="3" className="tA" />
        <text x="600" y="254" className="tl tA te">GPU SERVER</text>
        <text x="600" y="280" className="ts te">next layer ↓</text>
      </svg>
    </>
  );
}
