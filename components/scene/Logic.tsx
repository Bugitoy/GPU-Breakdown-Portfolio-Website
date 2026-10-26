export default function Logic({ z }: { z: Record<string, string> }) {
  return (
    <>
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
            <line x1="96" y1="247" x2="150" y2="246" className="ld" />
            <circle cx="150" cy="246" r="2.5" fill="#F2F2EE" />
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
    </>
  );
}
