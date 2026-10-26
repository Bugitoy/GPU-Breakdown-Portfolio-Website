export default function Card({ z }: { z: Record<string, string> }) {
  return (
    <>
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
    </>
  );
}
