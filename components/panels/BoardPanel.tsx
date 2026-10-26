export default function BoardPanel() {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 04 / 10 · The PCB</p>
          <div className="bar" />
          <h2 className="ttl">Experience</h2>
          <p className="sub">The traces everything else runs on</p>
          <div className="item">
            <div className="ih">
              <h3>Graphics Engineer</h3>
              <span className="when">Jan – May 2026</span>
            </div>
            <p className="org">Experiential Exploratory Program · University of Cincinnati</p>
            <ul className="bul">
              <li>Architected a high-performance, multithreaded CPU path tracer in C++ with Vulkan/Walnut, using a Surface Area Heuristic (SAH) BVH to accelerate ray–primitive intersections on complex polygon meshes.</li>
              <li>Engineered a physically based stochastic integrator with Next-Event Estimation, Russian Roulette path termination and 8-bounce global illumination for unbiased rendering.</li>
              <li>Restructured the per-pixel pipeline for L1 cache locality, with SIMD vectorization and C++17 parallel algorithms.</li>
              <li>Built Dear ImGui controls for camera and scene editing, with progressive frame accumulation.</li>
            </ul>
            <div className="stats">
              <div className="stat">
                <b>31 → &lt;8 ms</b>
                <span>frame time</span>
              </div>
              <div className="stat">
                <b>120+</b>
                <span>frames per second</span>
              </div>
              <div className="stat">
                <b>45M</b>
                <span>rays per second</span>
              </div>
            </div>
            <a className="lnk" href="https://github.com/Bugitoy/RayTracing" target="_blank" rel="noopener">View code ↗</a>
            <blockquote className="quote">
              <p>"He independently worked through the mathematics, graphics concepts, and programming involved in creating virtual cameras, lighting, materials, antialiasing, and realistic light behavior."</p>
              <cite>Liz Pawley · his instructor for the program</cite>
            </blockquote>
          </div>
          <div className="item">
            <div className="ih">
              <h3>NVIDIA Summer Bridge Program</h3>
              <span className="when">Jun – Aug 2025</span>
            </div>
            <p className="org">NVIDIA · Remote</p>
            <ul className="bul">
              <li>Selected for NVIDIA's early-talent program exploring its products, technologies and culture.</li>
              <li>Studied the chip design cycle, from architecture through fabrication to productization.</li>
            </ul>
          </div>
        </div>
      </>
  );
}
