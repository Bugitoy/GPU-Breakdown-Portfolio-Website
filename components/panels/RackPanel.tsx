export default function RackPanel() {
  return (
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
  );
}
