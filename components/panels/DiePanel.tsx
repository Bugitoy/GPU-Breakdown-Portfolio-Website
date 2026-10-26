export default function DiePanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 06 / 10 · The die</p>
          <div className="bar" />
          <h2 className="ttl">Past projects</h2>
          <p className="sub">GPU &amp; web · thinking in parallel</p>
          <div className="item">
            <div className="ih">
              <h3>CUDA-Accelerated Maxwell Equation Simulator</h3>
              <span className="when">Sep – Oct 2025</span>
            </div>
            <p className="org">CUDA C++ · electromagnetic wave propagation</p>
            <ul className="bul">
              <li>Ported a 2D Maxwell's-equations simulator from the CPU to the GPU using Thrust and device lambdas.</li>
              <li>Added a coarse-grid visualization that averages each tile with one thread block and <code>cub::BlockReduce</code>.</li>
              <li>Used asynchronous streams and shared/L1 cache to push throughput past NVIDIA's expected target.</li>
            </ul>
            <div className="stats">
              <div className="stat">
                <b>197M</b>
                <span>cells / s on CPU</span>
              </div>
              <div className="stat">
                <b>4.9B</b>
                <span>cells / s on GPU</span>
              </div>
              <div className="stat">
                <b>≈ 25×</b>
                <span>throughput</span>
              </div>
            </div>
            <a className="lnk" href="https://github.com/Bugitoy/Cuda-Accelerated-Maxwell-Equation-Simulator" target="_blank" rel="noopener">View code ↗</a>
          </div>
          <div className="item">
            <div className="ih">
              <h3>Study-Talk</h3>
              <span className="when">May – Aug 2025</span>
            </div>
            <p className="org">Full-stack online study platform</p>
            <ul className="bul">
              <li>Group video-call study rooms, study-time leaderboards, anonymous confessions and Kahoot-style live quizzes with video chat.</li>
              <li>Omegle-style random video chat to meet students worldwide.</li>
            </ul>
            <ul className="chips" style={{ marginTop: "12px" }}>
              <li className="chip">Stream-io WebRTC</li>
              <li className="chip">Next.js</li>
              <li className="chip">Docker</li>
              <li className="chip">Redis</li>
              <li className="chip">Socket.io</li>
              <li className="chip">MongoDB</li>
              <li className="chip">Prisma</li>
              <li className="chip">Kinde Auth</li>
              <li className="chip">Stripe</li>
            </ul>
            <a className="lnk" href="https://github.com/Bugitoy/Study-Talk" target="_blank" rel="noopener">View code ↗</a>
          </div>
        </div>
      </>
  );
}
