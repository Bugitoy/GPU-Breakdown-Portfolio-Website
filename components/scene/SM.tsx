export default function SM({ z }: { z: Record<string, string> }) {
  return (
    <>
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
    </>
  );
}
