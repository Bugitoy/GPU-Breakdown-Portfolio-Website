export default function LogicPanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 08 / 10 · Logic cells</p>
          <div className="bar" />
          <h2 className="ttl">Leadership</h2>
          <p className="sub">Small blocks, wired together, doing more</p>
          <div className="item">
            <div className="ih">
              <h3>Buckeye Silicon — President</h3>
              <span className="when">Aug 2026 – Present</span>
            </div>
            <ul className="bul">
              <li>Lead the executive board of a semiconductor and chip design club, running workshops and hardware projects.</li>
            </ul>
          </div>
          <div className="item">
            <div className="ih">
              <h3>Artificial Intelligence Club — Vice President</h3>
              <span className="when">Aug 2026 – Present</span>
            </div>
            <ul className="bul">
              <li>Co-lead club operations, organizing industry speaker events and hands-on AI workshops for students.</li>
            </ul>
          </div>
          <div className="item">
            <p className="lab">Member</p>
            <ul className="chips">
              <li className="chip">Code4Community</li>
              <li className="chip">ColorStack</li>
              <li className="chip">Software Engineering Club</li>
              <li className="chip">Game Creation Club</li>
              <li className="chip">OSU Club Tennis</li>
            </ul>
          </div>
          <h2 className="ttl sect">Competitions</h2>
          <p className="sub">Switching ideas on, fast</p>
          <div className="item">
            <div className="ih">
              <h3>RevolutionUC Hackathon</h3>
              <span className="when">Mar 2026</span>
            </div>
            <p className="org">1st Place · Best Social Impact · University of Cincinnati</p>
            <ul className="bul">
              <li>Built a location-aware, gamified productivity app with live map navigation — the prototype that became <b>Lua</b>.</li>
            </ul>
          </div>
          <div className="item">
            <div className="ih">
              <h3>Smart Sorting Trash Can</h3>
              <span className="when">Sep 2024</span>
            </div>
            <p className="org">CEAS Innovation Challenge · University of Cincinnati</p>
            <ul className="bul">
              <li>Sorts waste from images captured by an ESP32-CAM wired to an Arduino Uno.</li>
              <li>Collected and labelled the image dataset; trained an Edge Impulse object-detection model to 95% accuracy.</li>
            </ul>
          </div>
        </div>
      </>
  );
}
