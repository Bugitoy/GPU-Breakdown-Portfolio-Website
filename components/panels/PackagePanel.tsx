export default function PackagePanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 05 / 10 · The package</p>
          <div className="bar" />
          <h2 className="ttl">Currently building</h2>
          <p className="sub">Still on the fab line</p>
          <div className="item">
            <div className="ih">
              <h3>Lua <span className="tag">In progress</span></h3>
              <span className="when">Mar 2026 – Present</span>
            </div>
            <p className="org">Founder · Gamified productivity app</p>
            <ul className="bul">
              <li>A location-aware productivity app for iOS and Android with live maps, push notifications, multi-language support and a pixel-art UI.</li>
              <li>Started as my RevolutionUC 2026 entry, which won 1st Place for Best Social Impact; now being developed toward release on the Google Play Store.</li>
            </ul>
            <ul className="chips" style={{ marginTop: "12px" }}>
              <li className="chip">React Native</li>
              <li className="chip">Expo</li>
              <li className="chip">TypeScript</li>
              <li className="chip">Skia</li>
              <li className="chip">Maps</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/Lua" target="_blank" rel="noopener">View code ↗</a>
          </div>
          <div className="item">
            <div className="ih">
              <h3>Thanodi Tutoring Platform <span className="tag">In progress</span></h3>
              <span className="when">Oct 2026 – Present</span>
            </div>
            <p className="org">Co-Founder · Online tutoring for Botswana</p>
            <ul className="bul">
              <li>Connects students, parents and tutors.</li>
              <li>Live lesson rooms with video, chat and a shared whiteboard; booking and payments; curriculum-based tutor search; community Q&amp;A with leaderboards; and after-lesson progress reports.</li>
            </ul>
            <ul className="chips" style={{ marginTop: "12px" }}>
              <li className="chip">Next.js</li>
              <li className="chip">React</li>
              <li className="chip">TypeScript</li>
              <li className="chip">Tailwind</li>
              <li className="chip">shadcn/ui</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/Tutoring-Platform" target="_blank" rel="noopener">View code ↗</a>
          </div>
          <div className="item">
            <div className="ih">
              <h3>This portfolio <span className="tag">In progress</span></h3>
            </div>
            <p className="org">A GPU teardown, from datacenter rack to atoms</p>
            <ul className="bul">
              <li>A scroll-driven site that takes one GPU apart layer by layer, with my story told along the way.</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/GPU-Breakdown-Portfolio-Website" target="_blank" rel="noopener">View code ↗</a>
          </div>
        </div>
      </>
  );
}
