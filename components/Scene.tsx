// The illustrated stage: the 3D rack and card (layers 0–3) and the matched-geometry zoom layers (4–9).
// `z` holds each layer's position class (is-active / is-past / is-next).
type Props = { z: Record<string, string> };

export default function Scene({ z }: Props) {
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
      {/* ═════ 1–3 · the card as real 3D layers: shroud, fans, fins, vapor chamber, PCB ═════ */}
      <div className={`ZA ${z.za}`}>
        <div className="card3d">
          <div className="pl p-pcb">
            <svg viewBox="0 0 580 280">
              <defs>
                <pattern id="pg" width="5" height="26" patternUnits="userSpaceOnUse">
                  <rect width="3.2" height="26" fill="#C9A245" />
                </pattern>
                <pattern id="pm" width="12" height="24.5" patternUnits="userSpaceOnUse">
                  <rect y="4" width="11" height="15" rx="1" fill="#1C1D20" stroke="#2C2D31" />
                </pattern>
                <pattern id="pr" width="10" height="8" patternUnits="userSpaceOnUse">
                  <rect x="2" y="2" width="6" height="3" fill="#34363A" />
                </pattern>
                <pattern id="scap" width="6" height="6" patternUnits="userSpaceOnUse">
                  <rect x="1" y="2" width="4" height="2" fill="#B9935A" />
                </pattern>
                <g id="ind">
                  <rect width="24" height="18" rx="2" fill="#5B6957" stroke="#3E4A3C" />
                  <text x="12" y="11" className="tt">R10</text>
                </g>
                <g id="ind22">
                  <rect width="24" height="18" rx="2" fill="#7A7D80" stroke="#55585C" />
                  <text x="12" y="11" className="tt">R22</text>
                </g>
                <g id="cap">
                  <circle r="8" fill="#C3C8CE" stroke="#6F767E" />
                  <circle r="3.6" fill="#8FB8E0" />
                </g>
                <g id="mem">
                  <rect width="30" height="24" rx="1.5" fill="#121315" stroke="#2E2F33" />
                  <rect x="3" y="3" width="10" height="2.5" fill="#3A3B3F" />
                  <circle cx="26" cy="20" r="1.2" fill="#3A3B3F" />
                </g>
                <g id="hole">
                  <circle r="7" fill="#B87650" />
                  <circle r="3.5" fill="#0B0B0C" />
                </g>
              </defs>
              <g transform="translate(30 -2.2) scale(.8125) translate(0 -70)">
                <rect x="120" y="374" width="276" height="38" fill="#0F1412" />
                <rect x="128" y="384" width="30" height="26" fill="url(#pg)" />
                <rect x="166" y="384" width="222" height="26" fill="url(#pg)" />
                <rect x="158" y="394" width="8" height="20" fill="#0B0B0C" />
                <rect x="20" y="80" width="600" height="300" rx="5" fill="#0F1412" stroke="#26332B" />
                <path d="M150 120 H200 M150 330 H200 M420 120 H440 M420 330 H440 M200 360 H420 M310 300 V360 M500 150 H540 M500 300 H580" stroke="#1A2A21" className="sw2" fill="none" />
                <rect x="204" y="106" width="212" height="234" fill="none" stroke="#24332B" />
                <rect x="4" y="104" width="42" height="42" rx="2" fill="#B8952F" stroke="#6E5A1F" />
                <rect x="12" y="116" width="26" height="18" fill="#3A2E10" />
                <rect x="4" y="156" width="42" height="42" rx="2" fill="#B8952F" stroke="#6E5A1F" />
                <rect x="12" y="168" width="26" height="18" fill="#3A2E10" />
                <rect x="4" y="208" width="42" height="42" rx="2" fill="#B8952F" stroke="#6E5A1F" />
                <rect x="12" y="220" width="26" height="18" fill="#3A2E10" />
                <rect x="8" y="262" width="38" height="34" rx="2" fill="#C9A245" stroke="#6E5A1F" />
                <rect x="15" y="272" width="24" height="14" fill="#3A2E10" />
                <use href="#cap" x="64" y="98" />
                <use href="#cap" x="64" y="120" />
                <use href="#cap" x="64" y="142" />
                <use href="#cap" x="64" y="164" />
                <use href="#cap" x="64" y="186" />
                <use href="#cap" x="64" y="208" />
                <use href="#cap" x="64" y="230" />
                <use href="#cap" x="64" y="252" />
                <use href="#cap" x="64" y="274" />
                <use href="#cap" x="64" y="296" />
                <use href="#cap" x="64" y="318" />
                <use href="#cap" x="64" y="340" />
                <use href="#cap" x="64" y="362" />
                <use href="#ind" x="80" y="90" />
                <use href="#ind" x="80" y="114.5" />
                <use href="#ind" x="80" y="139" />
                <use href="#ind" x="80" y="163.5" />
                <use href="#ind" x="80" y="188" />
                <use href="#ind" x="80" y="212.5" />
                <use href="#ind" x="80" y="237" />
                <use href="#ind" x="80" y="261.5" />
                <use href="#ind" x="80" y="286" />
                <use href="#ind" x="80" y="310.5" />
                <use href="#ind" x="80" y="335" />
                <use href="#ind" x="80" y="359.5" />
                <rect x="110" y="88" width="12" height="290" fill="url(#pm)" />
                <rect x="128" y="90" width="30" height="276" fill="url(#pr)" />
                <rect x="430" y="88" width="12" height="290" fill="url(#pm)" />
                <use href="#ind" x="446" y="90" />
                <use href="#ind" x="446" y="114.5" />
                <use href="#ind" x="446" y="139" />
                <use href="#ind" x="446" y="163.5" />
                <use href="#ind" x="446" y="188" />
                <use href="#ind" x="446" y="212.5" />
                <use href="#ind" x="446" y="237" />
                <use href="#ind" x="446" y="261.5" />
                <use href="#ind" x="446" y="286" />
                <use href="#ind22" x="446" y="310.5" />
                <use href="#ind" x="446" y="335" />
                <use href="#ind" x="446" y="359.5" />
                <use href="#cap" x="486" y="98" />
                <use href="#cap" x="486" y="120" />
                <use href="#cap" x="486" y="142" />
                <use href="#cap" x="486" y="164" />
                <use href="#cap" x="486" y="186" />
                <use href="#cap" x="486" y="208" />
                <use href="#cap" x="486" y="230" />
                <use href="#cap" x="486" y="252" />
                <use href="#cap" x="486" y="274" />
                <use href="#cap" x="486" y="296" />
                <use href="#cap" x="486" y="318" />
                <use href="#cap" x="486" y="340" />
                <use href="#cap" x="486" y="362" />
                <rect x="548" y="84" width="52" height="28" rx="2" fill="#0E0E10" stroke="#3A3B3F" />
                <path d="M554 92 H594 M554 98 H594 M554 104 H594" stroke="#2A2B2F" fill="none" />
                <rect x="520" y="136" width="18" height="16" rx="1.5" fill="#7A7D80" />
                <rect x="520" y="164" width="18" height="16" rx="1.5" fill="#7A7D80" />
                <rect x="528" y="214" width="24" height="24" fill="#1A1B1E" stroke="#34363A" />
                <rect x="588" y="250" width="18" height="12" fill="#111214" stroke="#45474C" />
                <rect x="588" y="276" width="18" height="12" fill="#111214" stroke="#45474C" />
                <rect x="508" y="306" width="96" height="62" fill="url(#pr)" />
                <use href="#mem" x="246" y="112" />
                <use href="#mem" x="280" y="112" />
                <use href="#mem" x="314" y="112" />
                <use href="#mem" x="348" y="112" />
                <use href="#mem" x="210" y="148" />
                <use href="#mem" x="210" y="178" />
                <use href="#mem" x="210" y="208" />
                <use href="#mem" x="210" y="238" />
                <use href="#mem" x="210" y="268" />
                <use href="#mem" x="380" y="148" />
                <use href="#mem" x="380" y="178" />
                <use href="#mem" x="380" y="208" />
                <use href="#mem" x="380" y="238" />
                <use href="#mem" x="380" y="268" />
                <use href="#mem" x="236" y="306" />
                <use href="#mem" x="354" y="306" />
                <rect x="296" y="310" width="18" height="16" rx="1.5" fill="#7A7D80" />
                <rect x="320" y="310" width="18" height="16" rx="1.5" fill="#6A6E6A" />
                <use href="#cap" x="222" y="352" />
                <use href="#cap" x="398" y="352" />
                <use href="#hole" x="196" y="132" />
                <use href="#hole" x="424" y="132" />
                <use href="#hole" x="196" y="300" />
                <use href="#hole" x="424" y="300" />
                <use href="#hole" x="160" y="100" />
                <use href="#hole" x="470" y="100" />
                <use href="#hole" x="168" y="360" />
                <use href="#hole" x="470" y="360" />
                <use href="#hole" x="604" y="200" />
                <rect x="248" y="146" width="124" height="124" rx="3" fill="#C8CBD0" stroke="#9DA1A7" />
                <path d="M256 160 C290 150 330 168 364 156 M256 250 C300 260 330 244 364 256" stroke="#B4B7BC" fill="none" />
                <rect x="266" y="164" width="88" height="88" rx="2" fill="#1D4F52" stroke="#2E7378" />
                <rect x="268" y="166" width="84" height="84" fill="url(#scap)" opacity=".5" />
                <rect x="276" y="174" width="68" height="68" rx="1" fill="#15191C" stroke="#3A4247" />
                <path d="M276 197 H344 M276 219 H344 M299 174 V242 M321 174 V242" stroke="#1D2328" fill="none" />
                <g className="pcbtgt">
                  <rect x="14" y="74" width="612" height="344" rx="8" className="tgt" />
                </g>
              </g>
            </svg>
            <div className="f pcbE" style={{ width: "76.1719cqw", height: "0.7812cqw", left: "7.2266cqw", top: "0.5359cqw", transform: "translateZ(-0.3906cqw) rotateX(90deg)" }} />
            <div className="f pcbE" style={{ width: "76.1719cqw", height: "0.7812cqw", left: "7.2266cqw", top: "38.6219cqw", transform: "translateZ(-0.3906cqw) rotateX(90deg)" }} />
            <div className="f pcbE" style={{ width: "0.7812cqw", height: "38.0859cqw", left: "6.8359cqw", top: "0.9266cqw", transform: "translateZ(-0.3906cqw) rotateY(90deg)" }} />
            <div className="f pcbE" style={{ width: "0.7812cqw", height: "38.0859cqw", left: "83.0078cqw", top: "0.9266cqw", transform: "translateZ(-0.3906cqw) rotateY(90deg)" }} />
            <div className="f pcbB" style={{ width: "76.1719cqw", height: "38.0859cqw", left: "7.2266cqw", top: "0.9266cqw", transform: "translateZ(-0.7812cqw)" }} />
          </div>
          <div className="pl p-br">
            <div className="f brP" style={{ width: "9.8438cqw", height: "42.5cqw", left: "-0.3906cqw", top: "1.25cqw", transform: "translateZ(4.1406cqw) rotateY(-90deg)" }}>
              <svg viewBox="0 0 63 272" preserveAspectRatio="none">
                <rect width="63" height="272" fill="none" stroke="#A3A6AC" strokeWidth="2" />
                <rect x="10" y="40" width="15" height="34" rx="2" fill="#141517" stroke="#3A3C41" />
                <rect x="15.5" y="44" width="4" height="26" fill="#3A3C41" />
                <rect x="10" y="84" width="15" height="34" rx="2" fill="#141517" stroke="#3A3C41" />
                <rect x="15.5" y="88" width="4" height="26" fill="#3A3C41" />
                <rect x="10" y="128" width="15" height="34" rx="2" fill="#141517" stroke="#3A3C41" />
                <rect x="15.5" y="132" width="4" height="26" fill="#3A3C41" />
                <rect x="10" y="174" width="15" height="24" rx="2" fill="#141517" stroke="#3A3C41" />
                <rect x="15.5" y="178" width="4" height="16" fill="#3A3C41" />
                <rect x="31" y="14" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="24.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="35" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="45.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="56" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="66.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="77" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="87.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="98" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="108.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="119" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="129.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="140" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="150.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="161" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="171.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="182" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="192.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="203" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="213.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="224" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="234.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="245" width="23" height="5" rx="2.5" fill="#2A2C30" />
                <rect x="31" y="255.5" width="23" height="5" rx="2.5" fill="#2A2C30" />
              </svg>
            </div>
            <div className="f brT" style={{ width: "2.3438cqw", height: "2.5cqw", left: "2.1875cqw", top: "0", transform: "translateZ(7.6562cqw) rotateX(90deg)" }} />
            <div className="f brP" style={{ width: "0.9375cqw", height: "3.4375cqw", left: "4.0625cqw", top: "43.75cqw", transform: "translateZ(0.1562cqw) rotateY(-90deg)" }} />
          </div>
          <div className="pl p-vc">
            <svg viewBox="0 0 580 280">
              <path d="M60 76 H560 M70 98 H550 M80 120 H540 M70 142 H550 M60 164 H560" className="hp" />
              <path d="M60 74 H560 M70 96 H550 M80 118 H540 M70 140 H550 M60 162 H560" className="hph" />
              <rect x="230" y="50" width="160" height="162" rx="4" fill="#3A3C41" stroke="#5E6168" className="sw15" />
              <rect x="268" y="92" width="84" height="78" rx="2" fill="#B87650" />
              <rect x="276" y="100" width="68" height="62" fill="none" stroke="#D69A6E" opacity=".6" />
              <circle cx="242" cy="62" r="3.5" fill="#8A8D93" />
              <circle cx="378" cy="62" r="3.5" fill="#8A8D93" />
              <circle cx="242" cy="200" r="3.5" fill="#8A8D93" />
              <circle cx="378" cy="200" r="3.5" fill="#8A8D93" />
            </svg>
            <div className="f vcE" style={{ width: "25cqw", height: "0.9375cqw", left: "35.9375cqw", top: "7.3438cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f vcE" style={{ width: "25cqw", height: "0.9375cqw", left: "35.9375cqw", top: "32.6562cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f vcE" style={{ width: "0.9375cqw", height: "25.3125cqw", left: "35.4688cqw", top: "7.8125cqw", transform: "translateZ(-0.4688cqw) rotateY(90deg)" }} />
            <div className="f vcE" style={{ width: "0.9375cqw", height: "25.3125cqw", left: "60.4688cqw", top: "7.8125cqw", transform: "translateZ(-0.4688cqw) rotateY(90deg)" }} />
            <div className="f hpV" style={{ width: "78.125cqw", height: "0.9375cqw", left: "9.375cqw", top: "11.4062cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f hpV" style={{ width: "75cqw", height: "0.9375cqw", left: "10.9375cqw", top: "14.8438cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f hpV" style={{ width: "71.875cqw", height: "0.9375cqw", left: "12.5cqw", top: "18.2812cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f hpV" style={{ width: "75cqw", height: "0.9375cqw", left: "10.9375cqw", top: "21.7188cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
            <div className="f hpV" style={{ width: "78.125cqw", height: "0.9375cqw", left: "9.375cqw", top: "25.1562cqw", transform: "translateZ(-0.4688cqw) rotateX(90deg)" }} />
          </div>
          <div className="pl p-fin">
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-5.625cqw)" }}>
              <defs>
                <pattern id="fin2" width="4" height="10" patternUnits="userSpaceOnUse">
                  <rect width="4" height="10" fill="#26282C" />
                  <rect width="1.6" height="10" fill="#8B8E95" />
                </pattern>
              </defs>
              <rect x="48" y="20" width="224" height="224" rx="3" fill="url(#fin2)" stroke="#55585E" />
              <rect x="348" y="20" width="224" height="224" rx="3" fill="url(#fin2)" stroke="#55585E" />
              <rect x="280" y="60" width="60" height="140" fill="url(#fin2)" stroke="#55585E" />
              <rect x="48" y="122" width="224" height="10" fill="#1A1B1E" />
              <rect x="348" y="122" width="224" height="10" fill="#1A1B1E" />
            </svg>
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "5cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "6.2731cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "7.5463cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "8.8194cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "10.0926cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "11.3657cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "12.6389cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "13.912cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "15.1852cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "16.4583cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "17.7315cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "19.0046cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "20.2778cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "21.5509cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "22.8241cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "24.0972cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "25.3704cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "26.6435cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "27.9167cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "29.1898cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "30.463cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "31.7361cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "33.0093cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "34.2824cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "35.5556cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "36.8287cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "38.1019cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "39.375cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "9.8438cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "9.8438cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "20.1562cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "20.1562cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "30.4688cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "7.0312cqw", top: "30.4688cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "51.875cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "53.1481cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "54.4213cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "55.6944cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "56.9676cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "58.2407cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "59.5139cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "60.787cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "62.0602cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "63.3333cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "64.6065cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "65.8796cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "67.1528cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "68.4259cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "69.6991cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "70.9722cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "72.2454cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "73.5185cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "74.7917cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "76.0648cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "77.338cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "78.6111cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "79.8843cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "81.1574cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "82.4306cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "83.7037cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "84.9769cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "35cqw", left: "86.25cqw", top: "3.125cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "9.8438cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "9.8438cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "20.1562cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "20.1562cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f cuH" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "30.4688cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "35.9375cqw", height: "0.9375cqw", left: "53.9062cqw", top: "30.4688cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "41.25cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "42.5cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "43.75cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "45cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "46.25cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "47.5cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "48.75cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f fin" style={{ width: "5.625cqw", height: "21.875cqw", left: "50cqw", top: "9.375cqw", transform: "translateZ(-2.8125cqw) rotateY(90deg)" }} />
            <div className="f cuH" style={{ width: "10.3125cqw", height: "0.9375cqw", left: "43.2812cqw", top: "14.8438cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "10.3125cqw", height: "0.9375cqw", left: "43.2812cqw", top: "14.8438cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
            <div className="f cuH" style={{ width: "10.3125cqw", height: "0.9375cqw", left: "43.2812cqw", top: "25.1562cqw", transform: "translateZ(-2.5312cqw)" }} />
            <div className="f cuV" style={{ width: "10.3125cqw", height: "0.9375cqw", left: "43.2812cqw", top: "25.1562cqw", transform: "translateZ(-2.5312cqw) rotateX(90deg)" }} />
          </div>
          <div className="pl p-fan">
            <svg viewBox="0 0 580 280">
              <g transform="translate(165 131.5)">
                <circle r="34" fill="#2C2E32" stroke="#5E5A55" className="sw15" />
                <circle r="28" className="ring" />
                <circle r="22" className="ring" />
                <circle r="16" className="ring" />
                <circle r="10" className="ring" />
              </g>
              <g transform="translate(455 131.5)">
                <circle r="34" fill="#2C2E32" stroke="#5E5A55" className="sw15" />
                <circle r="28" className="ring" />
                <circle r="22" className="ring" />
                <circle r="16" className="ring" />
                <circle r="10" className="ring" />
              </g>
            </svg>
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-1.875cqw)" }}>
              <g transform="translate(165 131.5)">
                <circle r="110" fill="none" stroke="#3A3C41" strokeWidth="3" />
                <path d="M26 26 L76 76 M-26 26 L-76 76 M-26 -26 L-76 -76 M26 -26 L76 -76" stroke="#26282C" strokeWidth="6" strokeLinecap="round" />
                <circle r="36" fill="#1A1B1E" stroke="#34363A" />
              </g>
              <g transform="translate(455 131.5)">
                <circle r="110" fill="none" stroke="#3A3C41" strokeWidth="3" />
                <path d="M26 26 L76 76 M-26 26 L-76 76 M-26 -26 L-76 -76 M26 -26 L76 -76" stroke="#26282C" strokeWidth="6" strokeLinecap="round" />
                <circle r="36" fill="#1A1B1E" stroke="#34363A" />
              </g>
            </svg>
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(0deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(18deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(36deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(54deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(72deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(90deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(108deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(126deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(144deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(162deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(180deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(198deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(216deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(234deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(252deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(270deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(288deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(306deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(324deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "22.9877cqw", top: "19.6094cqw", transform: "rotateZ(342deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(0deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(36deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(72deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(108deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(144deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(180deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(216deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(252deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(288deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "24.0832cqw", top: "19.6094cqw", transform: "rotateZ(324deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="rz" style={{ left: "25.7812cqw", top: "20.5469cqw", transform: "translateZ(-0.9375cqw)" }}>
              <div className="rot">
                <div className="bd" style={{ transform: "rotateZ(0deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(51.4286deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(102.8571deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(154.2857deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(205.7143deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(257.1429deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(308.5714deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(0deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(18deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(36deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(54deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(72deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(90deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(108deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(126deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(144deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(162deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(180deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(198deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(216deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(234deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(252deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(270deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(288deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(306deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(324deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f frR" style={{ width: "5.5871cqw", height: "1.875cqw", left: "68.3002cqw", top: "19.6094cqw", transform: "rotateZ(342deg) translateY(-17.1875cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(0deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(36deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(72deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(108deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(144deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(180deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(216deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(252deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(288deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="f hubR" style={{ width: "3.396cqw", height: "1.875cqw", left: "69.3957cqw", top: "19.6094cqw", transform: "rotateZ(324deg) translateY(-5.1562cqw) translateZ(-0.9375cqw) rotateX(90deg)" }} />
            <div className="rz" style={{ left: "71.0938cqw", top: "20.5469cqw", transform: "translateZ(-0.9375cqw)" }}>
              <div className="rot">
                <div className="bd" style={{ transform: "rotateZ(0deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(51.4286deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(102.8571deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(154.2857deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(205.7143deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(257.1429deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
                <div className="bd" style={{ transform: "rotateZ(308.5714deg) rotateX(26deg) scale(.92)" }}>
                  <svg viewBox="0 -45 120 60">
                    <path className="bdp" d="M28 -6 C60 -30 92 -40 112 -18 C96 -8 70 2 30 10 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="pl p-sh">
            <svg viewBox="0 0 580 280">
              <path className="eo" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#232427" stroke="#6A655F" />
              <polygon points="232,20 388,20 310,131.5" fill="#2E2F33" />
              <polygon points="232,243 388,243 310,131.5" fill="#2E2F33" />
              <circle cx="165" cy="131.5" r="110" className="ring" />
              <circle cx="455" cy="131.5" r="110" className="ring" />
              <circle cx="165" cy="131.5" r="114" fill="none" stroke="#34363A" className="sw2" />
              <circle cx="455" cy="131.5" r="114" fill="none" stroke="#34363A" className="sw2" />
              <path d="M232 20 L388 243 M388 20 L232 243" className="xf" />
              <path d="M232 20 L388 243 M388 20 L232 243" className="xfh" />
              <rect x="292" y="2" width="36" height="10" rx="2" fill="#0B0B0C" stroke="#55585E" />
              <path d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z" fill="none" stroke="#6A655F" className="sw3" />
            </svg>
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-0.3906cqw)" }}>
              <path className="eo shs" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#1F2023" stroke="#3A3835" />
            </svg>
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-0.7812cqw)" }}>
              <path className="eo shs" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#1A1B1D" stroke="#3A3835" />
            </svg>
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-1.1719cqw)" }}>
              <path className="eo shs" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#161718" stroke="#3A3835" />
            </svg>
            <svg className="sv" viewBox="0 0 580 280" style={{ transform: "translateZ(-1.5625cqw)" }}>
              <path className="eo shs" d="M62 10 H558 A22 22 0 0 1 580 32 V231 A22 22 0 0 1 558 253 H62 A22 22 0 0 1 40 231 V32 A22 22 0 0 1 62 10 Z M55 131.5 A110 110 0 1 0 275 131.5 A110 110 0 1 0 55 131.5 Z M345 131.5 A110 110 0 1 0 565 131.5 A110 110 0 1 0 345 131.5 Z" fill="#121314" stroke="#3A3835" />
            </svg>
          </div>
        </div>
      </div>
      {/* labels for the card (front view) */}
      <svg className="ov ov1" viewBox="0 0 640 560">
        <rect x="62" y="142" width="556" height="259" rx="26" className="tgt" />
        <text x="20" y="104" className="tl">I/O BRACKET</text>
        <text x="20" y="120" className="ts">3× DisplayPort · 1× HDMI</text>
        <polyline points="58,146 58,128" className="ld" />
        <text x="340" y="104" className="tl tm">12V-2×6 POWER</text>
        <polyline points="340,112 340,140" className="ld" />
        <circle cx="340" cy="140" r="3" fill="#F2F2EE" />
        <text x="610" y="104" className="tl te">AXIAL FAN × 2</text>
        <polyline points="560,112 520,166" className="ld" />
        <circle cx="520" cy="166" r="3" fill="#F2F2EE" />
        <path d="M70 432 V448 M610 432 V448 M70 440 H610" className="dim" />
        <text x="340" y="456" className="ts tm">304 mm</text>
        <path d="M618 150 H630 M618 393 H630 M626 150 V393" className="dim" />
        <text x="0" y="0" className="ts tm" transform="translate(638 271) rotate(90)">137 mm</text>
        <polyline points="200,416 200,490" className="ld" />
        <text x="120" y="506" className="tl">PCIe 5.0 ×16</text>
        <polyline points="412,372 520,486" className="ld" />
        <circle cx="412" cy="372" r="3" fill="#F2F2EE" />
        <text x="610" y="506" className="tl te">X-FRAME · FLOW-THROUGH</text>
        <text x="610" y="524" className="ts te">take it apart · next layer ↓</text>
      </svg>
      {/* labels for the exploded view (positions are the projected 3D anchor points) */}
      <svg className="ov ov2" viewBox="0 0 640 560">
        <text x="20" y="120" className="tl">SHROUD · X-FRAME</text>
        <polyline points="182,135 152,128 20,128" className="ld" />
        <circle cx="182" cy="135" r="3" fill="#F2F2EE" />
        <text x="620" y="124" className="tl te">AXIAL FANS × 2</text>
        <polyline points="459,145 482,132 620,132" className="ld" />
        <circle cx="459" cy="145" r="3" fill="#F2F2EE" />
        <text x="620" y="222" className="tl te">FIN STACKS</text>
        <polyline points="483,236 500,230 620,230" className="ld" />
        <circle cx="483" cy="236" r="3" fill="#F2F2EE" />
        <text x="620" y="294" className="tl te">VAPOR CHAMBER</text>
        <text x="620" y="320" className="ts te">+ 5 heatpipes</text>
        <polyline points="447,302 620,302" className="ld" />
        <circle cx="447" cy="302" r="3" fill="#F2F2EE" />
        <text x="20" y="512" className="tl tA">PCB</text>
        <text x="20" y="528" className="ts">next layer ↓</text>
        <polyline points="267,426 60,498" className="ldA" />
        <circle cx="267" cy="426" r="3" className="tA" />
        <text x="320" y="552" className="tl tm">EXPLODED · DOUBLE FLOW-THROUGH</text>
      </svg>
      {/* labels for the board (top view) */}
      <svg className="ov ov3" viewBox="0 0 640 560">
        <rect x="244" y="142" width="132" height="132" rx="4" className="tgt" />
        <rect x="40" y="46" width="152" height="22" rx="3" className="bx" />
        <text x="50" y="61" className="tb">Power stages · VRM</text>
        <line x1="92" y1="68" x2="92" y2="90" className="ld" />
        <rect x="236" y="46" width="168" height="22" rx="3" className="bx" />
        <text x="246" y="61" className="tb">GDDR7 × 16 · 32 GB</text>
        <line x1="320" y1="68" x2="320" y2="112" className="ld" />
        <rect x="470" y="46" width="130" height="22" rx="3" className="bx" />
        <text x="480" y="61" className="tb">12V-2×6 power</text>
        <line x1="574" y1="68" x2="574" y2="84" className="ld" />
        <rect x="4" y="430" width="140" height="22" rx="3" className="bx" />
        <text x="14" y="445" className="tb">3× DP · 1× HDMI</text>
        <line x1="26" y1="430" x2="26" y2="298" className="ld" />
        <rect x="200" y="430" width="120" height="22" rx="3" className="bx" />
        <text x="210" y="445" className="tb">PCIe 5.0 ×16</text>
        <line x1="256" y1="430" x2="256" y2="412" className="ld" />
        <rect x="344" y="430" width="232" height="22" rx="3" className="bxA" />
        <text x="354" y="445" className="tb tA">GPU under the shim · next ↓</text>
        <polyline points="372,430 372,274" className="ldA" />
        <rect x="470" y="470" width="150" height="22" rx="3" className="bx" />
        <text x="480" y="485" className="tb">Polymer caps</text>
        <polyline points="494,470 494,370" className="ld" />
      </svg>
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
      {/* ═════ 5 · die floorplan (starts inside the package's die) ═════ */}
      <div className={`zl Z5 ${z.z5}`}>
        <svg className="art" viewBox="0 0 640 560">
          <defs>
            <g id="smp">
              <rect width="9.02" height="1.47" fill="#2F4A6B" />
              <rect y="1.79" width="9.02" height="1.96" fill="#4E3762" />
              <rect y="3.91" width="9.02" height="7.82" fill="#2B6A5F" />
              <rect y="12.1" width="9.02" height="1.96" fill="#C98A4B" />
              <rect y="14.43" width="9.02" height="1.47" fill="#4A4D55" />
            </g>
            <pattern id="sm" width="20" height="44" patternUnits="userSpaceOnUse">
              <rect width="20" height="44" fill="#141619" />
              <rect x=".65" y=".65" width="18.7" height="1.3" fill="#3A3F5C" />
              <use href="#smp" x=".65" y="2.45" />
              <use href="#smp" x="10.33" y="2.45" />
              <use href="#smp" x=".65" y="19.4" />
              <use href="#smp" x="10.33" y="19.4" />
              <rect x=".65" y="36.35" width="18.7" height="3.26" fill="#363B58" />
              <rect x=".65" y="40.1" width="9.94" height="3.26" fill="#5B6470" />
              <rect x="11.3" y="40.1" width="8.04" height="3.26" fill="#9B5B8B" />
            </pattern>
            <pattern id="l2c" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#3A3F5C" />
              <rect width="4" height="4" fill="#4A5070" />
            </pattern>
            <pattern id="phy" width="70" height="12" patternUnits="userSpaceOnUse">
              <rect x="1" width="68" height="12" fill="#4A3C2C" />
              <rect x="4" y="3" width="62" height="2" fill="#6A563E" />
            </pattern>
            <g id="gpc">
              <rect width="80" height="176" fill="url(#sm)" stroke="#2A2D33" />
              <rect width="80" height="176" fill="none" stroke="#5A5E66" />
            </g>
          </defs>
          <rect x="30" y="30" width="580" height="460" rx="4" fill="#141619" stroke="#3A3D44" />
          <rect x="40" y="40" width="560" height="12" fill="url(#phy)" />
          <rect x="40" y="468" width="560" height="12" fill="url(#phy)" />
          <rect x="40" y="60" width="12" height="400" fill="#3A3048" />
          <rect x="588" y="60" width="12" height="400" fill="#3A3048" />
          <use href="#gpc" transform="translate(64 64)" />
          <use href="#gpc" transform="translate(152 64)" />
          <use href="#gpc" transform="translate(240 64)" />
          <use href="#gpc" transform="translate(328 64)" />
          <use href="#gpc" transform="translate(416 64)" />
          <use href="#gpc" transform="translate(504 64)" />
          <rect x="64" y="252" width="226" height="24" fill="url(#l2c)" />
          <rect x="296" y="252" width="58" height="24" fill="#4A4058" stroke="#6A5E7C" />
          <rect x="360" y="252" width="224" height="24" fill="url(#l2c)" />
          <use href="#gpc" transform="translate(64 288)" />
          <use href="#gpc" transform="translate(152 288)" />
          <use href="#gpc" transform="translate(240 288)" />
          <use href="#gpc" transform="translate(328 288)" />
          <use href="#gpc" transform="translate(416 288)" />
          <use href="#gpc" transform="translate(504 288)" />
          <g className="tg">
            <rect x="258" y="106" width="24" height="48" rx="2" className="tgt" />
          </g>
          <g className="lbls">
            <rect x="82" y="253" width="96" height="22" rx="3" className="bx" />
            <text x="96" y="268" className="tb">L2 cache</text>
            <rect x="36" y="506" width="196" height="22" rx="3" className="bx" />
            <text x="46" y="521" className="tb">GPC × 12 · 16 SMs each</text>
            <polyline points="82,506 82,464" className="ld" />
            <rect x="248" y="506" width="140" height="22" rx="3" className="bx" />
            <text x="258" y="521" className="tb">Hub · PCIe · media</text>
            <polyline points="325,506 325,276" className="ld" />
            <rect x="404" y="506" width="196" height="22" rx="3" className="bx" />
            <text x="414" y="521" className="tb">512-bit GDDR7 PHY</text>
            <polyline points="500,506 500,480" className="ld" />
            <rect x="340" y="4" width="196" height="22" rx="3" className="bxA" />
            <text x="350" y="19" className="tb tA">One SM of 192 · next ↓</text>
            <polyline points="340,15 282,106" className="ldA" />
          </g>
        </svg>
      </div>
      {/* ═════ 6 · one SM (starts inside the die's highlighted SM tile) ═════ */}
      <div className={`zl Z6 ${z.z6}`}>
        <svg className="art" viewBox="0 0 640 560">
          <defs>
            <pattern id="cc2" width="27.675" height="12" patternUnits="userSpaceOnUse">
              <rect x="1.2" y="1.2" width="25.3" height="9.6" rx="1" fill="#2B6A5F" />
              <rect x="3.5" y="3.2" width="9" height="5.6" fill="#3E8C7C" />
              <rect x="14.5" y="3.2" width="9" height="5.6" fill="#356F65" />
            </pattern>
            <pattern id="rf2" width="8" height="6" patternUnits="userSpaceOnUse">
              <rect width="8" height="6" fill="#4E3762" />
              <rect width="8" height="2" fill="#634680" />
            </pattern>
            <pattern id="l1c" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#363B58" />
              <rect width="5" height="5" fill="#434A6C" />
            </pattern>
            <pattern id="tc2" width="13.8" height="12" patternUnits="userSpaceOnUse">
              <rect width="13.8" height="12" fill="#C98A4B" />
              <rect x="1" y="1" width="11.8" height="10" fill="none" stroke="#A86E37" />
            </pattern>
            <g id="part2">
              <rect width="110.7" height="200" fill="#181A1D" stroke="#2E3138" />
              <rect width="110.7" height="18" fill="#2F4A6B" />
              <rect x="3" y="11" width="104.7" height="4" fill="#3B5C84" />
              <rect y="22" width="110.7" height="24" fill="url(#rf2)" />
              <rect y="48" width="110.7" height="96" fill="url(#cc2)" />
              <rect y="148.5" width="110.7" height="24" fill="url(#tc2)" />
              <rect y="177" width="53" height="18" fill="#4A4D55" />
              <rect x="57.7" y="177" width="53" height="18" fill="#5A5048" />
            </g>
          </defs>
          <rect x="197.3" y="10" width="245.4" height="540" rx="3" fill="#141619" stroke="#3A3D44" />
          <rect x="205.3" y="18" width="229.4" height="16" fill="#3A3F5C" />
          <use href="#part2" x="205.3" y="40" />
          <use href="#part2" x="324" y="40" />
          <use href="#part2" x="205.3" y="248" />
          <use href="#part2" x="324" y="248" />
          <rect x="205.3" y="456" width="229.4" height="40" fill="url(#l1c)" />
          <rect x="205.3" y="502" width="27.5" height="40" fill="#5B6470" />
          <rect x="236.8" y="502" width="27.5" height="40" fill="#5B6470" />
          <rect x="268.3" y="502" width="27.5" height="40" fill="#5B6470" />
          <rect x="299.8" y="502" width="27.5" height="40" fill="#5B6470" />
          <rect x="336" y="502" width="98.7" height="40" fill="#9B5B8B" />
          <rect x="342" y="508" width="86.7" height="28" fill="none" stroke="#B87AA8" />
          <g className="tg">
            <rect x="231" y="110" width="59.3" height="52" rx="2" className="tgt" />
          </g>
          <g className="lbls">
            <rect x="20" y="14" width="110" height="22" rx="3" className="bx" />
            <text x="30" y="29" className="tb">L1 i-cache</text>
            <line x1="130" y1="25" x2="205" y2="26" className="ld" />
            <rect x="20" y="40" width="140" height="22" rx="3" className="bx" />
            <text x="30" y="55" className="tb">Warp scheduler</text>
            <line x1="160" y1="51" x2="205" y2="49" className="ld" />
            <rect x="20" y="66" width="130" height="22" rx="3" className="bx" />
            <text x="30" y="81" className="tb">Register file</text>
            <line x1="150" y1="77" x2="205" y2="75" className="ld" />
            <rect x="20" y="128" width="130" height="22" rx="3" className="bx" />
            <text x="30" y="143" className="tb">32 CUDA cores</text>
            <line x1="150" y1="139" x2="205" y2="139" className="ld" />
            <rect x="20" y="194" width="120" height="22" rx="3" className="bx" />
            <text x="30" y="209" className="tb">Tensor core</text>
            <line x1="140" y1="205" x2="205" y2="200" className="ld" />
            <rect x="20" y="222" width="120" height="22" rx="3" className="bx" />
            <text x="30" y="237" className="tb">LD/ST · SFU</text>
            <line x1="140" y1="233" x2="205" y2="226" className="ld" />
            <rect x="10" y="465" width="180" height="22" rx="3" className="bx" />
            <text x="20" y="480" className="tb">L1 / shared · 128 KB</text>
            <line x1="190" y1="476" x2="205" y2="476" className="ld" />
            <rect x="20" y="512" width="120" height="22" rx="3" className="bx" />
            <text x="30" y="527" className="tb">Texture × 4</text>
            <line x1="140" y1="523" x2="205" y2="522" className="ld" />
            <rect x="452" y="14" width="168" height="22" rx="3" className="bx" />
            <text x="462" y="29" className="tb">One SM · 1 of 192</text>
            <rect x="452" y="44" width="168" height="22" rx="3" className="bx" />
            <text x="462" y="59" className="tb">4 parts · 128 cores</text>
            <rect x="452" y="130" width="184" height="22" rx="3" className="bxA" />
            <text x="462" y="145" className="tb tA">8 CUDA cores · next ↓</text>
            <line x1="452" y1="141" x2="290" y2="141" className="ldA" />
            <rect x="452" y="511" width="90" height="22" rx="3" className="bx" />
            <text x="462" y="526" className="tb">RT core</text>
            <line x1="452" y1="522" x2="435" y2="522" className="ld" />
          </g>
        </svg>
      </div>
      {/* ═════ 7 · standard cells under their metal stack (start inside the SM's highlighted cores) ═════ */}
      <div className={`zl Z7 ${z.z7}`}>
        <svg className="dcdefs" width="0" height="0" aria-hidden="true">
          <defs>
            <pattern id="cell" width="24" height="48" patternUnits="userSpaceOnUse">
              <rect width="24" height="48" fill="#2E3034" />
              <rect width="24" height="3" fill="#B5B9BF" />
              <rect x="3" y="7" width="3" height="36" fill="#8E9298" />
              <rect x="10" y="7" width="3" height="36" fill="#8E9298" />
              <rect x="17" y="7" width="3" height="36" fill="#6C7076" />
              <rect y="22" width="24" height="3" fill="#55595F" />
              <rect x="22" y="3" width="2" height="45" fill="#1E2023" />
            </pattern>
            <pattern id="cell2" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect width="48" height="48" fill="#2B2D31" />
              <rect width="48" height="3" fill="#B5B9BF" />
              <rect x="4" y="7" width="3" height="36" fill="#7E8288" />
              <rect x="14" y="7" width="3" height="16" fill="#9A9EA4" />
              <rect x="14" y="27" width="3" height="16" fill="#9A9EA4" />
              <rect x="26" y="7" width="3" height="36" fill="#7E8288" />
              <rect x="36" y="7" width="3" height="36" fill="#6C7076" />
              <rect y="30" width="48" height="3" fill="#55595F" />
              <rect x="46" y="3" width="2" height="45" fill="#1E2023" />
            </pattern>
            <pattern id="rt" width="48" height="8" patternUnits="userSpaceOnUse">
              <rect width="48" height="8" fill="#18191C" />
              <rect y="3" width="48" height="2" fill="#3E4147" />
            </pattern>
          </defs>
        </svg>
        <div className="zart">
          <div className="zs">
            <div className="f zon fade" style={{ width: "200cqw", height: "175cqw", left: "-50cqw", top: "-43.75cqw", transform: "translateZ(-0.1562cqw)" }}>
              <svg viewBox="-320 -280 1280 1120" preserveAspectRatio="none">
                <rect x="-320" y="-280" width="1280" height="1120" fill="url(#cell)" />
                <rect x="-320" y="-336" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="-144" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="48" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="240" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="432" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="624" width="1280" height="48" fill="url(#cell2)" />
                <rect x="-320" y="816" width="1280" height="48" fill="url(#cell2)" />
                <rect x="456" y="-280" width="48" height="1120" fill="url(#rt)" />
              </svg>
            </div>
            <div className="f" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(0)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <rect width="640" height="560" fill="url(#cell)" />
                <rect y="48" width="640" height="48" fill="url(#cell2)" />
                <rect y="240" width="640" height="48" fill="url(#cell2)" />
                <rect y="432" width="640" height="48" fill="url(#cell2)" />
                <rect x="72" y="147" width="96" height="45" fill="#1F2124" opacity=".7" />
                <rect x="528" y="339" width="72" height="45" fill="#1F2124" opacity=".7" />
                <rect x="24" y="387" width="48" height="45" fill="#1F2124" opacity=".7" />
                <rect x="456" y="0" width="48" height="560" fill="url(#rt)" />
              </svg>
            </div>
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "0", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "0.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "7.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "7.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "15cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "15.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "22.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "22.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "30cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "30.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "37.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "37.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "45cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "45.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "52.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "52.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "60cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "60.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "67.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "67.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "75cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "75.2344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "82.5cqw", transform: "translateZ(0.4688cqw)", background: "#B5B9BF" }} />
            <div className="f" style={{ width: "100cqw", height: "0.4688cqw", left: "0", top: "82.7344cqw", transform: "translateZ(0.2344cqw) rotateX(-90deg)", background: "linear-gradient(#8D9095,#5A5C60)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "3.75cqw", top: "3.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "3.75cqw", top: "3.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "4.0625cqw", top: "3.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "3.9844cqw", top: "3.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "37.5cqw", top: "3.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "37.5cqw", top: "3.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "37.8125cqw", top: "3.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "37.7344cqw", top: "3.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "60cqw", top: "3.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "60cqw", top: "3.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "60.3125cqw", top: "3.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "60.2344cqw", top: "3.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "13.75cqw", height: "0.7812cqw", left: "86.25cqw", top: "3.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "13.75cqw", height: "0.4688cqw", left: "86.25cqw", top: "3.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "86.5625cqw", top: "3.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "86.4844cqw", top: "3.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "0", top: "10.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "0", top: "11.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "0.3125cqw", top: "10.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "0.2344cqw", top: "10.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "22.5cqw", top: "10.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "22.5cqw", top: "11.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "22.8125cqw", top: "10.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "22.7344cqw", top: "10.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "71.25cqw", top: "10.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "71.25cqw", top: "11.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "71.5625cqw", top: "10.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "71.4844cqw", top: "10.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "0", top: "18.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "0", top: "18.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "0.3125cqw", top: "18.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "0.2344cqw", top: "18.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "45cqw", top: "18.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "45cqw", top: "18.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "45.3125cqw", top: "18.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "45.2344cqw", top: "18.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "67.5cqw", top: "18.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "67.5cqw", top: "18.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "67.8125cqw", top: "18.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "67.7344cqw", top: "18.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "7.5cqw", top: "25.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "7.5cqw", top: "26.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "25.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "25.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "52.5cqw", top: "25.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "52.5cqw", top: "26.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "52.8125cqw", top: "25.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "52.7344cqw", top: "25.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "17.5cqw", height: "0.7812cqw", left: "82.5cqw", top: "25.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "17.5cqw", height: "0.4688cqw", left: "82.5cqw", top: "26.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "82.8125cqw", top: "25.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "82.7344cqw", top: "25.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "3.75cqw", top: "33.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "3.75cqw", top: "33.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "4.0625cqw", top: "33.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "3.9844cqw", top: "33.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "41.25cqw", top: "33.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "41.25cqw", top: "33.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "41.5625cqw", top: "33.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "41.4844cqw", top: "33.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "28.75cqw", height: "0.7812cqw", left: "71.25cqw", top: "33.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "28.75cqw", height: "0.4688cqw", left: "71.25cqw", top: "33.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "71.5625cqw", top: "33.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "71.4844cqw", top: "33.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "7.5cqw", top: "40.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "7.5cqw", top: "41.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "40.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "40.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "37.5cqw", top: "40.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "37.5cqw", top: "41.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "37.8125cqw", top: "40.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "37.7344cqw", top: "40.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "71.25cqw", top: "40.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "71.25cqw", top: "41.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "71.5625cqw", top: "40.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "71.4844cqw", top: "40.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "7.5cqw", top: "48.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "7.5cqw", top: "48.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "48.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "48.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "37.5cqw", top: "48.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "37.5cqw", top: "48.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "37.8125cqw", top: "48.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "37.7344cqw", top: "48.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "67.5cqw", top: "48.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "67.5cqw", top: "48.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "67.8125cqw", top: "48.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "67.7344cqw", top: "48.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "7.5cqw", top: "55.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "7.5cqw", top: "56.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "55.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "55.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "56.25cqw", top: "55.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "56.25cqw", top: "56.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "56.5625cqw", top: "55.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "56.4844cqw", top: "55.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "30cqw", height: "0.7812cqw", left: "3.75cqw", top: "63.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "30cqw", height: "0.4688cqw", left: "3.75cqw", top: "63.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "4.0625cqw", top: "63.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "3.9844cqw", top: "63.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "45cqw", top: "63.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "45cqw", top: "63.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "45.3125cqw", top: "63.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "45.2344cqw", top: "63.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "75cqw", top: "63.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "75cqw", top: "63.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "75.3125cqw", top: "63.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "75.2344cqw", top: "63.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "30cqw", height: "0.7812cqw", left: "7.5cqw", top: "70.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "30cqw", height: "0.4688cqw", left: "7.5cqw", top: "71.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "70.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "70.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "52.5cqw", top: "70.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "52.5cqw", top: "71.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "52.8125cqw", top: "70.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "52.7344cqw", top: "70.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "7.5cqw", top: "78.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "7.5cqw", top: "78.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "7.8125cqw", top: "78.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "7.7344cqw", top: "78.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "56.25cqw", top: "78.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "56.25cqw", top: "78.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "56.5625cqw", top: "78.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "56.4844cqw", top: "78.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "21.25cqw", height: "0.7812cqw", left: "78.75cqw", top: "78.3594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "21.25cqw", height: "0.4688cqw", left: "78.75cqw", top: "78.9062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "79.0625cqw", top: "78.3594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "78.9844cqw", top: "78.4375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "22.5cqw", height: "0.7812cqw", left: "3.75cqw", top: "85.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "22.5cqw", height: "0.4688cqw", left: "3.75cqw", top: "86.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "4.0625cqw", top: "85.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "3.9844cqw", top: "85.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "37.5cqw", height: "0.7812cqw", left: "37.5cqw", top: "85.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "37.5cqw", height: "0.4688cqw", left: "37.5cqw", top: "86.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "37.8125cqw", top: "85.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "37.7344cqw", top: "85.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m2T zon" style={{ width: "15cqw", height: "0.7812cqw", left: "82.5cqw", top: "85.8594cqw", transform: "translateZ(2.3438cqw)" }} />
            <div className="f m2S zon" style={{ width: "15cqw", height: "0.4688cqw", left: "82.5cqw", top: "86.4062cqw", transform: "translateZ(2.1094cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "0.625cqw", height: "1.4062cqw", left: "82.8125cqw", top: "85.8594cqw", transform: "translateZ(1.1719cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "82.7344cqw", top: "85.9375cqw", transform: "translateZ(1.1719cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "5.0781cqw", top: "6.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "5.0781cqw", top: "32.1875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "5.8594cqw", top: "6.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "5.2344cqw", top: "10.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "5.3125cqw", top: "10.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "5.2344cqw", top: "18.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "5.3125cqw", top: "18.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "33.75cqw", left: "5.0781cqw", top: "40cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "5.0781cqw", top: "73.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "33.75cqw", left: "5.8594cqw", top: "40cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "11.25cqw", left: "5.0781cqw", top: "77.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "5.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "11.25cqw", left: "5.8594cqw", top: "77.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "33.75cqw", left: "20.0781cqw", top: "6.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "20.0781cqw", top: "39.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "33.75cqw", left: "20.8594cqw", top: "6.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "20.2344cqw", top: "18.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "20.3125cqw", top: "18.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "20.2344cqw", top: "33.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "20.3125cqw", top: "33.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "20.0781cqw", top: "47.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "20.0781cqw", top: "73.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "20.8594cqw", top: "47.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "20.2344cqw", top: "63.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "20.3125cqw", top: "63.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "7.5cqw", left: "20.0781cqw", top: "81.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "20.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "7.5cqw", left: "20.8594cqw", top: "81.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "20.2344cqw", top: "85.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "20.3125cqw", top: "85.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "35.0781cqw", top: "-1.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "35.0781cqw", top: "17.1875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "35.8594cqw", top: "-1.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "33.75cqw", left: "35.0781cqw", top: "21.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "35.0781cqw", top: "54.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "33.75cqw", left: "35.8594cqw", top: "21.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "35.2344cqw", top: "25.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "35.3125cqw", top: "25.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "35.0781cqw", top: "62.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "35.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "35.8594cqw", top: "62.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "35.2344cqw", top: "70.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "35.3125cqw", top: "70.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "35.2344cqw", top: "78.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "35.3125cqw", top: "78.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "50.0781cqw", top: "-1.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "50.0781cqw", top: "24.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "50.8594cqw", top: "-1.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "50.2344cqw", top: "10.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "50.3125cqw", top: "10.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "50.2344cqw", top: "18.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "50.3125cqw", top: "18.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "33.75cqw", left: "50.0781cqw", top: "32.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "50.0781cqw", top: "65.9375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "33.75cqw", left: "50.8594cqw", top: "32.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "50.2344cqw", top: "48.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "50.3125cqw", top: "48.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "50.2344cqw", top: "63.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "50.3125cqw", top: "63.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "50.0781cqw", top: "70cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "50.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "50.8594cqw", top: "70cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "50.2344cqw", top: "85.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "50.3125cqw", top: "85.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "65.0781cqw", top: "6.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "65.0781cqw", top: "24.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "65.8594cqw", top: "6.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "65.0781cqw", top: "32.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "65.0781cqw", top: "58.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "65.8594cqw", top: "32.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "65.2344cqw", top: "55.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "65.3125cqw", top: "55.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "22.5cqw", left: "65.0781cqw", top: "66.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "65.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "22.5cqw", left: "65.8594cqw", top: "66.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "65.2344cqw", top: "70.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "65.3125cqw", top: "70.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "65.2344cqw", top: "78.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "65.3125cqw", top: "78.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "33.75cqw", left: "80.0781cqw", top: "2.5cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "80.0781cqw", top: "35.9375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "33.75cqw", left: "80.8594cqw", top: "2.5cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "18.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "18.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "33.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "33.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "80.0781cqw", top: "40cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "80.0781cqw", top: "65.9375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "80.8594cqw", top: "40cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "40.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "40.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "48.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "48.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "55.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "55.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "63.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "63.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "80.0781cqw", top: "70cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "80.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "80.8594cqw", top: "70cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "70.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "70.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "80.2344cqw", top: "78.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "80.3125cqw", top: "78.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "95.0781cqw", top: "6.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "95.0781cqw", top: "24.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "95.8594cqw", top: "6.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "26.25cqw", left: "95.0781cqw", top: "28.75cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "95.0781cqw", top: "54.6875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "26.25cqw", left: "95.8594cqw", top: "28.75cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "95.2344cqw", top: "33.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "95.3125cqw", top: "33.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "18.75cqw", left: "95.0781cqw", top: "58.75cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "95.0781cqw", top: "77.1875cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "18.75cqw", left: "95.8594cqw", top: "58.75cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "95.2344cqw", top: "63.3594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "95.3125cqw", top: "63.4375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f m3T zon" style={{ width: "1.0938cqw", height: "7.5cqw", left: "95.0781cqw", top: "81.25cqw", transform: "translateZ(4.375cqw)" }} />
            <div className="f m3S zon" style={{ width: "1.0938cqw", height: "0.625cqw", left: "95.0781cqw", top: "88.4375cqw", transform: "translateZ(4.0625cqw) rotateX(-90deg)" }} />
            <div className="f m3E zon" style={{ width: "0.625cqw", height: "7.5cqw", left: "95.8594cqw", top: "81.25cqw", transform: "translateZ(4.0625cqw) rotateY(90deg)" }} />
            <div className="f viS zon" style={{ width: "0.7812cqw", height: "1.4062cqw", left: "95.2344cqw", top: "85.8594cqw", transform: "translateZ(3.0469cqw) rotateX(-90deg)" }} />
            <div className="f viS zon" style={{ width: "1.4062cqw", height: "0.625cqw", left: "95.3125cqw", top: "85.9375cqw", transform: "translateZ(3.0469cqw) rotateY(90deg)" }} />
            <div className="f lodp" style={{ width: "100cqw", height: "87.5cqw", left: "0", top: "0", transform: "translateZ(6.25cqw)" }}>
              <svg viewBox="0 0 640 560" preserveAspectRatio="none">
                <g className="lod">
                  <g transform="scale(11.5628) translate(-232.975 -111.785)">
                    <g transform="translate(205.3 40)">
                      <rect x="-10" y="40" width="130" height="112" fill="#181A1D" />
                      <rect y="48" width="110.7" height="96" fill="url(#cc2)" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="f tg" style={{ width: "26.25cqw", height: "22.5cqw", left: "33.75cqw", top: "30cqw", transform: "translateZ(4.8438cqw)" }}>
              <svg viewBox="216 192 168 144" preserveAspectRatio="none">
                <rect x="216" y="192" width="168" height="144" rx="0" className="tgt" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="zlab" viewBox="0 0 640 560">
          <g className="lbls">
            <rect x="452" y="208" width="178" height="22" rx="3" className="bxA" />
            <text x="462" y="223" className="tb tA">Full-adder tile · next ↓</text>
            <line x1="452" y1="219" x2="357" y2="219" className="ldA" />
            <circle cx="357" cy="219" r="2.5" className="tA" />
            <rect x="10" y="236" width="86" height="22" rx="3" className="bx" />
            <text x="20" y="251" className="tb">Power rail</text>
            <line x1="10" y1="247" x2="-7" y2="247" className="ld" />
            <circle cx="-7" cy="247" r="2.5" fill="#F2F2EE" />
            <rect x="10" y="451" width="112" height="22" rx="3" className="bx" />
            <text x="20" y="466" className="tb">Standard cells</text>
            <line x1="122" y1="462" x2="180" y2="432" className="ld" />
            <circle cx="180" cy="432" r="2.5" fill="#F2F2EE" />
            <rect x="518" y="392" width="112" height="22" rx="3" className="bx" />
            <text x="528" y="407" className="tb">Wiring channel</text>
            <line x1="544" y1="392" x2="544" y2="363" className="ld" />
            <circle cx="544" cy="363" r="2.5" fill="#F2F2EE" />
            <rect x="478" y="91" width="152" height="22" rx="3" className="bx" />
            <text x="488" y="106" className="tb">M2 / M3 metal · vias</text>
            <line x1="478" y1="102" x2="472" y2="146" className="ld" />
            <circle cx="472" cy="146" r="2.5" fill="#F2F2EE" />
          </g>
        </svg>
      </div>
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
