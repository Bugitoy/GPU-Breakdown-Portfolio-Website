export default function CoolerPanel({ eduHsOpen, eduHsBtn, toggleEduHs }: { eduHsOpen: boolean; eduHsBtn: string; toggleEduHs: () => void }) {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 03 / 10 · The cooler</p>
          <div className="bar" />
          <h2 className="ttl">Education</h2>
          <p className="sub">The board everything else is mounted on</p>
          <div className="item">
            <div className="ih">
              <h3>BS, Electrical &amp; Computer Engineering</h3>
              <span className="when">Aug 2026 – Jun 2028</span>
            </div>
            <p className="org">The Ohio State University · Columbus, OH · GPA 4.0</p>
            <p className="lab" style={{ marginTop: "12px" }}>Activities</p>
            <ul className="chips">
              <li className="chip">Buckeye Silicon</li>
              <li className="chip">AI Club</li>
              <li className="chip">Software Engineering Club</li>
              <li className="chip">ColorStack</li>
              <li className="chip">Code4Community</li>
              <li className="chip">Game Creation Club</li>
              <li className="chip">OSU Club Tennis</li>
            </ul>
            <span className="xfer">Transfered to OSU from University of Cincinnati</span>
          </div>
          <div className="item">
            <div className="ih">
              <h3>BS, Electrical &amp; Computer Engineering</h3>
              <span className="when">Aug 2024 – Aug 2026</span>
            </div>
            <p className="org">University of Cincinnati · College of Engineering &amp; Applied Science · GPA 4.0</p>
            <ul className="bul">
              <li>Double major with a minor in Computer Science, Statistics &amp; Mathematics.</li>
            </ul>
            <p className="lab" style={{ marginTop: "12px" }}>Activities</p>
            <ul className="chips">
              <li className="chip">CEAS Tribunal</li>
              <li className="chip">UC Club Tennis</li>
              <li className="chip">Peruanos Soccer</li>
            </ul>
          </div>
          <div className="item">
            <p className="lab">Coursework (university)</p>
            <ul className="chips">
              <li className="chip">Data Structures &amp; Algorithms</li>
              <li className="chip">Intro to Parallel Computing</li>
              <li className="chip">Computer Architecture</li>
              <li className="chip">Operating Systems</li>
              <li className="chip">VLSI Design</li>
              <li className="chip">Verilog</li>
              <li className="chip">SystemVerilog</li>
              <li className="chip">VHDL</li>
              <li className="chip">Electronics</li>
              <li className="chip">Signals &amp; Systems</li>
              <li className="chip">Multivariable Calculus</li>
              <li className="chip">Linear Algebra</li>
              <li className="chip">Probability &amp; Statistics</li>
            </ul>
          </div>
          <div className="item">
            <p className="edu-tease">Earlier: Legae Academy · Gaborone, Botswana · IGCSE &amp; A-Levels</p>
            <button className="btn edu-more" type="button" onClick={toggleEduHs}>{eduHsBtn}</button>
            {eduHsOpen && (
              <>
                <div className="item" style={{ borderTop: "none", paddingTop: "16px" }}>
                  <div className="ih">
                    <h3>Advanced Level (A-Levels)</h3>
                    <span className="when">Jan 2022 – Nov 2023</span>
                  </div>
                  <p className="org">Legae Academy</p>
                  <ul className="bul">
                    <li>Computer Science, Mathematics, Physics, Chemistry.</li>
                    <li>Captain, Legae Academy Tennis Club; senior member, Advocates for Red Cross committee.</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="ih">
                    <h3>IGCSE</h3>
                    <span className="when">Jan 2020 – Nov 2021</span>
                  </div>
                  <p className="org">Legae Academy · 6 A*s and 2 As</p>
                  <ul className="bul">
                    <li>Computer Science, Mathematics, Chemistry, Biology, Geography, Business Studies, English, Agriculture.</li>
                    <li>School prefect; captain, Legae Academy Tennis Club.</li>
                    <li>Black belt in karate (Botswana Karate Association).</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </>
  );
}
