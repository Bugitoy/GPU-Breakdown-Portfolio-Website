export default function Die({ z }: { z: Record<string, string> }) {
  return (
    <>
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
    </>
  );
}
