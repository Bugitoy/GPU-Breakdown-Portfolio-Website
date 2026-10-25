// The copy panel for each layer; only the active layer's panel is rendered.
type Props = {
  show: Record<string, boolean>;
  eduHsOpen: boolean;
  eduHsBtn: string;
  toggleEduHs: () => void;
  letterOpen: boolean;
  toggleLetter: () => void;
  restart: () => void;
};

export default function Panels({ show, eduHsOpen, eduHsBtn, toggleEduHs, letterOpen, toggleLetter, restart }: Props) {
  return (
    <>
      {show.s0 && (
        <>
          <div className="pnl">
            <p className="kick">Layer 01 / 10 · The rack</p>
            <div className="bar" />
            <h1 className="ttl">Hi, I'm Lefika.</h1>
            <p className="sub">Electrical &amp; Computer Engineering</p>
            <p className="body">I'm an ECE student at The Ohio State University who works across the full stack, from mobile and web apps people use every day, to path tracers and CUDA kernels in the middle, and chip design down to silicon. This page takes one GPU apart, layer by layer, and tells you about me on the way down.</p>
            <blockquote className="quote">
              <p>"The word I have consistently used to describe Lefika is go-getter."</p>
              <cite>Liz Pawley · Assistant Professor, University of Cincinnati</cite>
            </blockquote>
            <dl className="meta">
              <dt>Based</dt>
              <dd>Columbus, Ohio, USA</dd>
              <dt>Into</dt>
              <dd>Mobile &amp; web · Graphics · GPU computing · Chip design · AI</dd>
              <dt>Speaks</dt>
              <dd>English · French · Setswana</dd>
            </dl>
            <div className="cta">
              <a className="btn pri" href="mailto:lefikatmoalosi@gmail.com">Email me</a>
              <a className="btn" href="https://www.linkedin.com/in/lefikamoalosi/" target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn" href="https://github.com/Bugitoy" target="_blank" rel="noopener">GitHub</a>
            </div>
            <p className="hint">Scroll, swipe, or press <b>Dissect</b> to go one layer deeper.</p>
          </div>
        </>
      )}
      {show.s1 && (
        <>
          <div className="pnl">
            <p className="kick">Layer 02 / 10 · The card</p>
            <div className="bar" />
            <h2 className="ttl">Spec sheet</h2>
            <p className="sub">Every card ships with one. Here's what's on mine.</p>
            <dl className="spec">
              <dt>Programming languages</dt>
              <dd>C · C++ · CUDA · Python · Rust · C# · JavaScript · TypeScript</dd>
              <dt>GPU &amp; graphics</dt>
              <dd>CUDA · Vulkan · SIMD · multithreading</dd>
              <dt>Machine learning</dt>
              <dd>PyTorch · transformers</dd>
              <dt>Hardware design</dt>
              <dd>Verilog · SystemVerilog · VHDL</dd>
              <dt>Web &amp; mobile</dt>
              <dd>Next.js · React · React Native · Node.js · Tailwind</dd>
              <dt>Databases</dt>
              <dd>MongoDB · Redis · SQL · Prisma</dd>
              <dt>Cloud &amp; tooling</dt>
              <dd>Docker · AWS · CI/CD · Linux · WebRTC · Socket.io</dd>
              <dt>Spoken languages</dt>
              <dd>English (native) · Setswana (full professional) · French (professional working)</dd>
            </dl>
          </div>
        </>
      )}
      {show.s2 && (
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
      )}
      {show.s3 && (
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
      )}
      {show.s4 && (
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
      )}
      {show.s5 && (
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
      )}
      {show.s6 && (
        <>
          <div className="pnl">
            <p className="kick">Layer 07 / 10 · One SM</p>
            <div className="bar" />
            <h2 className="ttl">Machine learning Projects</h2>
            <p className="sub">From tensors to transformers</p>
            <div className="item">
              <div className="ih">
                <h3>PyTorch Tutorial</h3>
                <span className="when">Nov 2025</span>
              </div>
              <p className="org">Written guide · how PyTorch works</p>
              <ul className="bul">
                <li>A walkthrough of PyTorch fundamentals, from tensors up to the pieces used to build language models.</li>
              </ul>
              <a className="lnk" href="https://github.com/Bugitoy/Pytorch-Tutorial" target="_blank" rel="noopener">Read it ↗</a>
            </div>
            <div className="item">
              <div className="ih">
                <h3>Character-Level Bigram Model</h3>
                <span className="when">Oct 2025</span>
              </div>
              <p className="org">PyTorch · first language model</p>
              <ul className="bul">
                <li>Learns next-character probabilities from a text corpus with a single embedding lookup, trained with cross-entropy and sampled autoregressively.</li>
              </ul>
              <a className="lnk" href="https://github.com/Bugitoy/Character-Level-Bigram-Model" target="_blank" rel="noopener">View code ↗</a>
            </div>
            <div className="item">
              <div className="ih">
                <h3>GPT-Style Transformer</h3>
                <span className="when">Sep – Nov 2025</span>
              </div>
              <p className="org">PyTorch · from scratch</p>
              <ul className="bul">
                <li>Character-level language model inspired by OpenAI's GPT architecture: multi-head self-attention, positional embeddings and feed-forward blocks.</li>
                <li>384-dim embeddings, 6 attention heads, 6 layers, trained on Tiny Shakespeare with AdamW to a 1.7 cross-entropy loss.</li>
              </ul>
              <a className="lnk" href="https://github.com/Bugitoy/GPT-style-Transformer" target="_blank" rel="noopener">View code ↗</a>
            </div>
          </div>
        </>
      )}
      {show.s7 && (
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
      )}
      {show.s8 && (
        <>
          <div className="pnl">
            <p className="kick">Layer 09 / 10 · One transistor</p>
            <div className="bar" />
            <h2 className="ttl">Honors</h2>
            <p className="sub">Selected recognition</p>
            <div className="item feat">
              <p className="feat-k">Highest honor</p>
              <div className="ih">
                <h3>National Top Achiever</h3>
                <span className="when">Jan 2022</span>
              </div>
              <p className="org">Government of Botswana · highest national academic honor</p>
              <ul className="bul">
                <li>Highest overall performance nationwide in high school examinations; fully funded tuition from Bachelor's through PhD level.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>3× Dean's List Scholar</h3>
                <span className="when">Aug 2024 – May 2026</span>
              </div>
              <p className="org">University of Cincinnati · College of Engineering &amp; Applied Science</p>
              <ul className="bul">
                <li>Dean's List each semester for outstanding academic performance in the college.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>International Outreach Scholarship</h3>
                <span className="when">Apr 2024</span>
              </div>
              <p className="org">University of Cincinnati · College of Engineering &amp; Applied Science</p>
              <ul className="bul">
                <li>Merit scholarship for academically qualified international students in CEAS programs.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>Sports Standard Award</h3>
                <span className="when">Mar 2024</span>
              </div>
              <p className="org">Legae Academy · tennis</p>
              <ul className="bul">
                <li>1st in Doubles and 3rd in Singles at the 2023 ISSSA Doubles Tennis Championships.</li>
                <li>2nd in Singles, Mixed Doubles and Doubles at the 2023 ISSSA Schools Tennis Cup.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>Full Colours for Academic Excellence</h3>
                <span className="when">Jun 2022</span>
              </div>
              <p className="org">Legae Academy · IGCSE</p>
              <ul className="bul">
                <li>Outstanding academic performance across high school coursework during the 2021 academic year.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>Sports Standard Award</h3>
                <span className="when">Feb 2020</span>
              </div>
              <p className="org">Legae Academy · tennis</p>
              <ul className="bul">
                <li>1st in Singles and 2nd in Doubles at the 2019 Independent Schools Sports Association (ISSSA) Tennis Championships.</li>
              </ul>
            </div>
            <h2 className="ttl sect">Certificates</h2>
            <p className="sub">Formal training credentials</p>
            <div className="item">
              <div className="ih">
                <h3>Accelerated Computing in Modern CUDA C++</h3>
                <span className="when">Sep 2025</span>
              </div>
              <p className="org">Certificate of Competency · NVIDIA</p>
              <ul className="bul">
                <li>GPU-accelerated heat-conduction and Maxwell's-equations simulators — the Maxwell work is on Layer 06.</li>
              </ul>
            </div>
            <div className="item">
              <div className="ih">
                <h3>AWS re/Start Graduate</h3>
                <span className="when">Apr – Jun 2024</span>
              </div>
              <p className="org">Amazon Web Services · cloud fundamentals</p>
              <ul className="chips" style={{ marginTop: "8px" }}>
                <li className="chip">EC2</li>
                <li className="chip">Lambda</li>
                <li className="chip">RDS</li>
                <li className="chip">DynamoDB</li>
                <li className="chip">IAM</li>
                <li className="chip">AWS CLI &amp; SDKs</li>
                <li className="chip">SQL</li>
                <li className="chip">Bash</li>
                <li className="chip">Linux</li>
              </ul>
            </div>
          </div>
        </>
      )}
      {show.s9 && (
        <>
          <div className="pnl">
            <p className="kick">Layer 10 / 10 · Atoms</p>
            <div className="bar" />
            <h2 className="ttl">In their words</h2>
            <p className="sub">What everything above is built from</p>
            <div className="item letter">
              <p className="lab" style={{ marginBottom: "14px" }}>Letter of recommendation</p>
              <div className={letterOpen ? 'letter-txt open' : 'letter-txt'} id="letter-txt">
                <p className="body">To Whom It May Concern:</p>
                <p className="body">I am happy to recommend Lefika Moalosi for employment opportunities in engineering and technology. I have known Lefika for approximately two years in my role as his co-op advisor at the University of Cincinnati, and I also had the opportunity to work with him more closely as his instructor during his Experiential Explorations Program (EEP). Over that time, the word I have consistently used to describe Lefika is <em>go-getter</em>. He is someone who is genuinely excited about technology, seeks out opportunities on his own, and is rarely satisfied with simply doing what is required of him.</p>
                {letterOpen && (
                  <>
                    <p className="body">One of the things I appreciate most about Lefika is his willingness to challenge himself. During his EEP experience, he chose to spend the semester learning about ray tracing and building a ray tracer in C++. This was not a simple project. He independently worked through the mathematics, graphics concepts, and programming involved in creating virtual cameras, lighting, materials, antialiasing, and realistic light behavior. By the end of the experience, he had developed a functional 3D path tracer and demonstrated a significant amount of technical growth along the way. What stood out to me was not only the final product, but the amount of self-directed learning it took for him to get there.</p>
                    <p className="body">That initiative extends well beyond the classroom. Lefika is constantly finding something new to learn, build, or pursue. His technical interests have ranged from GPU computing and CUDA to artificial intelligence, embedded systems, computer graphics, and full-stack development. He has built projects ranging from a transformer-based language model to a smart waste-sorting system, and during the same semester as his EEP, he independently developed a gamified productivity application during UC's Revolution hackathon. Rather than abandoning that project when the hackathon ended, he continued developing it afterward with the goal of eventually releasing it.</p>
                    <p className="body">I have also watched Lefika approach his professional development with that same persistence. He actively seeks out networking opportunities, technical training, interview preparation, and challenging internship opportunities. He has put significant effort into strengthening his technical interviewing skills and has pursued competitive opportunities in areas that align with his interests in GPU computing and AI. Even when an opportunity has not resulted in the outcome he hoped for, I have seen him respond by continuing to learn and looking for the next opportunity rather than becoming discouraged. That resilience is an important quality in a young engineer.</p>
                    <p className="body">I believe Lefika would be especially valuable to an organization that appreciates employees who are curious, technically ambitious, and willing to take initiative. He is the type of student who does not wait for someone else to tell him what he should learn next; he goes looking for the next challenge himself. I am excited to see where that drive takes him, and I am pleased to recommend him for employment.</p>
                    <p className="body">Please feel free to contact me if I can provide any additional information.</p>
                    <p className="sig">Sincerely,<br />Liz Pawley</p>
                    <p className="byline">Assistant Professor · College of Cooperative Education and Professional Studies · University of Cincinnati</p>
                  </>
                )}
              </div>
              <button className="btn letter-more" type="button" onClick={toggleLetter} aria-expanded={letterOpen} aria-controls="letter-txt">{letterOpen ? 'Show less' : 'Show more'}</button>
            </div>
            <div className="item">
              <p className="body" style={{ marginBottom: "14px" }}>That's the whole teardown — from a rack in a datacenter down to single atoms. Want to build something together?</p>
              <div className="cta">
                <a className="btn pri" href="mailto:lefikatmoalosi@gmail.com">Email me</a>
                <a className="btn" href="https://www.linkedin.com/in/lefikamoalosi/" target="_blank" rel="noopener">LinkedIn</a>
                <button className="btn" type="button" onClick={restart}>Reassemble</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
